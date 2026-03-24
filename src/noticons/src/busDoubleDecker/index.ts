import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const busDoubleDeckerIconGroup: IconGroup<"default"> = createIconGroup(
  "busDoubleDecker",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
