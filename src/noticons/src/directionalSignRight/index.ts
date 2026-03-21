import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const directionalSignRightIconGroup: IconGroup<"default"> =
  createIconGroup(
    "directionalSignRight",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
