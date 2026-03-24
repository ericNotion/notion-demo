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
      <path d="M5.625 2.5H6.875V7.1875C6.875 8.58437 6.17812 9.55313 5 9.87813V17.5H3.125V9.87813C1.94687 9.55313 1.25 8.58437 1.25 7.1875V2.5H2.5V7.1875H3.4375V2.5H4.6875V7.1875H5.625V2.5ZM10.625 2.5C9.06563 2.5 8.125 4.43438 8.125 6.875C8.125 8.4875 8.7 9.48125 9.6875 9.84375V17.5H11.5625V9.84375C12.55 9.48125 13.125 8.49062 13.125 6.875C13.125 4.43438 12.1844 2.5 10.625 2.5ZM14.375 9.35938V9.98438H16.25V17.5H18.125V2.5C15.7656 2.5 14.375 4.29688 14.375 9.35938Z" />
    </>
  ),
};

export const flatwareIcon: LoadedIconFunction = createIcon(
  "flatware",
  iconDefinition,
);
