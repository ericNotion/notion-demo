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
      <path d="M15 11.25H11.6656L13.8594 16.5437L11.55 17.5L9.35625 12.2063L7 14.5625L6.25 13.8125V2.94062L7.30937 2.5L15 10.1906V11.25Z" />
    </>
  ),
};

export const cursorIcon: LoadedIconFunction = createIcon(
  "cursor",
  iconDefinition,
);
