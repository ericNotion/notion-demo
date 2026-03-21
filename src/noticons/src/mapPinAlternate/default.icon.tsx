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
      <path d="M10 1.875C7.2375 1.875 5 4.1125 5 6.875C5 7.69688 5.18125 8.4875 5.52813 9.18125L9.6875 17.5H10.3125L14.4719 9.18125C14.8188 8.4875 15 7.69688 15 6.875C15 4.1125 12.7625 1.875 10 1.875ZM10 10C8.275 10 6.875 8.6 6.875 6.875C6.875 5.15 8.275 3.75 10 3.75C11.725 3.75 13.125 5.15 13.125 6.875C13.125 8.6 11.725 10 10 10Z" />
    </>
  ),
};

export const mapPinAlternateIcon: LoadedIconFunction = createIcon(
  "mapPinAlternate",
  iconDefinition,
);
