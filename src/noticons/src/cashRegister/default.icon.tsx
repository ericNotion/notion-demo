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
      <path d="M2.5 15H17.5V17.5H2.5V15ZM17.5 10V13.75H2.5V10L5 7.5V3.75H8.75V1.875H13.75V3.75H15V7.5L17.5 10ZM13.125 5.625H9.375V7.5H13.125V5.625Z" />
    </>
  ),
};

export const cashRegisterIcon: LoadedIconFunction = createIcon(
  "cashRegister",
  iconDefinition,
);
