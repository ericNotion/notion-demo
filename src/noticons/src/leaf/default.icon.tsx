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
      <path d="M16.875 5.78125C16.875 11.8562 13.1062 15.625 7.03125 15.625C6.78438 15.625 6.55937 15.6187 6.34375 15.6062L3.825 18.125L2.5 16.8L10.9156 8.38438L10.0312 7.5L4.375 13.125L3.75 12.5V12.3438C3.75 6.26875 7.51875 2.5 13.5938 2.5C14.7031 2.5 15.4406 2.61563 16.4531 2.92188C16.7594 3.93125 16.875 4.66875 16.875 5.78125Z" />
    </>
  ),
};

export const leafIcon: LoadedIconFunction = createIcon("leaf", iconDefinition);
