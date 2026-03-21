import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const perfumeIconGroup: IconGroup<"default"> = createIconGroup(
  "perfume",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
