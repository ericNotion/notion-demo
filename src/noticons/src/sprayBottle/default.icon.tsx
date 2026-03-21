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
      <path d="M14.375 14.8594V17.5H5.625V13.5687C5.625 11.9812 6.27812 10.925 7.69687 10.2156L8.75 9.69063V7.50313H11.875L13.3187 10.3906C14.0938 11.9406 14.375 13.1281 14.375 14.8625V14.8594ZM5.625 6.31562L6.74375 6.875L7.99375 4.375H8.75V6.25H11.875V5.77187C11.875 5.24375 12.0937 4.89062 12.5656 4.65313L13.75 4.0625V1.875H5V4.375H6.59688L5.625 6.31562Z" />
    </>
  ),
};

export const sprayBottleIcon: LoadedIconFunction = createIcon(
  "sprayBottle",
  iconDefinition,
);
