import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const arrowsSwapVerticallyIconGroup: IconGroup<"default"> =
  createIconGroup(
    "arrowsSwapVertically",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
