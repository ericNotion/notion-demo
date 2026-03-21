import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const circleArrowsHorizontalIconGroup: IconGroup<"default"> =
  createIconGroup(
    "circleArrowsHorizontal",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
