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
      <path d="M2.5 1.875H4.375V18.125H2.5V1.875ZM6.875 3.125H5.625V14.375H6.875L16.875 9.375V8.125L6.875 3.125Z" />
    </>
  ),
};

export const flagPennantIcon: LoadedIconFunction = createIcon(
  "flagPennant",
  iconDefinition,
);
