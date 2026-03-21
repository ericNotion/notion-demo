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
      <path d="M11.875 10L16.9625 12.9375L16.025 14.5625L10.9375 11.625V17.5H9.06251V11.625L3.97501 14.5625L3.03751 12.9375L8.12501 10L3.03751 7.0625L3.97501 5.4375L9.06251 8.375V2.5H10.9375V8.375L16.025 5.4375L16.9625 7.0625L11.875 10Z" />
    </>
  ),
};

export const asteriskIcon: LoadedIconFunction = createIcon(
  "asterisk",
  iconDefinition,
);
