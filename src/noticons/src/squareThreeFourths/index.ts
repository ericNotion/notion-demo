import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const squareThreeFourthsIconGroup: IconGroup<"default"> =
  createIconGroup(
    "squareThreeFourths",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
