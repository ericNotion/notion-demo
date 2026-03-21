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
      <path d="M11.325 10L16.25 14.925L14.925 16.25L10 11.325L5.075 16.25L3.75 14.925L8.675 10L3.75 5.075L5.075 3.75L10 8.675L14.925 3.75L16.25 5.075L11.325 10Z" />
    </>
  ),
};

export const closeIcon: LoadedIconFunction = createIcon(
  "close",
  iconDefinition,
);
