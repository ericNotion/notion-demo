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
      <path d="M10 1.34064L2.5 5.67189V14.3313L10 18.6625L17.5 14.3313V5.67189L10 1.34064ZM10 16.4969L4.375 13.25V6.75626L10 3.50939V10.0031L15.625 13.25L10 16.4969Z" />
    </>
  ),
};

export const hexagonTwoSixthsIcon: LoadedIconFunction = createIcon(
  "hexagonTwoSixths",
  iconDefinition,
);
