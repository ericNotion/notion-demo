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
      <path d="M3.125 3.75L5.20937 16.25H14.7937L16.8781 3.75H3.125ZM13.8281 10.625H6.17188L5.3375 5.625H14.6594L13.825 10.625H13.8281Z" />
    </>
  ),
};

export const tumblerIcon: LoadedIconFunction = createIcon(
  "tumbler",
  iconDefinition,
);
