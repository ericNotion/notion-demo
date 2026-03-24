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
      <path d="M5 6.25V16.875C3.45625 16.875 2.5 15.9187 2.5 14.375V8.75C2.5 7.20625 3.45625 6.25 5 6.25ZM15 6.25V16.875C16.5437 16.875 17.5 15.9187 17.5 14.375V8.75C17.5 7.20625 16.5437 6.25 15 6.25ZM13.75 5V16.875H6.25V5C6.25 3.45625 7.20625 2.5 8.75 2.5H11.25C12.7937 2.5 13.75 3.45625 13.75 5ZM11.875 5C11.875 4.49063 11.7594 4.375 11.25 4.375H8.75C8.24062 4.375 8.125 4.49063 8.125 5V6.25H11.875V5Z" />
    </>
  ),
};

export const suitcaseIcon: LoadedIconFunction = createIcon(
  "suitcase",
  iconDefinition,
);
