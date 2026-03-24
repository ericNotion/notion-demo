import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const squeezeTubeIconGroup: IconGroup<"default"> = createIconGroup(
  "squeezeTube",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
