import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const phoneSpeakerIconGroup: IconGroup<"default"> = createIconGroup(
  "phoneSpeaker",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
