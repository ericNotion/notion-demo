import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const colorSwatchIconGroup: IconGroup<"default"> = createIconGroup(
  "colorSwatch",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
