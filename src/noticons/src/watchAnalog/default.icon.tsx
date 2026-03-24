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
      <path d="M10 3.75C9.10938 3.75 8.26562 3.9375 7.5 4.275V1.25H12.5V4.275C11.7344 3.94063 10.8906 3.75 10 3.75ZM15 10C15 12.7625 12.7625 15 10 15C7.2375 15 5 12.7625 5 10C5 7.2375 7.2375 5 10 5C12.7625 5 15 7.2375 15 10ZM13.125 9.58438H10.625V6.25H9.375V10.8344H13.125V9.58438ZM7.5 15.7281V18.7531H12.5V15.7281C11.7344 16.0625 10.8906 16.2531 10 16.2531C9.10938 16.2531 8.26562 16.0656 7.5 15.7281Z" />
    </>
  ),
};

export const watchAnalogIcon: LoadedIconFunction = createIcon(
  "watchAnalog",
  iconDefinition,
);
