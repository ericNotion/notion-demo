import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const forkAndKnifeIconGroup: IconGroup<"default"> = createIconGroup(
  "forkAndKnife",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
