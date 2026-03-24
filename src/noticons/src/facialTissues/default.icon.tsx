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
      <path d="M6.875 8.75L5 3.125C5 3.125 6.09375 2.5 7.1875 2.5C8.8875 2.5 10.1312 3.75 11.5625 3.75C12.6562 3.75 13.75 3.125 13.75 3.125H15L13.125 8.75H6.875ZM2.5 10V17.5H17.5V10H2.5Z" />
    </>
  ),
};

export const facialTissuesIcon: LoadedIconFunction = createIcon(
  "facialTissues",
  iconDefinition,
);
