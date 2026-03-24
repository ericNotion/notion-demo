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
      <path d="M17.5 9.375V10.625H15.3125V16.875H10.7031L12.1875 13.9062L9.64687 11.3656L10.675 9.30938L9.55625 8.75L8.125 11.6125L10.6656 14.1531L9.30312 16.875H4.68437V10.625H2.49687V9.375L10 1.875L12.8125 4.6875V2.5H15.3125V7.1875L17.5 9.375Z" />
    </>
  ),
};

export const earthquakeIcon: LoadedIconFunction = createIcon(
  "earthquake",
  iconDefinition,
);
