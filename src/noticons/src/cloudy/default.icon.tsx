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
      <path d="M18.125 13.125C18.125 14.2812 17.4062 15 16.25 15H4.6875C2.95312 15 1.875 13.9219 1.875 12.1875C1.875 10.5594 2.825 9.50938 4.375 9.3875C4.375 9.38438 4.375 9.37813 4.375 9.375C4.375 6.675 6.05 5 8.75 5C11.0312 5 12.5781 6.2 13.0031 8.20312C13.2375 8.15313 13.4844 8.125 13.75 8.125C15.4844 8.125 16.5625 9.20312 16.5625 10.9375C16.5625 11.0531 16.5563 11.1656 16.5469 11.275C17.525 11.3906 18.125 12.075 18.125 13.125Z" />
    </>
  ),
};

export const cloudyIcon: LoadedIconFunction = createIcon(
  "cloudy",
  iconDefinition,
);
