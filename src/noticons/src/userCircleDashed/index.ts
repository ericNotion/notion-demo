import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const userCircleDashedIconGroup: IconGroup<"default"> = createIconGroup(
  "userCircleDashed",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
