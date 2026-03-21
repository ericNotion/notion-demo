"use client";

import {
  PanelCheckboxItem,
  StateConfigPanel,
} from "@/components/playground-kit";
import { usePreviewProductionMode } from "@/hooks/usePreviewProductionMode";
import { getStartedBannerDismissedAtom } from "@/root/atoms/getStartedBannerAtom";
import { useAtom } from "jotai";

export function RootConfigPanel() {
  const { enabled: isPreviewingProduction } = usePreviewProductionMode();
  const [isDismissed, setIsDismissed] = useAtom(getStartedBannerDismissedAtom);

  // Only show when simulating production mode
  if (!isPreviewingProduction) {
    return null;
  }

  return (
    <StateConfigPanel title="Debug" defaultMinimized>
      <PanelCheckboxItem
        checked={!isDismissed}
        onChange={(checked) => setIsDismissed(!checked)}
        label="Get started banner"
      />
    </StateConfigPanel>
  );
}
