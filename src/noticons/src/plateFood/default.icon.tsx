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
      <path d="M18.75 10.625V12.5H16.4062L16.0938 14.375H3.90625L3.59375 12.5H1.25V10.625H18.75ZM12.5 9.375H16.25C16.25 7.44688 15.0531 6.25 13.125 6.25C12.5656 6.25 12.0687 6.35313 11.6437 6.54375C10.8937 5.55625 9.68125 5 8.125 5C5.425 5 3.75 6.675 3.75 9.375H12.5Z" />
    </>
  ),
};

export const plateFoodIcon: LoadedIconFunction = createIcon(
  "plateFood",
  iconDefinition,
);
