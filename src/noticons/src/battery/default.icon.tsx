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
      <path d="M16.875 7.5V12.5C16.875 14.0375 15.9125 15 14.375 15H3.75C2.2125 15 1.25 14.0375 1.25 12.5V7.5C1.25 5.9625 2.2125 5 3.75 5H14.375C15.9125 5 16.875 5.9625 16.875 7.5ZM18.75 8.125H18.125V11.875H18.75C19.5219 11.875 20 11.3969 20 10.625V9.375C20 8.60313 19.5219 8.125 18.75 8.125Z" />
    </>
  ),
};

export const batteryIcon: LoadedIconFunction = createIcon(
  "battery",
  iconDefinition,
);
