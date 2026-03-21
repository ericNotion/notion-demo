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
      <path d="M3.125 3.125H6.875V16.875H3.125V3.125ZM8.125 16.875H11.875V3.125H8.125V16.875ZM13.125 3.125V16.875H16.875V3.125H13.125Z" />
    </>
  ),
};

export const columnIcon: LoadedIconFunction = createIcon(
  "column",
  iconDefinition,
);
