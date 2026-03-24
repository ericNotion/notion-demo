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
      <path d="M8.125 14.375H11.875V17.5H8.125V14.375ZM10 2.5C6.53125 2.5 4.375 4.4375 4.375 7.5H7.5C7.5 6.0625 8.36875 5.3125 9.92188 5.3125C11.475 5.3125 12.3438 6 12.3438 7.1875C12.3438 9.1625 8.4375 8.53438 8.4375 12.1875V12.5H11.5625C11.5625 10.525 15.625 10.8406 15.625 7.1875C15.625 4.375 13.4688 2.5 10 2.5Z" />
    </>
  ),
};

export const questionMarkIcon: LoadedIconFunction = createIcon(
  "questionMark",
  iconDefinition,
);
