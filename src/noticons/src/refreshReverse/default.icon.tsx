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
      <path d="M16.875 10C16.875 13.7969 13.7969 16.875 10 16.875C6.20312 16.875 3.125 13.7969 3.125 10H5C5 12.7625 7.2375 15 10 15C12.7625 15 15 12.7625 15 10C15 7.2375 12.7625 5 10 5H9.29375L11.0938 6.8L9.76875 8.125L5.70625 4.0625L9.76875 0L11.0938 1.325L9.29375 3.125H10C13.7969 3.125 16.875 6.20312 16.875 10Z" />
    </>
  ),
};

export const refreshReverseIcon: LoadedIconFunction = createIcon(
  "refreshReverse",
  iconDefinition,
);
