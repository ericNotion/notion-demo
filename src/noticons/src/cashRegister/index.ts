import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const cashRegisterIconGroup: IconGroup<"default"> = createIconGroup(
  "cashRegister",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
