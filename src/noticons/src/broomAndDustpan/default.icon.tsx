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
      <path d="M18.75 14.7844V16.875H11.25V15.625L15 13.75V1.25H16.875V11.875L18.0187 13.0188C18.5438 13.5437 18.75 14.0469 18.75 14.7875V14.7844ZM1.875 13.125L1.25 16.875H2.5L2.8125 15H4.0625L3.75 16.875H10L9.375 13.125H1.875ZM6.5625 1.25H4.6875V10H1.25V11.875H10V10H6.5625V1.25Z" />
    </>
  ),
};

export const broomAndDustpanIcon: LoadedIconFunction = createIcon(
  "broomAndDustpan",
  iconDefinition,
);
