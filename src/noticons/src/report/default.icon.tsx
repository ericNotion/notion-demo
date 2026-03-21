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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM11.25 14.6875H8.75V12.8125H11.25V14.6875ZM11.25 9.0625L10.625 11.5625H9.375L8.75 9.0625V5.3125H11.25V9.0625Z" />
    </>
  ),
};

export const reportIcon: LoadedIconFunction = createIcon(
  "report",
  iconDefinition,
);
