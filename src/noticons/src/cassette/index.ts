import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cassetteIconGroup: IconGroup<"default"> = createIconGroup(
  "cassette",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
