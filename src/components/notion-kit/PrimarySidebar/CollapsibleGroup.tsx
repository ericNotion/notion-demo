"use client";

import { useAtom } from "jotai";

import {
  CollapsibleGroupId,
  collapsibleGroupsAtom,
} from "@/components/notion-kit/PrimarySidebar/atoms";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}

export function CollapsibleGroup({
  children,
  label,
  id,
  triggerAccessory,
}: {
  children?: React.ReactNode;
  label: string;
  id: CollapsibleGroupId;
  triggerAccessory?: React.ReactNode;
}) {
  const [groupStates, setGroupStates] = useAtom(collapsibleGroupsAtom);
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return (
    <Accordion
      value={groupStates[id] ? ["item-1"] : []}
      onValueChange={(value) => {
        setGroupStates((prev) => ({ ...prev, [id]: value.includes("item-1") }));
      }}
      type="multiple"
      className="group/collapsible mb-4 flex flex-col"
    >
      <AccordionItem value="item-1" className="flex flex-1 flex-col">
        <div className="flex flex-1 items-center">
          <AccordionTrigger
            chevron={false}
            className="hover:bg-tertiary flex h-6 flex-1 rounded-md px-2.5 py-0 dark:hover:bg-white/10"
          >
            <span className="text-tertiary text-xs font-medium select-none">
              {label}
            </span>
          </AccordionTrigger>
          {triggerAccessory}
        </div>

        <AccordionContent className="flex flex-col gap-px pt-1 pb-2">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
