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
      <path d="M16.875 4.0625L13.75 8.75L16.875 13.4375V14.375H5.625V3.125H16.875V4.0625ZM2.5 18.125H4.375V1.875H2.5V18.125Z" />
    </>
  ),
};

export const flagSwallowtailIcon: LoadedIconFunction = createIcon(
  "flagSwallowtail",
  iconDefinition,
);
