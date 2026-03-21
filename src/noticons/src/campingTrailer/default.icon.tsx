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
      <path d="M16.875 12.5V5.625H6.875C3.79063 5.625 1.875 7.54063 1.875 10.625V14.375H6.25V15C6.25 16.0344 7.09062 16.875 8.125 16.875C9.15938 16.875 10 16.0344 10 15V14.375H19.375V12.5H16.875ZM15 10.625H10.625V7.5H15V10.625Z" />
    </>
  ),
};

export const campingTrailerIcon: LoadedIconFunction = createIcon(
  "campingTrailer",
  iconDefinition,
);
