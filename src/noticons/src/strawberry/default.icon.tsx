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
      <path d="M16.25 8.50312C16.25 9.07187 16.0812 9.62812 15.7656 10.1L11.2937 16.8062C11.0062 17.2406 10.5187 17.5 9.99687 17.5C9.47499 17.5 8.99062 17.2406 8.69999 16.8062L4.22812 10.1C3.91249 9.62812 3.74374 9.07187 3.74374 8.50312C3.74374 6.9125 5.03124 5.625 6.62187 5.625H6.86874L6.24374 3.125C8.28124 3.125 8.74374 4.0625 8.74374 4.0625C9.05312 2.54063 9.99374 1.875 9.99374 1.875C9.99374 1.875 10.9344 2.54063 11.2437 4.0625C11.2437 4.0625 11.7062 3.125 13.7437 3.125L13.1187 5.625H13.3656C14.9562 5.625 16.2437 6.9125 16.2437 8.50312H16.25Z" />
    </>
  ),
};

export const strawberryIcon: LoadedIconFunction = createIcon(
  "strawberry",
  iconDefinition,
);
