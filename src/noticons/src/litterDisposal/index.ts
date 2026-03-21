import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const litterDisposalIconGroup: IconGroup<"default"> = createIconGroup(
  "litterDisposal",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
