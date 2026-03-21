"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconButton } from "@/components/ui/icon-button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Icon } from "@nds-icons";
import { arrowChevronSingleDownIcon } from "@nds-icons/arrowChevronSingleDown/default.icon";
import { slidersIcon } from "@nds-icons/sliders/default.icon";
import { useAtom } from "jotai";
import {
  currentDayAtom,
  purchaseModeAtom,
  showWorkspaceLineAtom,
} from "../../atoms";

function AISettingsControlPanelContent() {
  const [currentDay, setCurrentDay] = useAtom(currentDayAtom);
  const [purchaseMode, setPurchaseMode] = useAtom(purchaseModeAtom);
  const [showWorkspaceLine, setShowWorkspaceLine] = useAtom(
    showWorkspaceLineAtom,
  );

  // Check if any settings have been changed from defaults
  const hasChanges =
    currentDay !== 17 ||
    purchaseMode !== "self-serve" ||
    showWorkspaceLine !== false;

  function reset() {
    setCurrentDay(17);
    setPurchaseMode("self-serve");
    setShowWorkspaceLine(false);
  }

  return (
    <div className="flex h-fit w-full flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-secondary text-xs font-medium">
          Purchase Mode
        </label>
        <div className="bg-secondary-translucent flex h-8 w-full rounded-full p-0.5">
          {(
            [
              { value: "self-serve", label: "Self Serve" },
              { value: "sales-assist", label: "Sales Assist" },
            ] as const
          ).map((option) => (
            <button
              key={option.value}
              onClick={() => setPurchaseMode(option.value)}
              className={`flex-1 rounded-full text-xs font-medium transition-all ${
                purchaseMode === option.value
                  ? "bg-tertiary text-primary shadow-sm"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {purchaseMode === "sales-assist" && (
        <div className="flex flex-col gap-1.5">
          <label className="text-secondary text-xs font-medium">
            Credit Utilization
          </label>
          <div className="bg-secondary-translucent flex h-8 w-full rounded-full p-0.5">
            {(
              [
                { value: "monthly", label: "Monthly", day: 17 },
                { value: "elastic", label: "Elastic", day: 22 },
                { value: "overage", label: "Overage", day: 28 },
              ] as const
            ).map((option) => (
              <button
                key={option.value}
                onClick={() => setCurrentDay(option.day)}
                className={`flex-1 rounded-full text-xs font-medium transition-all ${
                  currentDay === option.day
                    ? "bg-tertiary text-primary shadow-sm"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label className="text-secondary text-xs font-medium">
          Current Day of Month
        </label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex h-auto w-full items-center justify-between gap-1 px-2 py-1 text-xs"
            >
              <span>Day {currentDay}</span>
              <Icon icon={arrowChevronSingleDownIcon} size="sm" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            side="bottom"
            className="max-h-[200px] min-w-[200px]"
          >
            <DropdownMenuRadioGroup value={currentDay.toString()}>
              {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                <DropdownMenuRadioItem
                  key={day}
                  value={day.toString()}
                  onSelect={(e) => {
                    e.preventDefault();
                    setCurrentDay(day);
                  }}
                >
                  Day {day}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-secondary text-xs font-medium">
          Workspace Line
        </label>
        <div className="bg-secondary-translucent flex h-8 w-full rounded-full p-0.5">
          {(
            [
              { value: false, label: "Hide" },
              { value: true, label: "Show" },
            ] as const
          ).map((option) => (
            <button
              key={String(option.value)}
              onClick={() => setShowWorkspaceLine(option.value)}
              className={`flex-1 rounded-full text-xs font-medium transition-all ${
                showWorkspaceLine === option.value
                  ? "bg-tertiary text-primary shadow-sm"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <button
          onClick={reset}
          disabled={!hasChanges}
          className={`bg-secondary-translucent hover:text-primary h-8 w-full rounded-full text-xs font-medium transition-all ${hasChanges ? "text-primary" : "text-secondary"}`}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export function AISettingsControlPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton variant="plain" size="sm">
          <Icon icon={slidersIcon} color="secondary" />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="start"
        className="w-[240px] rounded-[20px]"
      >
        <AISettingsControlPanelContent />
      </PopoverContent>
    </Popover>
  );
}
