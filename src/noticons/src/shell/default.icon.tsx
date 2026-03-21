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
      <path d="M18.125 10.625C18.125 6.1375 14.4875 2.5 10 2.5C5.5125 2.5 1.875 6.1375 1.875 10.625V11.4062L5.625 14.2188L4.16563 15.3125L6.25 16.875L7.70937 15.7812L10 17.5L12.2906 15.7812L13.75 16.875L15.8344 15.3125L14.375 14.2188L18.125 11.4062V10.625ZM10 14.375L5.5 11L6.25 10L9.375 12.3438V9.375H10.625V12.3438L13.75 10L14.5 11L10 14.375Z" />
    </>
  ),
};

export const shellIcon: LoadedIconFunction = createIcon(
  "shell",
  iconDefinition,
);
