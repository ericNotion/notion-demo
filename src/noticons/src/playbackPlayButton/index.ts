import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const playbackPlayButtonIconGroup: IconGroup<"default"> =
  createIconGroup(
    "playbackPlayButton",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
