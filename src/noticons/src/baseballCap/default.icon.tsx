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
      <path d="M19.375 11.625L18.7125 12.6219C17.5406 14.3812 15.8062 14.8406 13.9156 13.8969L9.87813 11.8781H1.875V10.0031H4.375V8.75311H1.96875C2.4375 5.63749 4.70312 3.75311 8.125 3.75311C11.5469 3.75311 13.9594 5.63749 14.3219 9.10311L19.375 11.6281V11.625Z" />
    </>
  ),
};

export const baseballCapIcon: LoadedIconFunction = createIcon(
  "baseballCap",
  iconDefinition,
);
