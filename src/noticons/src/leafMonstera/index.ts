import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const leafMonsteraIconGroup: IconGroup<"default"> = createIconGroup(
  "leafMonstera",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
