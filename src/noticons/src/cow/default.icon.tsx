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
      <path d="M19.375 7.8125L18.9062 8.75H15.9375L14.7219 11.1844C14.4844 11.6562 14.1312 11.875 13.6031 11.875H13.4375V15.625L14.0625 16.875H11.875L11.25 15.625V11.875H10.625L9.51875 12.2437C8.95 12.4344 8.5375 12.5 7.9375 12.5H6.5625L5.78125 14.0625L7.1875 16.875H5L3.75 14.375V10L2.5 8.75V12.5H1.25V7.5C1.25 5.95625 2.20625 5 3.75 5H14.375L15 4.375V3.125H15.9375C16.3219 3.125 16.5625 3.36562 16.5625 3.75V4.375H16.8844C17.4125 4.375 17.7656 4.59375 18.0031 5.06562L19.375 7.8125Z" />
    </>
  ),
};

export const cowIcon: LoadedIconFunction = createIcon("cow", iconDefinition);
