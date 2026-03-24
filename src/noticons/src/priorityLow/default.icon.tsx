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
      <path d="M10 11.325L2.5 3.825L3.825 2.5L10 8.675L16.175 2.5L17.5 3.825L10 11.325ZM10 14.9219L3.825 8.75L2.5 10.075L10 17.575L17.5 10.075L16.175 8.75L10 14.925V14.9219Z" />
    </>
  ),
};

export const priorityLowIcon: LoadedIconFunction = createIcon(
  "priorityLow",
  iconDefinition,
);
