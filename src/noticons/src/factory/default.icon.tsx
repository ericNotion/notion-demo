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
      <path d="M16.875 4.375L13.125 8.125V4.375H11.875L8.125 8.125V2.5H5V8.125H1.875V16.875H5V12.5H8.125V16.875H18.125V4.375H16.875ZM15 15H11.25V12.5H15V15Z" />
    </>
  ),
};

export const factoryIcon: LoadedIconFunction = createIcon(
  "factory",
  iconDefinition,
);
