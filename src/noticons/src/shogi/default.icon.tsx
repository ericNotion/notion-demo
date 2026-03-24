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
      <path d="M15.6594 5.32812L10 2.5L4.34063 5.32812L3.125 17.5H16.875L15.6594 5.32812ZM13.75 15H6.25V13.75H9.375V11.875H7.1875V10.625H9.375V8.75H6.875V7.5H13.125V8.75H10.625V10.625H12.8125V11.875H10.625V13.75H13.75V15Z" />
    </>
  ),
};

export const shogiIcon: LoadedIconFunction = createIcon(
  "shogi",
  iconDefinition,
);
