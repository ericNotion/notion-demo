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
      <path d="M5.375 16.6875H14.625V14.8125H8.00184L13.1533 10L8.00184 5.1875H14.625V3.3125H5.375V5.2994L10.4067 10L5.375 14.7006V16.6875Z" />
    </>
  ),
};

export const formulaIcon: LoadedIconFunction = createIcon(
  "formula",
  iconDefinition,
);
