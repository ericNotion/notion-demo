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
      <path d="M18.3125 18.3125H8.3125V8.3125H18.3125V18.3125Z" />
      <path d="M7.3125 1.6875C10.3353 1.6875 12.8008 4.07191 12.9316 7.0625H7.0625V12.9307C4.07193 12.7998 1.6875 10.3353 1.6875 7.3125C1.6875 4.2059 4.2059 1.6875 7.3125 1.6875Z" />
    </>
  ),
};

export const squareCircleIcon: LoadedIconFunction = createIcon(
  "squareCircle",
  iconDefinition,
);
