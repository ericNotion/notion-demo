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
      <path d="M8.77812 6.125L6.50938 3.85625L7.1875 2.5H12.8125L14.0625 5H17.5V14.8469L13.875 11.2219C13.9969 10.8344 14.0625 10.425 14.0625 10C14.0625 7.75625 12.2437 5.9375 10 5.9375C9.575 5.9375 9.1625 6.00313 8.77812 6.125ZM2.75937 1.875L1.875 2.75937L17.2406 18.125L18.125 17.2406L2.75937 1.875ZM10 14.0625C7.75625 14.0625 5.9375 12.2437 5.9375 10C5.9375 9.575 6.00313 9.1625 6.125 8.77812L2.5 5.15312V16.25H13.5969L11.2219 13.875C10.8344 13.9969 10.425 14.0625 10 14.0625Z" />
    </>
  ),
};

export const cameraOffIcon: LoadedIconFunction = createIcon(
  "cameraOff",
  iconDefinition,
);
