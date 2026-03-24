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
      <path d="M14.3 12.5L15.625 13.825L10 19.45L4.375 13.825L5.7 12.5L9.0625 15.8625V4.1375L5.7 7.5L4.375 6.175L10 0.550003L15.625 6.175L14.3 7.5L10.9375 4.1375V15.8594L14.3 12.4969V12.5Z" />
    </>
  ),
};

export const arrowsVerticalIcon: LoadedIconFunction = createIcon(
  "arrowsVertical",
  iconDefinition,
);
