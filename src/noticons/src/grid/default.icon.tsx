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
      <path d="M3.125 10.625H9.375V16.875H3.125V10.625ZM3.125 9.375H9.375V3.125H3.125V9.375ZM10.625 16.875H16.875V10.625H10.625V16.875ZM10.625 3.125V9.375H16.875V3.125H10.625Z" />
    </>
  ),
};

export const gridIcon: LoadedIconFunction = createIcon("grid", iconDefinition);
