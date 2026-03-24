import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const trainMagneticLevitationIconGroup: IconGroup<"default"> =
  createIconGroup(
    "trainMagneticLevitation",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
