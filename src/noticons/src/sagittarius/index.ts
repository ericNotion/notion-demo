import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sagittariusIconGroup: IconGroup<"default"> = createIconGroup(
  "sagittarius",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
