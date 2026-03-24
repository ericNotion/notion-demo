import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pentagonThreeFifthsIconGroup: IconGroup<"default"> =
  createIconGroup(
    "pentagonThreeFifths",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
