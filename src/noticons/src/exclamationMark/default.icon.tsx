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
      <path d="M8.125 14.375H11.875V17.5H8.125V14.375ZM8.125 2.5V8.75L9.0625 12.5H10.9375L11.875 8.75V2.5H8.125Z" />
    </>
  ),
};

export const exclamationMarkIcon: LoadedIconFunction = createIcon(
  "exclamationMark",
  iconDefinition,
);
