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
      <path d="M10.9375 2.5V17.5H9.0625V9.98438H7.1875V9.35938C7.1875 4.3 8.57812 2.5 10.9375 2.5Z" />
    </>
  ),
};

export const knifeIcon: LoadedIconFunction = createIcon(
  "knife",
  iconDefinition,
);
