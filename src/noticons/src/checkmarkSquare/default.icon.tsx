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
      <path d="M3.125 3.125V16.875H16.875V3.125H3.125ZM9.0625 13.825L5.625 10.3875L6.95 9.0625L9.0625 11.175L13.3625 6.875L14.6875 8.2L9.0625 13.825Z" />
    </>
  ),
};

export const checkmarkSquareIcon: LoadedIconFunction = createIcon(
  "checkmarkSquare",
  iconDefinition,
);
