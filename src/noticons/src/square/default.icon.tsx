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
      <path d="M3.125 3.125V16.875H16.875V3.125H3.125ZM15 15H5V5H15V15Z" />
    </>
  ),
};

export const squareIcon: LoadedIconFunction = createIcon(
  "square",
  iconDefinition,
);
