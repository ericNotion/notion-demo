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
      <path d="M17.5 9.375V10.625L16.1938 11.4281C14.3844 12.5406 12.8906 14.0969 11.85 15.9469L10.625 18.125H9.375L8.15 15.9469C7.10938 14.0969 5.61563 12.5406 3.80625 11.4281L2.5 10.625V9.375L3.80625 8.57188C5.61563 7.45937 7.10938 5.90313 8.15 4.05313L9.375 1.875H10.625L11.85 4.05313C12.8906 5.90313 14.3844 7.45937 16.1938 8.57188L17.5 9.375Z" />
    </>
  ),
};

export const suitDiamondIcon: LoadedIconFunction = createIcon(
  "suitDiamond",
  iconDefinition,
);
