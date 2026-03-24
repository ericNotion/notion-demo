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
      <path d="M15 6.25H13.75V5C13.75 3.45625 12.7937 2.5 11.25 2.5H8.75C7.20625 2.5 6.25 3.45625 6.25 5V6.25H5C3.4625 6.25 2.5 7.2125 2.5 8.75V14.375C2.5 15.9187 3.45625 16.875 5 16.875H15C16.5437 16.875 17.5 15.9187 17.5 14.375V8.75C17.5 7.2125 16.5375 6.25 15 6.25ZM8.125 5C8.125 4.49063 8.24062 4.375 8.75 4.375H11.25C11.7594 4.375 11.875 4.49063 11.875 5V6.25H8.125V5ZM15.625 11.25H4.375V10H15.625V11.25Z" />
    </>
  ),
};

export const briefcaseIcon: LoadedIconFunction = createIcon(
  "briefcase",
  iconDefinition,
);
