import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const videotapeIconGroup: IconGroup<"default"> = createIconGroup(
  "videotape",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
