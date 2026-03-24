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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM12.7375 10.9375L14.0625 12.2625L10 16.325L5.9375 12.2625L7.2625 10.9375L9.0625 12.7375V7.26562L7.2625 9.06563L5.9375 7.74063L10 3.67813L14.0625 7.74063L12.7375 9.06563L10.9375 7.26562V12.7375L12.7375 10.9375Z" />
    </>
  ),
};

export const circleArrowsVerticalIcon: LoadedIconFunction = createIcon(
  "circleArrowsVertical",
  iconDefinition,
);
