import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowsSwapHorizontallyIconGroup: IconGroup<"default"> =
  createIconGroup(
    "arrowsSwapHorizontally",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
