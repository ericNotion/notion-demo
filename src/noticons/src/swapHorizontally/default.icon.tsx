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
      <path d="M13.8312 7.1875H3.12499V5.3125H13.8312L12.0312 3.5125L13.3562 2.1875L17.4187 6.25L13.3562 10.3125L12.0312 8.9875L13.8312 7.1875ZM7.96874 11.0125L6.64374 9.6875L2.58124 13.75L6.64374 17.8125L7.96874 16.4875L6.16874 14.6875H16.875V12.8125H6.16874L7.96874 11.0125Z" />
    </>
  ),
};

export const swapHorizontallyIcon: LoadedIconFunction = createIcon(
  "swapHorizontally",
  iconDefinition,
);
