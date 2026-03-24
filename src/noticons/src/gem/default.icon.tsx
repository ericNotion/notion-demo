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
      <path d="M15.9375 3.75H4.0625L1.25 8.125L10 16.875L18.75 8.125L15.9375 3.75ZM10 5.52188L11.5625 8.125H8.4375L10 5.52188ZM3.4375 8.125L5 5.52188L6.5625 8.125H3.4375ZM10 14.375L7.375 10H12.625L10 14.375ZM15 5.52188L16.5625 8.125H13.4375L15 5.52188Z" />
    </>
  ),
};

export const gemIcon: LoadedIconFunction = createIcon("gem", iconDefinition);
