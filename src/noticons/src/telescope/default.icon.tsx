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
      <path d="M10.9375 12.5407L17.5 15.8219L16.6625 17.5L10.9375 14.6375V17.5H9.0625V14.6375L3.3375 17.5L2.5 15.8219L9.0625 12.5407V8.82505L6.67813 10.0188L6.25938 9.1813L3.34062 10.6407L2.50313 8.96255L5.42188 7.50317L5.00313 6.66567L11.6719 3.3313L11.2531 2.4938L14.9875 0.628174L17.5031 5.65942L13.7688 7.52505L13.35 6.68755L10.9406 7.89067V12.5438L10.9375 12.5407Z" />
    </>
  ),
};

export const telescopeIcon: LoadedIconFunction = createIcon(
  "telescope",
  iconDefinition,
);
