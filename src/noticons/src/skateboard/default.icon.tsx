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
      <path d="M19.4062 8.79375C18.4187 9.78125 17.4562 10.3219 16.25 10.525V11.5594C16.25 12.4219 15.55 13.1219 14.6875 13.1219C13.825 13.1219 13.125 12.4219 13.125 11.5594V10.6219H6.875V11.5594C6.875 12.4219 6.175 13.1219 5.3125 13.1219C4.45 13.1219 3.75 12.4219 3.75 11.5594V10.525C2.54375 10.3188 1.58125 9.78125 0.59375 8.79375L0 8.2L1.325 6.875L1.91875 7.46875C2.83437 8.38437 3.71563 8.75 5.0125 8.75H14.9875C16.2844 8.75 17.1656 8.38437 18.0812 7.46875L18.6156 6.93438L20 8.20312L19.4062 8.79687V8.79375Z" />
    </>
  ),
};

export const skateboardIcon: LoadedIconFunction = createIcon(
  "skateboard",
  iconDefinition,
);
