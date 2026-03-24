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
      <path d="M9.99999 1.4281L1.54999 7.5656L4.77811 17.5H15.2219L18.45 7.5656L9.99999 1.4281ZM9.99999 10.3125L3.75311 8.28435L9.99999 3.74685V10.3125Z" />
    </>
  ),
};

export const pentagonFourFifthsIcon: LoadedIconFunction = createIcon(
  "pentagonFourFifths",
  iconDefinition,
);
