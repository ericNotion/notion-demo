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
      <path d="M9.99999 1.4281L1.54999 7.5656L4.77811 17.5H15.2219L18.45 7.5656L9.99999 1.4281ZM6.14061 15.625L3.75624 8.28435L10.0031 3.74685V10.3125L13.8625 15.625H6.14374H6.14061Z" />
    </>
  ),
};

export const pentagonTwoFifthsIcon: LoadedIconFunction = createIcon(
  "pentagonTwoFifths",
  iconDefinition,
);
