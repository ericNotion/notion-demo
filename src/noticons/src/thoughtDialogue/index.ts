import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const thoughtDialogueIconGroup: IconGroup<"default"> = createIconGroup(
  "thoughtDialogue",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
