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
      <path d="M15.8344 11.25H4.16562L4.3375 10.2125C4.5625 8.86562 5.4375 8.125 6.80313 8.125H8.74687C8.74687 6.47188 7.49687 5.40312 7.49687 3.75C7.49687 2.20625 8.45312 1.25 9.99687 1.25C11.5406 1.25 12.4969 2.20625 12.4969 3.75C12.4969 5.40312 11.2469 6.47188 11.2469 8.125H13.1906C14.5562 8.125 15.4312 8.86875 15.6562 10.2125L15.8281 11.25H15.8344ZM16.875 17.5L16.0406 12.5H3.95938L3.125 17.5H5L5.41563 15H6.66563L6.25 17.5H16.875Z" />
    </>
  ),
};

export const paintBrushWideIcon: LoadedIconFunction = createIcon(
  "paintBrushWide",
  iconDefinition,
);
