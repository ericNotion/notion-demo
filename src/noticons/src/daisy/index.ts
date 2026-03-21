import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const daisyIconGroup: IconGroup<"default"> = createIconGroup(
  "daisy",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
