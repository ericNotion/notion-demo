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
      <path d="M4.375 15H17.5V16.875H2.5V3.125H4.375V15ZM16.25 5L11.4031 9.84688L8.43125 6.875L5.62813 9.67812V13.75H17.5031V5H16.2531H16.25Z" />
    </>
  ),
};

export const chartAreaIcon: LoadedIconFunction = createIcon(
  "chartArea",
  iconDefinition,
);
