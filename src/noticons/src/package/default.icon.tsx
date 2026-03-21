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
      <path d="M10 1.875C10 1.875 8.65937 2.54375 7.64687 3.05L15 6.725V10.6219L12.5 11.8719V8.26875L4.85312 4.45C3.84062 4.95625 2.5 5.625 2.5 5.625V14.375L10 18.125L17.5 14.375V5.625L10 1.875ZM8.125 13.4375L4.375 11.5625V8.91563L8.125 10.7906V13.4375Z" />
    </>
  ),
};

export const packageIcon: LoadedIconFunction = createIcon(
  "package",
  iconDefinition,
);
