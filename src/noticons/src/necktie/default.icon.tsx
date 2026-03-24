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
      <path d="M8.75 5.625L7.5 1.875H12.5L11.25 5.625H8.75ZM8.75 6.875L7.5 16.875L10 19.375L12.5 16.875L11.25 6.875H8.75Z" />
    </>
  ),
};

export const necktieIcon: LoadedIconFunction = createIcon(
  "necktie",
  iconDefinition,
);
