import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const luggageIconGroup: IconGroup<"default"> = createIconGroup(
  "luggage",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
