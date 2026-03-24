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
      <path d="M13.75 6.25H6.25V3.75H8.125C8.125 2.71563 8.96562 1.875 10 1.875C11.0344 1.875 11.875 2.71563 11.875 3.75H13.75V6.25ZM15 5V7.5H5V5H3.125V16.875H16.875V5H15Z" />
    </>
  ),
};

export const pasteIcon: LoadedIconFunction = createIcon(
  "paste",
  iconDefinition,
);
