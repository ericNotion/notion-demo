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
      <path d="M2.5 13.75H17.5V16.875H2.5V13.75ZM10 2.5L2.5 10V11.25H17.5V10L10 2.5Z" />
    </>
  ),
};

export const ejectIcon: LoadedIconFunction = createIcon(
  "eject",
  iconDefinition,
);
