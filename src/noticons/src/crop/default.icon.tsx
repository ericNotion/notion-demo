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
      <path d="M18.125 12.5V15.625H15.625V18.125H12.5V15.625H4.375V7.5H1.875V4.375H4.375V1.875H7.5V12.5H18.125ZM12.5 11.25H15.625V4.375H8.75V7.5H12.5V11.25Z" />
    </>
  ),
};

export const cropIcon: LoadedIconFunction = createIcon("crop", iconDefinition);
