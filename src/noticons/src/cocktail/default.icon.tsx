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
      <path d="M17.5 5V3.125H2.5V5L9.0625 11.5625V15.625H5.3125V17.5H14.6875V15.625H10.9375V11.5625L17.5 5ZM10 9.375C9.48125 9.375 9.0625 8.95625 9.0625 8.4375C9.0625 7.91875 9.48125 7.5 10 7.5C10.5188 7.5 10.9375 7.91875 10.9375 8.4375C10.9375 8.95625 10.5188 9.375 10 9.375ZM14.8469 5L13.5969 6.25H6.4L5.15 5H14.8469Z" />
    </>
  ),
};

export const cocktailIcon: LoadedIconFunction = createIcon(
  "cocktail",
  iconDefinition,
);
