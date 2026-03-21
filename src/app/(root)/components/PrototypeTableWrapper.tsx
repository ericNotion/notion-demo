"use client";

import { PlaygroundButton } from "@/components/playground-kit";
import { useIsProduction } from "@/hooks/usePreviewProductionMode";
import { useProductionUsername } from "@/hooks/useProductionUsername";
import { LinkExternalDialog } from "@/root/components/LinkExternalDialog";
import { NDSTable } from "@/root/components/NDSTable";
import { PrototypeTable } from "@/root/components/PrototypeTable";
import { TemplatesGrid } from "@/root/components/TemplatesGrid";
import { UsernamePromptDialog } from "@/root/components/UsernamePromptDialog";
import { Prototype } from "@/types/prototypes";
import { getLatestVersions } from "@/utils/versionGrouping";
import { useCallback, useMemo, useRef, useState } from "react";
type Guide = { id: string; title: string; slug: string; coverUrl?: string };

type PrototypeWithAuthor = Prototype & { username: string };

type TemplatesNDSTab = "templates" | "nds";
type PrototypesFilter = "all" | "mine";

const ACTIVE_TAB_STORAGE_KEY = "playground-active-tab";
const GUIDES_OPEN_STORAGE_KEY = "playground-guides-open";

function getStoredTab(): TemplatesNDSTab {
  if (typeof window === "undefined") return "templates";
  const stored = localStorage.getItem(ACTIVE_TAB_STORAGE_KEY);
  if (stored === "templates" || stored === "nds") return stored;
  return "templates";
}

function getStoredGuidesOpen(): boolean {
  if (typeof window === "undefined") return true;
  const stored = localStorage.getItem(GUIDES_OPEN_STORAGE_KEY);
  if (stored === "false") return false;
  return true;
}

