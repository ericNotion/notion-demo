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
      <path d="M18.45 7.5656L15.2219 17.5H4.77811L1.54999 7.5656L9.99999 1.4281L18.45 7.5656Z" />
    </>
  ),
};

export const pentagonAlternateIcon: LoadedIconFunction = createIcon(
  "pentagonAlternate",
  iconDefinition,
);
