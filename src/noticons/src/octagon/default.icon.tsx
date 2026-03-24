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
      <path d="M17.5 6.89375V13.1062L13.1062 17.5H6.89375L2.5 13.1062V6.89375L6.89375 2.5H13.1062L17.5 6.89375Z" />
    </>
  ),
};

export const octagonIcon: LoadedIconFunction = createIcon(
  "octagon",
  iconDefinition,
);
