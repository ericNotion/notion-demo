import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const hexagonThreeSixthsIconGroup: IconGroup<"default"> =
  createIconGroup(
    "hexagonThreeSixths",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
