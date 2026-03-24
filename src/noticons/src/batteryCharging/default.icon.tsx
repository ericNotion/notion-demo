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
      <path d="M20 9.375V10.625C20 11.3969 19.5219 11.875 18.75 11.875H18.125V8.125H18.75C19.5219 8.125 20 8.60313 20 9.375ZM16.875 7.5V12.5C16.875 14.0375 15.9125 15 14.375 15H3.75C2.2125 15 1.25 14.0375 1.25 12.5V7.5C1.25 5.9625 2.2125 5 3.75 5H14.375C15.9125 5 16.875 5.9625 16.875 7.5ZM12.1875 9.375H9.6875V6.25H8.4375L5.9375 10V10.625H8.4375V13.75H9.6875L12.1875 10V9.375Z" />
    </>
  ),
};

export const batteryChargingIcon: LoadedIconFunction = createIcon(
  "batteryCharging",
  iconDefinition,
);
