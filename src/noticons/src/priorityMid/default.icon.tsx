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
      <path d="M2.5 11.875H17.5V13.75H2.5V11.875ZM2.5 6.25V8.125H17.5V6.25H2.5Z" />
    </>
  ),
};

export const priorityMidIcon: LoadedIconFunction = createIcon(
  "priorityMid",
  iconDefinition,
);
