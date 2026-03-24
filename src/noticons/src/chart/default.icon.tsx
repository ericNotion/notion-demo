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
      <path d="M18.75 15V16.875H1.25V15H3.125V10H6.875V15H8.125V3.125H11.875V15H13.125V7.5H16.875V15H18.75Z" />
    </>
  ),
};

export const chartIcon: LoadedIconFunction = createIcon(
  "chart",
  iconDefinition,
);
