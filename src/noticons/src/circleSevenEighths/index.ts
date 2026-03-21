import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const circleSevenEighthsIconGroup: IconGroup<"default"> =
  createIconGroup(
    "circleSevenEighths",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
