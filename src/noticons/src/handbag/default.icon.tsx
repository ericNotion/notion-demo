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
      <path d="M15 6.875H13.75V5C13.75 3.45625 12.7937 2.5 11.25 2.5H8.75C7.20625 2.5 6.25 3.45625 6.25 5V6.875H5C5 6.875 2.5 9.375 2.5 16.875H17.5C17.5 9.375 15 6.875 15 6.875ZM8.125 5C8.125 4.49063 8.24062 4.375 8.75 4.375H11.25C11.7594 4.375 11.875 4.49063 11.875 5V6.875H8.125V5ZM13.75 13.125H6.25V11.875H13.75V13.125Z" />
    </>
  ),
};

export const handbagIcon: LoadedIconFunction = createIcon(
  "handbag",
  iconDefinition,
);
