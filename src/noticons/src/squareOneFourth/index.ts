import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const squareOneFourthIconGroup: IconGroup<"default"> = createIconGroup(
  "squareOneFourth",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
