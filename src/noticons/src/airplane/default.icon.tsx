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
      <path d="M11.875 10.9375V14.375L14.375 15.625V17.5L10 16.4062L5.625 17.5V15.625L8.125 14.375V10.9375L1.875 12.5V10L8.125 6.875V4.375C8.125 2.25625 8.84375 1.25 10 1.25C11.1562 1.25 11.875 2.25625 11.875 4.375V6.875L18.125 10V12.5L11.875 10.9375Z" />
    </>
  ),
};

export const airplaneIcon: LoadedIconFunction = createIcon(
  "airplane",
  iconDefinition,
);
