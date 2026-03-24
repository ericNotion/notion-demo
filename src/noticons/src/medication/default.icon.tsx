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
      <path d="M15 4.375H13.75V2.5H6.25V4.375H5V6.875H6.25V17.5H13.75V6.875H15V4.375ZM11.875 13.75H8.125V8.75H11.875V13.75Z" />
    </>
  ),
};

export const medicationIcon: LoadedIconFunction = createIcon(
  "medication",
  iconDefinition,
);
