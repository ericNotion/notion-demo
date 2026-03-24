import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const handbagIconGroup: IconGroup<"default"> = createIconGroup(
  "handbag",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
