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
      <path d="M15.4156 15L11.25 2.5H8.75L4.58437 15H2.5V16.875H4.375H15.625H17.5V15H15.4156ZM7.6 11.875L8.85 8.125H11.1469L12.3969 11.875H7.6Z" />
    </>
  ),
};

export const trafficConeIcon: LoadedIconFunction = createIcon(
  "trafficCone",
  iconDefinition,
);
