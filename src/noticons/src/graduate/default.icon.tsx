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
      <path d="M14.0594 10.6187L15 14.375C15 14.375 12.9937 16.875 8.75 16.875C4.50625 16.875 2.5 14.375 2.5 14.375L3.44063 10.6187L8.75 13.275L14.0594 10.6187ZM16.875 6.5625L8.75 2.5L0.625 6.5625V7.8125L8.75 11.875L15.4344 8.53125L16.8469 14.175L16.5625 15.3094V16.8719H19.0625V15.3094L16.875 6.55937V6.5625Z" />
    </>
  ),
};

export const graduateIcon: LoadedIconFunction = createIcon(
  "graduate",
  iconDefinition,
);
