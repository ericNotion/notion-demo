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
      <path d="M10.9375 10.5219V15L10.3125 17.5H9.6875L9.0625 15V10.5219C7.09687 10.0937 5.625 8.34375 5.625 6.25C5.625 3.83438 7.58438 1.875 10 1.875C12.4156 1.875 14.375 3.83438 14.375 6.25C14.375 8.34375 12.9031 10.0937 10.9375 10.5219Z" />
    </>
  ),
};

export const mapPinIcon: LoadedIconFunction = createIcon(
  "mapPin",
  iconDefinition,
);
