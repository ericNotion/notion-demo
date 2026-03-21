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
      <path d="M17.5 10.3125C17.5 13.4125 15.2875 15.625 12.1875 15.625H6.24999V13.75H12.1875C14.1937 13.75 15.625 12.3188 15.625 10.3125C15.625 8.30625 14.1937 6.875 12.1875 6.875H5.85624L7.65624 8.675L6.33124 10L2.26874 5.9375L6.33124 1.875L7.65624 3.2L5.85624 5H12.1875C15.2875 5 17.5 7.2125 17.5 10.3125Z" />
    </>
  ),
};

export const undoIcon: LoadedIconFunction = createIcon("undo", iconDefinition);
