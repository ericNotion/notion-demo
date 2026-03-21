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
      <path d="M17.5375 10.9375H6.05L11.2875 16.175L9.9625 17.5L2.4625 10L9.9625 2.5L11.2875 3.825L6.05 9.0625H17.5375V10.9375Z" />
    </>
  ),
};

export const arrowLeftBasicIcon: LoadedIconFunction = createIcon(
  "arrowLeftBasic",
  iconDefinition,
);
