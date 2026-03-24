"use client";

import { useAtomValue, useSetAtom } from "jotai";
import Image from "next/image";
import { useState } from "react";

import { primarySidebarAtom } from "@/components/playground-kit/PrimarySidebar/atoms";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconButton } from "@/components/ui/icon-button";
import { Icon } from "@nds-icons";
import { arrowChevronDoubleBackwardIcon } from "@nds-icons/arrowChevronDoubleBackward/default.icon";
import { checkmarkSmallIcon } from "@nds-icons/checkmark/small.icon";
import { ellipsisIcon } from "@nds-icons/ellipsis/default.icon";

export function PrimarySidebarHeader() {
  const setIsOpen = useSetAtom(primarySidebarAtom);
  const isOpen = useAtomValue(primarySidebarAtom);
  const [plansOpen, setPlansOpen] = useState(false);

  return (
    <div className="flex h-11 items-center justify-between">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="hover:bg-tertiary flex items-center gap-2 rounded-md px-2 py-1">
            <Image
              src="/img/notion.jpg"
              alt="Notion logo"
              width={40}
              height={40}
              className="h-5 w-5 rounded"
              draggable={false}
            />
            <span className="text-sm font-medium select-none">Notion</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom"
          align="start"
          className="w-[360px] p-0"
        >
          <div className="border-secondary flex flex-col gap-3 border-b p-3">
            <div className="flex items-start gap-3">
              <div className="bg-secondary flex size-10 items-center justify-center rounded-md">
                <span className="text-lg font-semibold">I</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-primary truncate text-base font-semibold">
                  Ivan Hu’s Workspace
                </div>
                <div className="text-tertiary flex items-center gap-1.5 text-sm">
                  <Button
                    variant="tint"
                    size="xs"
                    aria-label="Manage plan"
                    onClick={() => setPlansOpen(true)}
                  >
                    Free Plan
                  </Button>
                  <span>·</span>
                  <span>1 member</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-tertiary-translucent hover:bg-tertiary text-primary rounded-md px-2 py-1 text-sm">
                Settings
              </button>
              <button className="bg-tertiary-translucent hover:bg-tertiary text-primary rounded-md px-2 py-1 text-sm">
                Invite members
              </button>
            </div>
          </div>

          <div className="border-secondary flex items-center justify-between px-3 py-2">
            <div className="text-primary text-sm font-medium">
              ihu@makenotion.com
            </div>
            <IconButton variant="ghost" size="sm" aria-label="More options">
              <Icon icon={ellipsisIcon} />
            </IconButton>
          </div>

          <div className="px-1 py-1">
            <WorkspaceRow
              selected
              badge="N"
              label="Notion"
              rightAdornment={
                <span className="text-tertiary">
                  <span className="inline-block rounded-sm border px-1 text-[10px] font-semibold">
                    S
                  </span>
                </span>
              }
            />
            <WorkspaceRow selected badge="I" label="Ivan Hu’s Workspace" />
            <WorkspaceRow badge="I" label="Ivan Hu’s Workspace" />
            <WorkspaceRow badge="I" label="Ivan Hu’s Workspace" />
            <WorkspaceRow badge="I" label="Ivan Hu’s Notion" />
            <WorkspaceRow badge="E" label="expansion_offer_test_1" />
            <WorkspaceRow badge="P" label="pia tests f2p trials on 5/6" />
            <WorkspaceRow badge="I" label="Ivan Hu’s Workspace" disabled />
          </div>

          <div className="border-secondary my-2 border-t" />

          <div className="px-1 pb-2">
            <ActionRow label="Set up organization" />
            <ActionRow label="Add another account" />
            <ActionRow label="Log out" />
            <ActionRow label="Get iOS & Android app" />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={plansOpen} onOpenChange={setPlansOpen}>
        <DialogContent className="w-[920px] max-w-[95vw] p-0">
          <div className="p-5">
            <div className="text-primary mb-3 text-lg font-semibold">
              Active plan
            </div>
            <div className="border-secondary bg-elevated dark:bg-primary mb-8 rounded-xl border p-4">
              <div className="flex items-start gap-4">
                <div className="min-w-0 flex-1">
                  <div className="text-primary text-xl font-semibold">Free</div>
                  <div className="text-secondary mt-1 text-sm">
                    For organizing every corner of your work and life
                  </div>
                  <div className="text-tertiary mt-2 text-sm">
                    Unlimited blocks
                  </div>
                </div>
                <div className="border-secondary bg-tertiary-translucent flex items-center gap-3 rounded-lg border p-3 dark:bg-white/5">
                  <div className="min-w-0">
                    <div className="text-primary text-sm font-semibold">
                      Notion AI
                    </div>
                    <div className="text-secondary mt-0.5 max-w-[360px] text-xs">
                      Upgrade to search everywhere, automate meeting notes &
                      more
                    </div>
                  </div>
                  <Button variant="primary" size="sm">
                    Upgrade
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-primary mb-3 text-lg font-semibold">
              All plans
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <PlanTier name="Free" price="$0 per member / month" subPrice="" />
              <PlanTier
                name="Plus"
                price="$10 per member / month"
                subPrice="billed annually · $12 billed monthly"
                ctaLabel="Upgrade"
              />
              <PlanTier
                name="Business"
                badge="Popular"
                price="$20 per member / month"
                subPrice="billed annually · $24 billed monthly"
                ctaLabel="Upgrade"
              />
              <PlanTier
                name="Enterprise"
                badge="Limited"
                price="$26 per member / month"
                subPrice="billed annually · $32 billed monthly"
                ctaLabel="Upgrade"
              />
            </div>

            <div className="border-secondary mt-6 rounded-xl border p-4">
              <div className="text-primary mb-3 text-sm font-semibold">
                Highlights
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <ul className="text-secondary space-y-2 text-sm">
                  <li>✓ Basic forms</li>
                  <li>✓ Basic sites</li>
                  <li>✓ Basic automations</li>
                  <li>✓ Custom databases</li>
                  <li>✓ Notion Calendar</li>
                  <li>✓ Notion Mail</li>
                </ul>
                <ul className="text-secondary space-y-2 text-sm">
                  <li>✓ Unlimited blocks</li>
                  <li>✓ Unlimited charts</li>
                  <li>✓ Custom forms</li>
                  <li>✓ Custom sites</li>
                  <li>✓ Basic integrations</li>
                </ul>
                <ul className="text-secondary space-y-2 text-sm">
                  <li>✓ Notion AI included</li>
                  <li>✓ SAML SSO</li>
                  <li>✓ Verify any page</li>
                  <li>✓ Enterprise search</li>
                  <li>✓ Premium integrations</li>
                </ul>
                <ul className="text-secondary space-y-2 text-sm">
                  <li>✓ Notion AI included</li>
                  <li>✓ User provisioning</li>
                  <li>✓ Audit log</li>
                  <li>✓ Advanced security & controls</li>
                  <li>✓ Advanced integrations</li>
                </ul>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <IconButton
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-quaternary opacity-0 transition-opacity duration-200 group-hover/primary-sidebar:opacity-100"
      >
        <Icon
          icon={arrowChevronDoubleBackwardIcon}
          className="group-hover/button:text-primary"
        />
      </IconButton>
    </div>
  );
}

