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
      <path d="M15.625 5.625H4.375V2.5H15.625V5.625ZM15.625 6.875H4.375L1.875 15.625C1.875 15.625 3.74062 17.5 10 17.5C16.2594 17.5 18.125 15.625 18.125 15.625L15.625 6.875Z" />
    </>
  ),
};

export const skirtIcon: LoadedIconFunction = createIcon(
  "skirt",
  iconDefinition,
);
