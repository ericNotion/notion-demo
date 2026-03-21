import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const emojiGrinningSmilingEyesIconGroup: IconGroup<"default"> =
  createIconGroup(
    "emojiGrinningSmilingEyes",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
