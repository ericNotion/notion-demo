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
      <path d="M16.25 3.125H5V10C5 11.5437 5.95625 12.5 7.5 12.5H12.5C14.0437 12.5 15 11.5437 15 10H16.25C17.7938 10 18.75 9.04375 18.75 7.5V5.625C18.75 4.08125 17.7938 3.125 16.25 3.125ZM16.875 7.5C16.875 8.00938 16.7594 8.125 16.25 8.125H15V5H16.25C16.7594 5 16.875 5.11563 16.875 5.625V7.5ZM1.25 13.75H18.75V15.625H16.4062L16.0938 17.5H3.90625L3.59375 15.625H1.25V13.75Z" />
    </>
  ),
};

export const cafeIcon: LoadedIconFunction = createIcon("cafe", iconDefinition);
