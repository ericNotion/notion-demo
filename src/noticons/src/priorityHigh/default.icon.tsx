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
      <path d="M10 8.67505L17.5 16.175L16.175 17.5L10 11.325L3.825 17.5L2.5 16.175L10 8.67505ZM10 5.07817L16.175 11.2532L17.5 9.92817L10 2.42505L2.5 9.92505L3.825 11.25L10 5.07505V5.07817Z" />
    </>
  ),
};

export const priorityHighIcon: LoadedIconFunction = createIcon(
  "priorityHigh",
  iconDefinition,
);
