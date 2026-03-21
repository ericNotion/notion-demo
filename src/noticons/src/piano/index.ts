import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pianoIconGroup: IconGroup<"default"> = createIconGroup(
  "piano",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
