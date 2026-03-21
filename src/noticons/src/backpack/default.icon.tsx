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
      <path d="M13.75 4.76875V3.75C13.75 2.20625 12.7937 1.25 11.25 1.25H8.75C7.20625 1.25 6.25 2.20625 6.25 3.75V4.76875C5.0625 5.34375 4.375 6.525 4.375 8.125V17.5H15.625V8.125C15.625 6.525 14.9375 5.34688 13.75 4.76875ZM8.125 3.75C8.125 3.24063 8.24062 3.125 8.75 3.125H11.25C11.7594 3.125 11.875 3.24063 11.875 3.75V4.375H8.125V3.75ZM13.75 13.125H6.25V11.875H13.75V13.125Z" />
    </>
  ),
};

export const backpackIcon: LoadedIconFunction = createIcon(
  "backpack",
  iconDefinition,
);
