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
      <path d="M14.5219 8.51255L16.25 9.37505V10.625L10 13.75L3.75 10.625V9.37505L5.47813 8.51255L10 10.775L14.5219 8.51255ZM10 15.15L5.47813 12.8876L3.75 13.75V15L10 18.125L16.25 15V13.75L14.5219 12.8876L10 15.15ZM10 1.87817L3.75 5.00317V6.25317L10 9.37817L16.25 6.25317V5.00317L10 1.87817Z" />
    </>
  ),
};

export const layersIcon: LoadedIconFunction = createIcon(
  "layers",
  iconDefinition,
);
