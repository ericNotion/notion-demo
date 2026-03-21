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
      <path d="M15 3.75V1.875H13.125V3.75H6.875V1.875H5V3.75H2.5V16.25H17.5V3.75H15ZM6.875 14.6875H4.375V12.5H6.875V14.6875ZM6.875 10.9375H4.375V8.75H6.875V10.9375ZM11.25 14.6875H8.75V12.5H11.25V14.6875ZM11.25 10.9375H8.75V8.75H11.25V10.9375ZM15.625 14.6875H13.125V12.5H15.625V14.6875ZM15.625 10.9375H13.125V8.75H15.625V10.9375Z" />
    </>
  ),
};

export const calendarMonthIcon: LoadedIconFunction = createIcon(
  "calendarMonth",
  iconDefinition,
);
