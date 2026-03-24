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
      <path d="M8.4375 3.75C8.4375 2.78438 9.03438 2.1875 10 2.1875C10.9656 2.1875 11.5625 2.78438 11.5625 3.75C11.5625 4.71563 10.9656 5.3125 10 5.3125C9.03438 5.3125 8.4375 4.71563 8.4375 3.75ZM15.625 7.8125V6.25H4.375V7.8125H8.4375V10.9375L6.25 17.5H8.225L10 12.1781L11.775 17.5H13.75L11.5625 10.9375V7.8125H15.625Z" />
    </>
  ),
};

export const vitruvianManIcon: LoadedIconFunction = createIcon(
  "vitruvianMan",
  iconDefinition,
);
