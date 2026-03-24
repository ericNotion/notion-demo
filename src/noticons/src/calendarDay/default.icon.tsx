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
      <path d="M15 3.75V1.875H13.125V3.75H6.875V1.875H5V3.75H2.5V16.25H17.5V3.75H15ZM15.625 12.5H11.25V8.75H15.625V12.5Z" />
    </>
  ),
};

export const calendarDayIcon: LoadedIconFunction = createIcon(
  "calendarDay",
  iconDefinition,
);
