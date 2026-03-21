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
      <path d="M1.875 3.4375V16.5625H18.125V3.4375H1.875ZM5.625 14.6875H3.75V12.8125H5.625V14.6875ZM5.625 10.9375H3.75V9.0625H5.625V10.9375ZM5.625 7.1875H3.75V5.3125H5.625V7.1875ZM12.5 14.6875H7.5V11.25H12.5V14.6875ZM12.5 8.75H7.5V5.3125H12.5V8.75ZM16.25 14.6875H14.375V12.8125H16.25V14.6875ZM16.25 10.9375H14.375V9.0625H16.25V10.9375ZM16.25 7.1875H14.375V5.3125H16.25V7.1875Z" />
    </>
  ),
};

export const movieIcon: LoadedIconFunction = createIcon(
  "movie",
  iconDefinition,
);
