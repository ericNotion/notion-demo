import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const brainIconGroup: IconGroup<"default"> = createIconGroup(
  "brain",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
