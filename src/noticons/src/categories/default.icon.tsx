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
      <path d="M14.375 4.375H5.625V2.5H14.375V4.375ZM3.125 8.75V17.5H16.875V8.75H3.125ZM15.625 5.625H4.375V7.5H15.625V5.625Z" />
    </>
  ),
};

export const categoriesIcon: LoadedIconFunction = createIcon(
  "categories",
  iconDefinition,
);
