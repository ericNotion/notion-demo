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
      <path d="M13.75 13.75H11.875C11.875 12.7156 11.0344 11.875 10 11.875C8.96562 11.875 8.125 12.7156 8.125 13.75H6.25C6.25 11.6781 7.92812 10 10 10C12.0719 10 13.75 11.6781 13.75 13.75ZM10 6.875C6.20312 6.875 3.125 9.95312 3.125 13.75H5C5 10.9875 7.2375 8.75 10 8.75C12.7625 8.75 15 10.9875 15 13.75H16.875C16.875 9.95312 13.7969 6.875 10 6.875ZM10 3.75C4.47813 3.75 0 8.22813 0 13.75H1.875C1.875 9.2625 5.5125 5.625 10 5.625C14.4875 5.625 18.125 9.2625 18.125 13.75H20C20 8.22813 15.5219 3.75 10 3.75Z" />
    </>
  ),
};

export const rainbowIcon: LoadedIconFunction = createIcon(
  "rainbow",
  iconDefinition,
);
