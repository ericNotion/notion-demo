import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const capricornIconGroup: IconGroup<"default"> = createIconGroup(
  "capricorn",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
