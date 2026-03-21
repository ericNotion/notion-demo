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
      <path d="M15 5.9375H6.25V4.0625H15V5.9375ZM9.375 9.0625V10.9375H18.125V9.0625H9.375ZM9.375 15.9375H18.125V14.0625H9.375V15.9375ZM3.125 3.75C2.43437 3.75 1.875 4.30937 1.875 5C1.875 5.69062 2.43437 6.25 3.125 6.25C3.81562 6.25 4.375 5.69062 4.375 5C4.375 4.30937 3.81562 3.75 3.125 3.75ZM6.25 8.75C5.55938 8.75 5 9.30937 5 10C5 10.6906 5.55938 11.25 6.25 11.25C6.94063 11.25 7.5 10.6906 7.5 10C7.5 9.30937 6.94063 8.75 6.25 8.75ZM6.25 13.75C5.55938 13.75 5 14.3094 5 15C5 15.6906 5.55938 16.25 6.25 16.25C6.94063 16.25 7.5 15.6906 7.5 15C7.5 14.3094 6.94063 13.75 6.25 13.75Z" />
    </>
  ),
};

export const listIndentIcon: LoadedIconFunction = createIcon(
  "listIndent",
  iconDefinition,
);
