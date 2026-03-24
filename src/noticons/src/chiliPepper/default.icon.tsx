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
      <path d="M18.75 2.5V4.375H18.0688C17.3281 4.375 16.9188 4.59375 16.5094 5.20937L15.6187 6.54375C16.3906 7.22188 16.875 8.17812 16.875 9.0625C16.875 14.0625 11.7156 17.5 7.5 17.5C2.9625 17.5 1.25 15.625 1.25 15.625L1.875 13.125C10 13.125 8.125 5.625 13.2812 5.625C13.5031 5.625 13.7219 5.65 13.9313 5.69375L14.9469 4.16875C15.7063 3.02813 16.6969 2.5 18.0656 2.5H18.7469H18.75Z" />
    </>
  ),
};

export const chiliPepperIcon: LoadedIconFunction = createIcon(
  "chiliPepper",
  iconDefinition,
);
