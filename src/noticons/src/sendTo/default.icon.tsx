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
      <path d="M18.125 9.375L11.875 15.625H10.625V12.5H7.5C5.57188 12.5 4.375 13.6969 4.375 15.625H2.5V11.25C2.5 8.16563 4.41563 6.25 7.5 6.25H10.625V3.125H11.875L18.125 9.375Z" />
    </>
  ),
};

export const sendToIcon: LoadedIconFunction = createIcon(
  "sendTo",
  iconDefinition,
);
