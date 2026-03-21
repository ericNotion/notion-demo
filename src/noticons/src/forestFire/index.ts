import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const forestFireIconGroup: IconGroup<"default"> = createIconGroup(
  "forestFire",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
