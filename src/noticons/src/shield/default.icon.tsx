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
      <path d="M16.25 4.375V11.9094C16.25 14.025 15.3781 15.4344 13.4875 16.3812L10 18.125L6.5125 16.3812C4.61875 15.4344 3.75 14.025 3.75 11.9094V4.375H5.675C6.77813 4.375 7.53125 4.14688 8.45 3.53438L10.0031 2.5L11.5562 3.53438C12.475 4.14688 13.2281 4.375 14.3313 4.375H16.2563H16.25Z" />
    </>
  ),
};

export const shieldIcon: LoadedIconFunction = createIcon(
  "shield",
  iconDefinition,
);
