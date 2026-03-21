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
      <path d="M14.6125 15.9375L6.5625 7.8875V15.3125H4.6875V4.6875H15.3125V6.5625H7.8875L15.9375 14.6125L14.6125 15.9375Z" />
    </>
  ),
};

export const arrowNorthwestIcon: LoadedIconFunction = createIcon(
  "arrowNorthwest",
  iconDefinition,
);
