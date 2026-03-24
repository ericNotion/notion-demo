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
      <path d="M7.5 0L6.6625 1.67812L13.3094 5H2.5V16.25H17.5V5L7.5 0ZM5.625 14.375C4.93438 14.375 4.375 13.8156 4.375 13.125C4.375 12.4344 4.93438 11.875 5.625 11.875C6.31562 11.875 6.875 12.4344 6.875 13.125C6.875 13.8156 6.31562 14.375 5.625 14.375ZM14.375 14.375C13.6844 14.375 13.125 13.8156 13.125 13.125C13.125 12.4344 13.6844 11.875 14.375 11.875C15.0656 11.875 15.625 12.4344 15.625 13.125C15.625 13.8156 15.0656 14.375 14.375 14.375ZM15.625 9.375H4.375V6.875H15.625V9.375Z" />
    </>
  ),
};

export const radioIcon: LoadedIconFunction = createIcon(
  "radio",
  iconDefinition,
);
