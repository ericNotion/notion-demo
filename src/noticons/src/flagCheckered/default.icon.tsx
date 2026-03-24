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
      <path d="M2.5 1.875H4.375V18.125H2.5V1.875ZM16.875 3.125V14.375H5.625V3.125H16.875ZM9.375 7.5H6.875V10H9.375V7.5ZM12.5 10.625H10V13.125H12.5V10.625ZM12.5 4.375H10V6.875H12.5V4.375ZM15.625 7.5H13.125V10H15.625V7.5Z" />
    </>
  ),
};

export const flagCheckeredIcon: LoadedIconFunction = createIcon(
  "flagCheckered",
  iconDefinition,
);
