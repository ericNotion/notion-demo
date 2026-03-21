import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const circleThreeEighthsIconGroup: IconGroup<"default"> =
  createIconGroup(
    "circleThreeEighths",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
