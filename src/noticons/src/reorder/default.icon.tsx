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
      <path d="M17.5 4.0625V5.9375H2.5V4.0625H17.5ZM2.5 10.9375H17.5V9.0625H2.5V10.9375ZM2.5 15.9375H17.5V14.0625H2.5V15.9375Z" />
    </>
  ),
};

export const reorderIcon: LoadedIconFunction = createIcon(
  "reorder",
  iconDefinition,
);
