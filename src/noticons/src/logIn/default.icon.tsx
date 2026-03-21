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
      <path d="M18.125 3.125V16.875L13.125 18.125H11.875V16.875H7.5V13.75H9.375V15H11.875V5H9.375V6.25H7.5V3.125H11.875V1.875H13.125L18.125 3.125ZM6.0125 5.9375L4.6875 7.2625L6.4875 9.0625H1.25V10.9375H6.4875L4.6875 12.7375L6.0125 14.0625L10.075 10L6.0125 5.9375Z" />
    </>
  ),
};

export const logInIcon: LoadedIconFunction = createIcon(
  "logIn",
  iconDefinition,
);
