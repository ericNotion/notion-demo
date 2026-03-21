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
      <path d="M5.625 15.625H14.375V16.875H5.625V15.625ZM18.125 4.375V14.375H1.875V4.375H18.125ZM13.75 8.90625L8.4375 6.25H7.5V12.5H8.4375L13.75 9.84375V8.90625Z" />
    </>
  ),
};

export const previewIcon: LoadedIconFunction = createIcon(
  "preview",
  iconDefinition,
);
