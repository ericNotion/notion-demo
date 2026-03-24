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
      <path d="M2.5 1.875H4.375V18.125H2.5V1.875ZM5.625 3.125V14.375H16.875V3.125H5.625Z" />
    </>
  ),
};

export const flagIcon: LoadedIconFunction = createIcon("flag", iconDefinition);
