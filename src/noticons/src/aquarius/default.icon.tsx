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
      <path d="M2.575 8.875L1.25 7.55L5.05 3.75L7.525 6.225L10 3.75L12.475 6.225L14.95 3.75L18.75 7.55L17.425 8.875L14.95 6.4L12.475 8.875L10 6.4L7.525 8.875L5.05 6.4L2.575 8.875ZM12.475 13.5969L10 11.1219L7.525 13.5969L5.05 11.1219L1.25 14.9219L2.575 16.2469L5.05 13.7719L7.525 16.2469L10 13.7719L12.475 16.2469L14.95 13.7719L17.425 16.2469L18.75 14.9219L14.95 11.1219L12.475 13.5969Z" />
    </>
  ),
};

export const aquariusIcon: LoadedIconFunction = createIcon(
  "aquarius",
  iconDefinition,
);
