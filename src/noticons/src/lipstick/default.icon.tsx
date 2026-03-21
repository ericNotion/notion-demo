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
      <path d="M11.875 6.875H8.125V3.74063C8.125 3.28438 8.1625 2.97187 8.275 2.52813L8.75 0.625H9.375L11.1438 2.39375C11.6687 2.91875 11.875 3.42188 11.875 4.1625V6.87813V6.875ZM12.5 12.5V8.125H7.5V12.5H6.25V17.5H13.75V12.5H12.5Z" />
    </>
  ),
};

export const lipstickIcon: LoadedIconFunction = createIcon(
  "lipstick",
  iconDefinition,
);
