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
      <path d="M13.75 2.5H6.25C4.70625 2.5 3.75 3.45625 3.75 5V15C3.75 16.5437 4.70625 17.5 6.25 17.5H13.75C15.2937 17.5 16.25 16.5437 16.25 15V5C16.25 3.45625 15.2937 2.5 13.75 2.5ZM11.875 15.625H8.125C7.74062 15.625 7.5 15.3844 7.5 15C7.5 14.6156 7.74062 14.375 8.125 14.375H11.875C12.2594 14.375 12.5 14.6156 12.5 15C12.5 15.3844 12.2594 15.625 11.875 15.625Z" />
    </>
  ),
};

export const tabletIcon: LoadedIconFunction = createIcon(
  "tablet",
  iconDefinition,
);
