import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const postageStampIconGroup: IconGroup<"default"> = createIconGroup(
  "postageStamp",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
