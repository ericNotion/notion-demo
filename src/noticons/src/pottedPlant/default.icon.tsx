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
      <path d="M10.625 8.4375V10H15.625V11.875H14.2188L12.8125 17.5H7.1875L5.78125 11.875H4.375V10H9.375V8.4375H4.375V7.225C5.72187 5.87813 7.7375 5.59375 9.375 6.35625V5.44375L5.40313 1.48125L6.25 0.625C8.68125 0.625 10.625 2.56875 10.625 5V5.10625C12.2625 4.34375 14.2781 4.62813 15.625 5.975V7.1875H10.625V8.4375Z" />
    </>
  ),
};

export const pottedPlantIcon: LoadedIconFunction = createIcon(
  "pottedPlant",
  iconDefinition,
);
