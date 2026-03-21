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
      <path d="M3.75 6.25H12.5V17.5H3.75V6.25ZM8.125 1.875V5H13.75V13.125H16.875V1.875H8.125Z" />
    </>
  ),
};

export const cameraRollPortraitIcon: LoadedIconFunction = createIcon(
  "cameraRollPortrait",
  iconDefinition,
);
