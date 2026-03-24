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
      <path d="M13.1062 2.5H6.89375L2.5 6.89375V13.1062L6.89375 17.5H13.1062L17.5 13.1062V6.89375L13.1062 2.5ZM13.75 12.425L12.425 13.75L10 11.325L7.575 13.75L6.25 12.425L8.675 10L6.25 7.575L7.575 6.25L10 8.675L12.425 6.25L13.75 7.575L11.325 10L13.75 12.425Z" />
    </>
  ),
};

export const browserStopIcon: LoadedIconFunction = createIcon(
  "browserStop",
  iconDefinition,
);
