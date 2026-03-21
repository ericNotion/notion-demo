import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hairdryerIconGroup: IconGroup<"default"> = createIconGroup(
  "hairdryer",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
