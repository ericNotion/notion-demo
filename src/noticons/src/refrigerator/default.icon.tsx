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
      <path d="M5 18.75H15V8.75H5V18.75ZM11.875 10.625H13.125V13.125H11.875V10.625ZM5 1.25V7.5H15V1.25H5ZM13.125 5.625H11.875V3.125H13.125V5.625Z" />
    </>
  ),
};

export const refrigeratorIcon: LoadedIconFunction = createIcon(
  "refrigerator",
  iconDefinition,
);
