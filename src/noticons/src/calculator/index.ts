import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const calculatorIconGroup: IconGroup<"default"> = createIconGroup(
  "calculator",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
