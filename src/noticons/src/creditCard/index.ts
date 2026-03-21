import type { IconGroup } from "@nds-icons";
import { createIconGroup } from "@nds-icons";

export const creditCardIconGroup: IconGroup<"default"> = createIconGroup(
  "creditCard",
  {
    default: { loader: () => import("./default.icon") },
  },
  [],
);
