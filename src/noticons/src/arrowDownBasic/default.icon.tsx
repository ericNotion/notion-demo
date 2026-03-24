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
      <path d="M17.5 10.075L10 17.575L2.5 10.075L3.825 8.75L9.0625 13.9875V2.5H10.9375V13.9875L16.175 8.75L17.5 10.075Z" />
    </>
  ),
};

export const arrowDownBasicIcon: LoadedIconFunction = createIcon(
  "arrowDownBasic",
  iconDefinition,
);
