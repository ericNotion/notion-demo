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
      <path d="M17.5 3.38437L14.7687 6.95C13.575 8.50937 12.6844 9.525 11.2969 10.9125L8.88125 13.3281L6.67188 11.1188L9.0875 8.70312C10.475 7.31563 11.4906 6.425 13.05 5.23125L16.6156 2.5L17.5 3.38437ZM4.50625 12.6437C3.62188 13.0875 3.1875 13.7344 3.13437 14.6812L1.25 15.625V16.875H5.11875C6.17812 16.875 6.88125 16.4406 7.35625 15.4938L7.99687 14.2156L5.7875 12.0062L4.50938 12.6469L4.50625 12.6437Z" />
    </>
  ),
};

export const paintBrushIcon: LoadedIconFunction = createIcon(
  "paintBrush",
  iconDefinition,
);
