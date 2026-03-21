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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM12.2625 14.0625L10.9375 12.7375L12.7375 10.9375H7.26562L9.06563 12.7375L7.74063 14.0625L3.67813 10L7.74063 5.9375L9.06563 7.2625L7.26562 9.0625H12.7375L10.9375 7.2625L12.2625 5.9375L16.325 10L12.2625 14.0625Z" />
    </>
  ),
};

export const circleArrowsHorizontalIcon: LoadedIconFunction = createIcon(
  "circleArrowsHorizontal",
  iconDefinition,
);
