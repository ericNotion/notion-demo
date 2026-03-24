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
      <path d="M16.875 10C16.875 13.7969 13.7969 16.875 10 16.875C6.20312 16.875 3.125 13.7969 3.125 10C3.125 6.20312 6.20312 3.125 10 3.125H10.7062L8.90625 1.325L10.2313 0L14.2938 4.0625L10.2313 8.125L8.90625 6.8L10.7062 5H10C7.2375 5 5 7.2375 5 10C5 12.7625 7.2375 15 10 15C12.7625 15 15 12.7625 15 10H16.875Z" />
    </>
  ),
};

export const refreshIcon: LoadedIconFunction = createIcon(
  "refresh",
  iconDefinition,
);
