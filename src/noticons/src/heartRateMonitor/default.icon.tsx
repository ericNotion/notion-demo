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
      <path d="M14.1375 10.625H17.5V14.375C17.5 15.9187 16.5437 16.875 15 16.875H5C3.45625 16.875 2.5 15.9187 2.5 14.375V10.625H6.0125L7.8125 7.02187L11.4875 14.375H12.2594L14.1344 10.625H14.1375ZM15 3.125H5C3.45625 3.125 2.5 4.08125 2.5 5.625V9.375H5.2375L7.425 5H8.19687L11.8719 12.3531L13.3594 9.375H17.4969V5.625C17.4969 4.08125 16.5406 3.125 14.9969 3.125H15Z" />
    </>
  ),
};

export const heartRateMonitorIcon: LoadedIconFunction = createIcon(
  "heartRateMonitor",
  iconDefinition,
);
