import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const colorPaletteIconGroup: IconGroup<"default"> = createIconGroup(
  "colorPalette",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
