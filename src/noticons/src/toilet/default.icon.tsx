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
      <path d="M13.3813 14.6313L15 16.25V17.5H6.25V13.125L3.75 10.625V2.5H8.75V8.75H16.25V10C16.25 12.2937 15.1906 13.9375 13.3813 14.6313Z" />
    </>
  ),
};

export const toiletIcon: LoadedIconFunction = createIcon(
  "toilet",
  iconDefinition,
);
