import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const personFeminineIconGroup: IconGroup<"default"> = createIconGroup(
  "personFeminine",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
