import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cameraRollPortraitIconGroup: IconGroup<"default"> =
  createIconGroup(
    "cameraRollPortrait",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
