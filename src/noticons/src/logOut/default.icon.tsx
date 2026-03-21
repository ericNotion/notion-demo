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
      <path d="M19.45 10L15.3875 14.0625L14.0625 12.7375L15.8625 10.9375H10.625V9.0625H15.8625L14.0625 7.2625L15.3875 5.9375L19.45 10ZM10.625 15H8.125V5H10.625V6.25H12.5V3.125H8.125V1.875H6.875L1.875 3.125V16.875L6.875 18.125H8.125V16.875H12.5V13.75H10.625V15Z" />
    </>
  ),
};

export const logOutIcon: LoadedIconFunction = createIcon(
  "logOut",
  iconDefinition,
);