export function PrototypeTableWrapper({
  prototypes,
  currentUsername,
  templates,
  guides: _guides,
}: {
  prototypes: PrototypeWithAuthor[];
  currentUsername?: string;
  allowFileOps: boolean;
  templates?: Prototype[];
  guides?: Guide[];
}) {
  const [activeTab, setActiveTabState] =
    useState<TemplatesNDSTab>(getStoredTab);

  const setActiveTab = useCallback((tab: TemplatesNDSTab) => {
    setActiveTabState(tab);
    localStorage.setItem(ACTIVE_TAB_STORAGE_KEY, tab);
  }, []);
  // Guides state is currently unused but will be used when the guides section is re-enabled
  const [_guidesOpen, _setGuidesOpenState] = useState(getStoredGuidesOpen);

  const _setGuidesOpen = useCallback((open: boolean) => {
    _setGuidesOpenState(open);
    localStorage.setItem(GUIDES_OPEN_STORAGE_KEY, String(open));
  }, []);

  const [prototypesFilter, setPrototypesFilter] =
    useState<PrototypesFilter>("all");
  const [usernameFilter, setUsernameFilter] = useState<string | null>(null);
  const [showUsernamePrompt, setShowUsernamePrompt] = useState(false);
  const prod = useIsProduction();
  const prodUsername = useProductionUsername();
  const prototypeSectionRef = useRef<HTMLElement>(null);

  // In production, use the localStorage username; in dev, use currentUsername from props
  const effectiveUsername = prod ? prodUsername.username : currentUsername;

  // Get latest versions (stacked view) for display
  const latestVersions = useMemo(
    () => getLatestVersions(prototypes),
    [prototypes],
  );

  // Filter and sort prototypes by date (newest first)
  const filteredPrototypes = useMemo(() => {
    let filtered = [...latestVersions];

    // Username filter takes precedence when active
    if (usernameFilter) {
      filtered = filtered.filter((p) => p.username === usernameFilter);
    } else if (prototypesFilter === "mine" && effectiveUsername) {
      filtered = filtered.filter((p) => p.username === effectiveUsername);
    }

    return filtered.sort((a, b) => {
      const dateA = a.updatedAt || a.createdAt;
      const dateB = b.updatedAt || b.createdAt;
      return dateB.getTime() - dateA.getTime();
    });
  }, [latestVersions, prototypesFilter, usernameFilter, effectiveUsername]);

  function handleMineClick() {
    // In production, check if we have a valid username first
    if (prod && !prodUsername.isValid && !prodUsername.isLoading) {
      setShowUsernamePrompt(true);
      return;
    }
    setUsernameFilter(null);
    setPrototypesFilter("mine");
  }

  function handleUsernameClick(username: string) {
    // If clicking your own username, just switch to "Mine" filter
    if (username === effectiveUsername) {
      setUsernameFilter(null);
      setPrototypesFilter("mine");
    } else {
      setUsernameFilter(username);
    }
    // Scroll to prototypes section if user is scrolled down
    if (prototypeSectionRef.current) {
      const rect = prototypeSectionRef.current.getBoundingClientRect();
      // Only scroll if the section top is above the viewport (accounting for sticky header ~48px)
      if (rect.top < 48) {
        prototypeSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  return (
    <div className="flex flex-col gap-12">
      <LinkExternalDialog />
      <UsernamePromptDialog
        open={showUsernamePrompt}
        onOpenChange={setShowUsernamePrompt}
        onUsernameSet={(username) => {
          prodUsername.setUsername(username);
          setShowUsernamePrompt(false);
          setPrototypesFilter("mine");
        }}
      />

      {/* Guides Section - hidden for now, will iterate on design later */}
      {/* {guides && guides.length > 0 && (
        <Collapsible open={guidesOpen} onOpenChange={setGuidesOpen}>
          <section className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-10">
            <div className="flex gap-1 lg:justify-end">
              <CollapsibleTrigger asChild>
                <PlaygroundButton variant="ghost" className="gap-1">
                  <span>Guides</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${guidesOpen ? "rotate-180" : ""}`}
                  />
                </PlaygroundButton>
              </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="col-span-3">
              <GuidesGrid guides={guides} />
            </CollapsibleContent>
          </section>
        </Collapsible>
      )} */}

      {/* Templates/NDS Section - Dev only */}
      {!prod && templates && (
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-10">
          <div className="flex gap-1 lg:justify-end">
            <PlaygroundButton
              variant={activeTab === "templates" ? "tint" : "ghost"}
              onClick={() => setActiveTab("templates")}
            >
              Templates
            </PlaygroundButton>
            <PlaygroundButton
              variant={activeTab === "nds" ? "tint" : "ghost"}
              onClick={() => setActiveTab("nds")}
            >
              NDS
            </PlaygroundButton>
          </div>

          <div className="col-span-3">
            {activeTab === "templates" ? (
              <TemplatesGrid
                templates={templates}
                currentUsername={currentUsername}
              />
            ) : (
              <NDSTable searchQuery="" />
            )}
          </div>
        </section>
      )}

      {/* Prototypes Section */}
      <section
        ref={prototypeSectionRef}
        className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-10"
      >
        <div className="row-span-full lg:col-span-1">
          {/* Sticky filter buttons */}
          <div className="bg-primary sticky top-20 z-10 flex flex-col gap-1 py-2 lg:items-end">
            <div className="flex -translate-y-4 gap-1">
              <PlaygroundButton
                variant={
                  prototypesFilter === "all" && !usernameFilter
                    ? "tint"
                    : "ghost"
                }
                onClick={() => {
                  setUsernameFilter(null);
                  setPrototypesFilter("all");
                }}
              >
                All
              </PlaygroundButton>
              <PlaygroundButton
                variant={
                  prototypesFilter === "mine" && !usernameFilter
                    ? "tint"
                    : "ghost"
                }
                onClick={handleMineClick}
              >
                Mine
              </PlaygroundButton>
            </div>
            {usernameFilter && (
              <PlaygroundButton
                variant="tint"
                color="blue"
                onClick={() => setUsernameFilter(null)}
              >
                {usernameFilter}
              </PlaygroundButton>
            )}
          </div>
        </div>
        <div className="lg:col-span-3">
          <PrototypeTable
            prototypes={filteredPrototypes}
            allPrototypes={prototypes}
            currentUsername={currentUsername}
            searchQuery=""
            onUsernameClick={handleUsernameClick}
          />
        </div>
      </section>
    </div>
  );
}
