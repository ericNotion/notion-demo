import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const playbackFastForwardIconGroup: IconGroup<"default"> =
  createIconGroup(
    "playbackFastForward",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
