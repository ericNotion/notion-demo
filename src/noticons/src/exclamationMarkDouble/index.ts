import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const exclamationMarkDoubleIconGroup: IconGroup<"default"> =
  createIconGroup(
    "exclamationMarkDouble",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
