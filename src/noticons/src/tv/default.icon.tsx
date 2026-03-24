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
      <path d="M18.125 4.375V14.375H1.875V4.375H18.125ZM5.625 16.875H14.375V15.625H5.625V16.875Z" />
    </>
  ),
};

export const tvIcon: LoadedIconFunction = createIcon("tv", iconDefinition);
