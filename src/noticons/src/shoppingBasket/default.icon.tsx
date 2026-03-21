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
      <path d="M18.125 8.75V10.625H16.875L15.8344 16.875H4.16563L3.125 10.625H1.875V8.75H4.57188L7.69687 2.5L9.375 3.3375L6.66875 8.75H13.3313L10.625 3.3375L12.3031 2.5L15.4281 8.75H18.125Z" />
    </>
  ),
};

export const shoppingBasketIcon: LoadedIconFunction = createIcon(
  "shoppingBasket",
  iconDefinition,
);
