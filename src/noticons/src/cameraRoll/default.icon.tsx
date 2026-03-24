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
      <path d="M2.5 7.5H13.75V16.25H2.5V7.5ZM6.875 3.125V6.25H15V11.875H18.125V3.125H6.875Z" />
    </>
  ),
};

export const cameraRollIcon: LoadedIconFunction = createIcon(
  "cameraRoll",
  iconDefinition,
);
