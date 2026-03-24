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
      <path d="M16.875 12.5H3.125V5C3.125 4.22812 3.60313 3.75 4.375 3.75H15.625C16.3969 3.75 16.875 4.22812 16.875 5V12.5ZM1.25 13.75C1.25 15.2937 2.20625 16.25 3.75 16.25H16.25C17.7938 16.25 18.75 15.2937 18.75 13.75H1.25Z" />
    </>
  ),
};

export const laptopIcon: LoadedIconFunction = createIcon(
  "laptop",
  iconDefinition,
);
