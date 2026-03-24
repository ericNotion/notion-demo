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
      <path d="M10.55 10.625H9.45L7.8125 16.875L2.1875 15.9375L4.42812 2.5H15.575L17.8156 15.9375L12.1906 16.875L10.5531 10.625H10.55Z" />
    </>
  ),
};

export const shortsIcon: LoadedIconFunction = createIcon(
  "shorts",
  iconDefinition,
);
