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
      <path d="M17.425 6.325L18.75 5L15.625 1.875L14.3 3.2L15.2 4.1L14.1531 5.14687C13.4812 4.63437 12.7094 4.24688 11.875 4.0125V2.5H8.125V4.0125C5.24063 4.82812 3.125 7.48125 3.125 10.625C3.125 14.4219 6.20312 17.5 10 17.5C13.7969 17.5 16.875 14.4219 16.875 10.625C16.875 9.06563 16.3531 7.625 15.4781 6.47187L16.525 5.425L17.425 6.325ZM10.625 12.6813V14.375H9.375V12.6813C8.825 12.4406 8.4375 11.8906 8.4375 11.25C8.4375 10.6094 8.825 10.0594 9.375 9.81875V5.625H10.625V9.81875C11.175 10.0594 11.5625 10.6094 11.5625 11.25C11.5625 11.8906 11.175 12.4406 10.625 12.6813Z" />
    </>
  ),
};

export const stopwatchIcon: LoadedIconFunction = createIcon(
  "stopwatch",
  iconDefinition,
);
