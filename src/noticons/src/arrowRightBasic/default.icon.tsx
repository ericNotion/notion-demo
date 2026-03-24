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
      <path d="M17.575 10L10.075 17.5L8.75 16.175L13.9875 10.9375H2.5V9.0625H13.9875L8.75 3.825L10.075 2.5L17.575 10Z" />
    </>
  ),
};

export const arrowRightBasicIcon: LoadedIconFunction = createIcon(
  "arrowRightBasic",
  iconDefinition,
);
