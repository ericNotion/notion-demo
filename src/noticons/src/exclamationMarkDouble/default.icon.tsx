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
      <path d="M5 2.5H8.75V8.75L7.8125 12.5H5.9375L5 8.75V2.5ZM5 17.5H8.75V14.375H5V17.5ZM11.25 2.5V8.75L12.1875 12.5H14.0625L15 8.75V2.5H11.25ZM11.25 17.5H15V14.375H11.25V17.5Z" />
    </>
  ),
};

export const exclamationMarkDoubleIcon: LoadedIconFunction = createIcon(
  "exclamationMarkDouble",
  iconDefinition,
);
