import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const sunglassesIconGroup: IconGroup<"default"> = createIconGroup(
  "sunglasses",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
