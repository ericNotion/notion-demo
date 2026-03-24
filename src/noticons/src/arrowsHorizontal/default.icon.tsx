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
      <path d="M19.45 10L13.825 15.625L12.5 14.3L15.8625 10.9375H4.13749L7.49999 14.3L6.17499 15.625L0.549988 10L6.17499 4.375L7.49999 5.7L4.13749 9.0625H15.8594L12.4969 5.7L13.8219 4.375L19.4469 10H19.45Z" />
    </>
  ),
};

export const arrowsHorizontalIcon: LoadedIconFunction = createIcon(
  "arrowsHorizontal",
  iconDefinition,
);
