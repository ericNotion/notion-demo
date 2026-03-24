import React from "react";

import {
  createIcon,
  type IconDefinition,
  type LoadedIconFunction,
} from "@nds-icons";

export const iconDefinition: IconDefinition = {
  viewBox: "0 0 20 20",
  svg: (
    <>
      <path d="M15 8.75L9.4125 14.3375L10.625 15.55L9.3 16.875L7.31875 14.8938L6.14375 16.0687L7.5 17.425L6.175 18.75L1.25 13.825L2.575 12.5L3.93125 13.8562L5.10625 12.6813L3.125 10.7L4.45 9.375L5.6625 10.5875L7.05625 9.19375L8.38125 10.5188L9.26562 9.63438L7.94063 8.30937L9.55625 6.69375L10.8813 8.01875L11.7656 7.13438L10.4406 5.80938L11.25 5H14.1156L16.6156 2.5L17.5 3.38437L15 5.88438V8.75Z" />
    </>
  ),
};

export const syringeIcon: LoadedIconFunction = createIcon(
  "syringe",
  iconDefinition,
);
