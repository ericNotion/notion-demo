import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const yinYangIconGroup: IconGroup<"default"> = createIconGroup(
  "yinYang",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
