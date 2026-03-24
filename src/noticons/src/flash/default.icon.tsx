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
      <path d="M16.25 8.125V10L11.25 17.5H9.375V11.875H3.75V10L8.75 2.5H10.625V8.125H16.25Z" />
    </>
  ),
};

export const flashIcon: LoadedIconFunction = createIcon(
  "flash",
  iconDefinition,
);
