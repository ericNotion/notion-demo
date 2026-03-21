import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const subtitlesIconGroup: IconGroup<"default"> = createIconGroup(
  "subtitles",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
