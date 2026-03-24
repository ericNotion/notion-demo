import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const noteSixteenthBeamedIconGroup: IconGroup<"default"> =
  createIconGroup(
    "noteSixteenthBeamed",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
