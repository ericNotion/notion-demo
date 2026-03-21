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
      <path d="M16.875 7.5V12.5C16.875 14.0375 15.9125 15 14.375 15H3.75C2.2125 15 1.25 14.0375 1.25 12.5V10.625H5.67188C5.90625 12.1813 7.04063 13.125 8.75 13.125H10.625V11.875H13.125V10.625H10.625V9.375H13.125V8.125H10.625V6.875H8.75C7.04063 6.875 5.90625 7.81875 5.67188 9.375H1.25V7.5C1.25 5.9625 2.2125 5 3.75 5H14.375C15.9125 5 16.875 5.9625 16.875 7.5ZM18.75 8.125H18.125V11.875H18.75C19.5219 11.875 20 11.3969 20 10.625V9.375C20 8.60313 19.5219 8.125 18.75 8.125Z" />
    </>
  ),
};

export const batteryChargedIcon: LoadedIconFunction = createIcon(
  "batteryCharged",
  iconDefinition,
);
