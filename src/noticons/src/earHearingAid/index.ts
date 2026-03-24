import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const earHearingAidIconGroup: IconGroup<"default"> = createIconGroup(
  "earHearingAid",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
