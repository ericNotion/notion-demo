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
      <path d="M4.375 14.375H15.625V16.875H4.375V14.375ZM0.625 6.25H3.125V4.375H0.625V6.25ZM4.375 13.125H15.625V3.125H4.375V13.125ZM16.875 4.375V6.25H19.375V4.375H16.875Z" />
    </>
  ),
};

export const towelIcon: LoadedIconFunction = createIcon(
  "towel",
  iconDefinition,
);
