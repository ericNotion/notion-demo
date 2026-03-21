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
      <path d="M12.5 9.84688L8.98125 6.32812L11.25 4.05937H12.5V9.84375V9.84688ZM2.75937 1.875L1.875 2.75937L17.2406 18.125L18.125 17.2406L2.75937 1.875ZM5 12.5H7.8125L11.25 15.9375H12.5V15.1531L5 7.65312V12.5Z" />
    </>
  ),
};

export const volumeOffIcon: LoadedIconFunction = createIcon(
  "volumeOff",
  iconDefinition,
);
