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
      <path d="M16.875 10V16.25C16.875 17.0219 16.3969 17.5 15.625 17.5H4.375C3.60312 17.5 3.125 17.0219 3.125 16.25V10C3.125 8.50313 4.375 7.96875 4.375 7.96875C4.375 7.96875 3.125 7.43437 3.125 5.9375C3.125 4.44062 4.59063 2.5 10 2.5C15.4094 2.5 16.875 4.44062 16.875 5.9375C16.875 7.43437 15.625 7.96875 15.625 7.96875C15.625 7.96875 16.875 8.50313 16.875 10Z" />
    </>
  ),
};

export const breadIcon: LoadedIconFunction = createIcon(
  "bread",
  iconDefinition,
);
