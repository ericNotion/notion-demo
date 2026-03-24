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
      <path d="M2.5 3.125V14.375C2.5 15.9187 3.45625 16.875 5 16.875H15C16.5437 16.875 17.5 15.9187 17.5 14.375V3.125H2.5ZM7.5 4.375H10L11.25 5.625L10 6.875H7.5L8.75 5.625L7.5 4.375ZM5 6.875H3.75V4.375H5L6.25 5.625L5 6.875ZM13.75 12.3438L8.4375 15H7.5V8.75H8.4375L13.75 11.4062V12.3438ZM15 6.875H12.5L13.75 5.625L12.5 4.375H15L16.25 5.625L15 6.875Z" />
    </>
  ),
};

export const movieClapboardPlayIcon: LoadedIconFunction = createIcon(
  "movieClapboardPlay",
  iconDefinition,
);
