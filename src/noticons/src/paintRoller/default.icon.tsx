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
      <path d="M9.6875 12.3344V13.125H10.625V18.125H6.875V13.125H7.8125V10.8687L15.625 8.91563V6.25H14.375V8.125H3.125V2.5H14.375V4.375H17.5V10.3813L9.6875 12.3344Z" />
    </>
  ),
};

export const paintRollerIcon: LoadedIconFunction = createIcon(
  "paintRoller",
  iconDefinition,
);
