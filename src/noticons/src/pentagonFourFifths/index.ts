import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const pentagonFourFifthsIconGroup: IconGroup<"default"> =
  createIconGroup(
    "pentagonFourFifths",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
