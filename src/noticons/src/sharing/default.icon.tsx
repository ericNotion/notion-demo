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
      <path d="M4.375 3.75C4.375 2.78438 4.97188 2.1875 5.9375 2.1875C6.90312 2.1875 7.5 2.78438 7.5 3.75C7.5 4.71563 6.90312 5.3125 5.9375 5.3125C4.97188 5.3125 4.375 4.71563 4.375 3.75ZM19.375 7.8125V6.25H0.625V7.8125H4.375V10.625L2.5 16.25H4.475L5.9375 11.8656L7.4 16.25H9.375L7.5 10.625V7.8125H12.5V10.625L10.625 16.25H12.6L14.0625 11.8656L15.525 16.25H17.5L15.625 10.625V7.8125H19.375ZM14.0625 5.3125C15.0281 5.3125 15.625 4.71563 15.625 3.75C15.625 2.78438 15.0281 2.1875 14.0625 2.1875C13.0969 2.1875 12.5 2.78438 12.5 3.75C12.5 4.71563 13.0969 5.3125 14.0625 5.3125Z" />
    </>
  ),
};

export const sharingIcon: LoadedIconFunction = createIcon(
  "sharing",
  iconDefinition,
);
