"use client";

import {
  PlaygroundDropdownMenu,
  PlaygroundDropdownMenuContent,
  PlaygroundDropdownMenuGroup,
  PlaygroundDropdownMenuItem,
  PlaygroundDropdownMenuSeparator,
  PlaygroundDropdownMenuTrigger,
  PlaygroundIconButton,
  PlaygroundSwitch,
} from "@/components/playground-kit";
import {
  useIsProduction,
  usePreviewProductionMode,
} from "@/hooks/usePreviewProductionMode";
import { useProductionUsername } from "@/hooks/useProductionUsername";
import { useSession } from "@/hooks/useSession";
import { handleSignOut } from "@/lib/auth/actions";
import { anonymizeModeAtom } from "@/root/atoms/anonymizeModeAtom";
import { commandMenuOpenAtom } from "@/root/atoms/commandMenuOpenAtom";
import { CreatePrototypeButtonLink } from "@/root/components/CreatePrototypeButtonLink";
import { GithubUsernameDialog } from "@/root/components/GithubUsernameDialog";
import { LinkExternalButtonLink } from "@/root/components/LinkExternalButtonLink";
import { UsernamePromptDialog } from "@/root/components/UsernamePromptDialog";
import { cn } from "@/utils/cn";
import { Icon } from "@nds-icons";
import { arrowRightFromRectangleIcon } from "@nds-icons/arrowRightFromRectangle/default.icon";
import { magnifyingGlassIcon } from "@nds-icons/magnifyingGlass/default.icon";
import { personFillIcon } from "@nds-icons/person/fill.icon";
import { useAtom, useSetAtom } from "jotai";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function TopBar({
  currentUsername,
  allowFileOps,
}: {
  currentUsername?: string;
  allowFileOps: boolean;
}) {
  const setCommandMenuOpen = useSetAtom(commandMenuOpenAtom);
  const [isScrolled, setIsScrolled] = useState(false);
  const { enabled: previewProdEnabled } = usePreviewProductionMode();
  const isProduction = useIsProduction();
  const prodUsername = useProductionUsername();
  const { session, isAuthenticated, isLoading } = useSession();
  const [showUsernamePrompt, setShowUsernamePrompt] = useState(false);
  const [showGithubDialog, setShowGithubDialog] = useState(false);
  const [anonymizeMode, setAnonymizeMode] = useAtom(anonymizeModeAtom);
  const router = useRouter();

  const pathname = usePathname();
  const isGuidePage = pathname.includes("/guides");
  const useOAuth = process.env.NEXT_PUBLIC_USE_OKTA === "true";
  const isSignedIn = useOAuth ? isAuthenticated : prodUsername.isValid;
  const showAccountUI = useOAuth || isProduction;

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-20">
      {previewProdEnabled && (
        <div className="absolute inset-x-0 top-0 h-1 bg-orange-500 text-center text-xs font-medium text-white after:absolute after:top-full after:left-1/2 after:block after:-translate-x-1/2 after:rounded-b-lg after:bg-orange-500 after:px-2 after:py-1 after:pt-0.5 after:font-medium after:text-white after:content-['Previewing_production'] dark:after:text-black" />
      )}
      <div
        className={cn(
          "bg-primary flex items-center justify-between border-b py-2 pr-2 pl-4 transition-colors",
          isScrolled ? "border-secondary" : "border-transparent",
        )}
      >
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className={cn("flex items-center gap-3 select-none", {
              "text-primary": !isGuidePage,
              "text-tertiary hover:text-primary": isGuidePage,
            })}
            draggable={false}
          >
            <h1 className="text-lg font-semibold">Playground</h1>
          </Link>

          <Link
            href="/guides"
            className={cn("flex items-center gap-3 select-none", {
              "text-primary": isGuidePage,
              "text-tertiary hover:text-primary": !isGuidePage,
            })}
            draggable={false}
          >
            <h1 className="text-lg font-semibold">Guides</h1>
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <PlaygroundIconButton
            variant="tint"
            onClick={() => setCommandMenuOpen(true)}
          >
            <Icon icon={magnifyingGlassIcon} weight="bold" />
          </PlaygroundIconButton>
          <LinkExternalButtonLink />
          {currentUsername && allowFileOps && !previewProdEnabled && (
            <CreatePrototypeButtonLink />
          )}
          {showAccountUI && !isSignedIn && !isLoading && (
            <PlaygroundIconButton
              variant="tint"
              onClick={() => {
                if (useOAuth) {
                  router.push("/auth/signin");
                } else {
                  setShowUsernamePrompt(true);
                }
              }}
            >
              <Icon icon={personFillIcon} weight="bold" />
            </PlaygroundIconButton>
          )}
          {showAccountUI && isSignedIn && (
            <PlaygroundDropdownMenu>
              <PlaygroundDropdownMenuTrigger asChild>
                <PlaygroundIconButton variant="tint">
                  <Icon icon={personFillIcon} weight="bold" />
                </PlaygroundIconButton>
              </PlaygroundDropdownMenuTrigger>
              <PlaygroundDropdownMenuContent
                side="bottom"
                align="end"
                className="w-72"
              >
                <PlaygroundDropdownMenuGroup>
                  {useOAuth && session?.user && (
                    <div className="px-2 py-2">
                      <div className="text-primary text-sm font-medium">
                        {session.user.playgroundUsername ||
                          session.user.email?.split("@")[0]}
                      </div>
                      {session.user.email && (
                        <div className="text-tertiary text-xs">
                          {session.user.email}
                        </div>
                      )}
                      {!session.user.notionUserId && (
                        <a
                          href="https://playground.makenotion.com/guides/getting-started"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 block rounded border border-yellow-500/30 bg-yellow-500/10 p-2 text-xs transition-colors hover:bg-yellow-500/20"
                        >
                          <span className="text-primary font-medium">
                            Setup required
                          </span>
                          <p className="text-secondary mt-0.5">
                            Complete local setup to link prototypes →
                          </p>
                        </a>
                      )}
                    </div>
                  )}
                  <PlaygroundDropdownMenuSeparator />
                  {!useOAuth && prodUsername.username && (
                    <div className="border-secondary border-b px-2 py-2">
                      <div className="text-primary text-sm font-medium">
                        {prodUsername.username}
                      </div>
                    </div>
                  )}
                  {!useOAuth && (
                    <PlaygroundDropdownMenuItem
                      onClick={() => setShowUsernamePrompt(true)}
                    >
                      Change username
                    </PlaygroundDropdownMenuItem>
                  )}
                  {useOAuth && (
                    <PlaygroundDropdownMenuItem
                      onClick={() => setShowGithubDialog(true)}
                    >
                      Configure GitHub username
                    </PlaygroundDropdownMenuItem>
                  )}
                  <PlaygroundDropdownMenuItem
                    onSelect={(e) => {
                      e.preventDefault();
                      setAnonymizeMode(!anonymizeMode);
                    }}
                    className="justify-between"
                  >
                    Hide titles
                    <PlaygroundSwitch
                      checked={anonymizeMode}
                      onCheckedChange={(checked) => setAnonymizeMode(checked)}
                    />
                  </PlaygroundDropdownMenuItem>
                  {useOAuth && (
                    <form action={handleSignOut}>
                      <PlaygroundDropdownMenuItem asChild>
                        <button type="submit" className="w-full">
                          <Icon icon={arrowRightFromRectangleIcon} />
                          Sign out
                        </button>
                      </PlaygroundDropdownMenuItem>
                    </form>
                  )}
                </PlaygroundDropdownMenuGroup>
              </PlaygroundDropdownMenuContent>
            </PlaygroundDropdownMenu>
          )}
        </div>
      </div>
      {showAccountUI && (
        <UsernamePromptDialog
          open={showUsernamePrompt}
          onOpenChange={setShowUsernamePrompt}
          onUsernameSet={(username) => {
            prodUsername.setUsername(username);
            setShowUsernamePrompt(false);
          }}
        />
      )}
      {showAccountUI && useOAuth && (
        <GithubUsernameDialog
          open={showGithubDialog}
          onOpenChange={setShowGithubDialog}
          currentGithubUsername={session?.user?.githubUsername}
          currentEmail={session?.user?.email ?? undefined}
        />
      )}
    </div>
  );
}
