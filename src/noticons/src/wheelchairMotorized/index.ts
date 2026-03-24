import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const wheelchairMotorizedIconGroup: IconGroup<"default"> =
  createIconGroup(
    "wheelchairMotorized",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
