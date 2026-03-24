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
      <path d="M16.875 8.75V17.5H3.125V8.75H7.1875V10.625H5V15.625H15V10.625H12.8125V8.75H16.875ZM9.0625 4.84062V13.8281H10.9375V4.84062L13.675 7.57812L15 6.25313L10 1.25L5 6.25L6.325 7.575L9.0625 4.8375V4.84062Z" />
    </>
  ),
};

export const shareIcon: LoadedIconFunction = createIcon(
  "share",
  iconDefinition,
);
