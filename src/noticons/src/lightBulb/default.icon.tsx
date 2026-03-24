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
      <path d="M10 1.875C6.89375 1.875 4.375 4.39375 4.375 7.5C4.375 9 4.97187 10.4406 6.03125 11.5L6.94687 12.4156C7.3 12.7688 7.5 13.25 7.5 13.75H12.5C12.5 13.25 12.7 12.7688 13.0531 12.4156L13.9688 11.5C15.0312 10.4375 15.625 9 15.625 7.5C15.625 4.39375 13.1062 1.875 10 1.875ZM12.5 7.5H10.625V11.875H9.375V7.5H7.5V6.25H12.5V7.5ZM7.5 15H12.5V16.25L10.625 18.125H9.375L7.5 16.25V15Z" />
    </>
  ),
};

export const lightBulbIcon: LoadedIconFunction = createIcon(
  "lightBulb",
  iconDefinition,
);
