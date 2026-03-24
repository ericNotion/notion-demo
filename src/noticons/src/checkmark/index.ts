import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const checkmarkIconGroup: IconGroup<"default"> = createIconGroup(
  "checkmark",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
