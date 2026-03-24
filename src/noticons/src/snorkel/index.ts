import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const snorkelIconGroup: IconGroup<"default"> = createIconGroup(
  "snorkel",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
