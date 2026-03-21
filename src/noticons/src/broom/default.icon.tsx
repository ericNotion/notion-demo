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
      <path d="M14.7906 11.875L15.625 16.875H7.5L7.91563 14.375H6.66563L6.25 16.875H4.375L5.20938 11.875H14.7937H14.7906ZM10.9375 8.75V1.25H9.0625V8.75H4.375V10.625H15.625V8.75H10.9375Z" />
    </>
  ),
};

export const broomIcon: LoadedIconFunction = createIcon(
  "broom",
  iconDefinition,
);
