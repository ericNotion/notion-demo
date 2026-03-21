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
      <path d="M16.875 5.625V17.5H7.28437C6.54375 17.5 6.04062 17.2906 5.51562 16.7688L3.85625 15.1094C3.33125 14.5844 3.125 14.0812 3.125 13.3406V2.5H13.75V14.375H5.775L7.025 15.625H15V5.625H16.875Z" />
    </>
  ),
};

export const bookClosedIcon: LoadedIconFunction = createIcon(
  "bookClosed",
  iconDefinition,
);
