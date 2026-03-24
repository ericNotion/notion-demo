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
      <path d="M13.75 3.125H6.25C3.83438 3.125 1.875 5.64375 1.875 8.75C1.875 11.8562 3.83438 14.375 6.25 14.375C7.475 14.375 8.58125 13.725 9.375 12.6844V16.875H18.125V8.75C18.125 5.64375 16.1656 3.125 13.75 3.125ZM6.25 10.9375C5.3875 10.9375 4.6875 9.95937 4.6875 8.75C4.6875 7.54063 5.3875 6.5625 6.25 6.5625C7.1125 6.5625 7.8125 7.54063 7.8125 8.75C7.8125 9.95937 7.1125 10.9375 6.25 10.9375Z" />
    </>
  ),
};

export const toiletPaperIcon: LoadedIconFunction = createIcon(
  "toiletPaper",
  iconDefinition,
);
