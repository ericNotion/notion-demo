import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const luggageCartIconGroup: IconGroup<"default"> = createIconGroup(
  "luggageCart",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
