import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const coffeeMakerIconGroup: IconGroup<"default"> = createIconGroup(
  "coffeeMaker",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
