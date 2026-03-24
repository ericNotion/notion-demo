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
      <path d="M18.75 6.875L16.25 9.375L14.375 7.5V17.5H5.625V7.5L3.75 9.375L1.25 6.875L4.52812 3.59688C5.3125 2.8125 6.06875 2.5 7.18125 2.5H7.50313C7.50313 2.5 7.85312 4.375 10.0031 4.375C12.1531 4.375 12.5031 2.5 12.5031 2.5H12.825C13.9375 2.5 14.6906 2.8125 15.4781 3.59688L18.7563 6.875H18.75Z" />
    </>
  ),
};

export const tshirtIcon: LoadedIconFunction = createIcon(
  "tshirt",
  iconDefinition,
);