function WorkspaceRow({
  badge,
  label,
  selected,
  disabled,
  rightAdornment,
}: {
  badge: string;
  label: string;
  selected?: boolean;
  disabled?: boolean;
  rightAdornment?: React.ReactNode;
}) {
  return (
    <div
      data-selected={selected}
      data-disabled={disabled}
      className="hover:bg-tertiary-translucent data-[selected=true]:bg-tertiary-translucent mx-1 flex min-h-9 cursor-pointer items-center gap-3 rounded-md px-2 text-sm outline-hidden data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50"
    >
      <div className="bg-secondary text-primary flex size-6 items-center justify-center rounded-md text-xs font-semibold">
        {badge}
      </div>
      <div className="text-primary flex-1 truncate">{label}</div>
      {selected && (
        <Icon icon={checkmarkSmallIcon} size="sm" className="text-primary" />
      )}
      {!selected && rightAdornment}
    </div>
  );
}

function ActionRow({ label }: { label: string }) {
  return (
    <div className="hover:bg-tertiary-translucent mx-1 flex min-h-8 cursor-pointer items-center rounded-md px-2 text-sm">
      {label}
    </div>
  );
}

function PlanTier({
  name,
  price,
  subPrice,
  badge,
  ctaLabel,
}: {
  name: string;
  price: string;
  subPrice?: string;
  badge?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="border-secondary bg-elevated dark:bg-primary flex flex-col rounded-xl border p-4">
      <div className="flex items-center gap-2">
        <div className="text-primary text-xl font-semibold">{name}</div>
        {badge && (
          <span className="bg-blue-secondary text-blue-strong rounded px-1 text-[10px] font-semibold">
            {badge}
          </span>
        )}
      </div>
      <div className="text-secondary mt-1 text-sm">{price}</div>
      {subPrice && <div className="text-tertiary text-xs">{subPrice}</div>}
      {ctaLabel && (
        <div className="mt-3">
          <Button variant="primary" size="sm">
            {ctaLabel}
          </Button>
        </div>
      )}
    </div>
  );
}
