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
      <path d="M7.5 10H2.5V3.75L5 2.5H5.625V3.75H7.5V10ZM14.375 7.5C15.9187 7.5 16.875 6.54375 16.875 5V1.875H11.875V3.75H10V5H11.875C11.875 6.54375 12.8313 7.5 14.375 7.5ZM11.25 17.5H17.5V15H11.25V17.5ZM11.25 13.75H12.5L15 8.75H11.5156C10.7219 8.75 10.1937 9.07812 9.8375 9.7875L8.79375 11.875H6.24687V13.75H9.95L11.2469 11.1594V13.75H11.25ZM16.25 8.75L13.75 13.75H17.5V10C17.5 9.22813 17.0219 8.75 16.25 8.75Z" />
    </>
  ),
};

export const immigrationIcon: LoadedIconFunction = createIcon(
  "immigration",
  iconDefinition,
);
