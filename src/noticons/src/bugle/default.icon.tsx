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
      <path d="M17.5 3.125C17.5 5.4375 16.0625 6.875 13.75 6.875H0V8.75H2.6625C2.16875 9.45937 1.875 10.3187 1.875 11.25C1.875 13.6656 3.83437 15.625 6.25 15.625H10C12.4156 15.625 14.375 13.6656 14.375 11.25C14.375 10.3187 14.0813 9.45937 13.5875 8.75H13.75C16.0625 8.75 17.5 10.1875 17.5 12.5H20V3.125H17.5ZM12.5 11.25C12.5 12.6313 11.3813 13.75 10 13.75H6.25C4.86875 13.75 3.75 12.6313 3.75 11.25C3.75 9.86875 4.86875 8.75 6.25 8.75H10C11.3813 8.75 12.5 9.86875 12.5 11.25Z" />
    </>
  ),
};

export const bugleIcon: LoadedIconFunction = createIcon(
  "bugle",
  iconDefinition,
);
