import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const mailIconGroup: IconGroup<"default"> = createIconGroup(
  "mail",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
