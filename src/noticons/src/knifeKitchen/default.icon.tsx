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
      <path d="M18.125 5.15312L16.8219 6.45625C16.5438 6.73438 16.2312 6.875 15.9187 6.875C15.6062 6.875 15.3094 6.74062 15.0344 6.475L12.1656 9.34375L14.375 11.5531L12.4156 13.5125C9.91562 16.0125 7.8125 17.5 5.3125 17.5C4.11875 17.5 2.8125 17.0344 1.875 16.0969L15.4719 2.5L18.125 5.15312Z" />
    </>
  ),
};

export const knifeKitchenIcon: LoadedIconFunction = createIcon(
  "knifeKitchen",
  iconDefinition,
);
