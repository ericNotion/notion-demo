import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const longBoneIconGroup: IconGroup<"default"> = createIconGroup(
  "longBone",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
