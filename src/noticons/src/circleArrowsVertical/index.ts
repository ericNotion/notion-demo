import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const circleArrowsVerticalIconGroup: IconGroup<"default"> =
  createIconGroup(
    "circleArrowsVertical",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
