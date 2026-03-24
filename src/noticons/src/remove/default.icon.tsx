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
      <path d="M16.875 9.0625V10.9375H3.125V9.0625H16.875Z" />
    </>
  ),
};

export const removeIcon: LoadedIconFunction = createIcon(
  "remove",
  iconDefinition,
);
