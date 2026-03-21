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
      <path d="M17.5 4.0625V5.9375H6.875V4.0625H17.5ZM6.875 10.9375H17.5V9.0625H6.875V10.9375ZM6.875 15.9375H17.5V14.0625H6.875V15.9375ZM3.75 3.75C3.05937 3.75 2.5 4.30937 2.5 5C2.5 5.69062 3.05937 6.25 3.75 6.25C4.44062 6.25 5 5.69062 5 5C5 4.30937 4.44062 3.75 3.75 3.75ZM3.75 8.75C3.05937 8.75 2.5 9.30937 2.5 10C2.5 10.6906 3.05937 11.25 3.75 11.25C4.44062 11.25 5 10.6906 5 10C5 9.30937 4.44062 8.75 3.75 8.75ZM3.75 13.75C3.05937 13.75 2.5 14.3094 2.5 15C2.5 15.6906 3.05937 16.25 3.75 16.25C4.44062 16.25 5 15.6906 5 15C5 14.3094 4.44062 13.75 3.75 13.75Z" />
    </>
  ),
};

export const listIcon: LoadedIconFunction = createIcon("list", iconDefinition);
