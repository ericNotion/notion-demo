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
      <path d="M10.9375 14.3125V15.625H13.75V17.5H6.25V15.625H9.0625V14.3125C6.14688 13.9531 4.375 11.8938 4.375 8.75H6.25C6.25 11.0625 7.6875 12.5 10 12.5C12.3125 12.5 13.75 11.0625 13.75 8.75H15.625C15.625 11.8938 13.8531 13.9531 10.9375 14.3125ZM10 11.25C11.5437 11.25 12.5 10.2937 12.5 8.75V4.375C12.5 2.83125 11.5437 1.875 10 1.875C8.45625 1.875 7.5 2.83125 7.5 4.375V8.75C7.5 10.2937 8.45625 11.25 10 11.25Z" />
    </>
  ),
};

export const microphoneIcon: LoadedIconFunction = createIcon(
  "microphone",
  iconDefinition,
);
