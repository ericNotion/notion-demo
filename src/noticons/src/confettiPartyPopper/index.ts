import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const confettiPartyPopperIconGroup: IconGroup<"default"> =
  createIconGroup(
    "confettiPartyPopper",
    {
      default: { loader: () => import("./default.icon") },
    },
    [],
  );
