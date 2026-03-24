import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const trainMetroIconGroup: IconGroup<"default"> = createIconGroup(
  "trainMetro",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
