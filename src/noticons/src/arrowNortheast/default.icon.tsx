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
      <path d="M15.3125 4.6875V15.3125H13.4375V7.8875L5.3875 15.9375L4.0625 14.6125L12.1125 6.5625H4.6875V4.6875H15.3125Z" />
    </>
  ),
};

export const arrowNortheastIcon: LoadedIconFunction = createIcon(
  "arrowNortheast",
  iconDefinition,
);
