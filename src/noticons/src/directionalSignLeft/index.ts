import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const directionalSignLeftIconGroup: IconGroup<"default"> =
  createIconGroup(
    "directionalSignLeft",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
