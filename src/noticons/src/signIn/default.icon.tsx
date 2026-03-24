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
      <path d="M10.075 10L6.0125 14.0625L4.6875 12.7375L6.4875 10.9375H1.25V9.0625H6.4875L4.6875 7.2625L6.0125 5.9375L10.075 10ZM7.5 2.5V6.25H9.375V4.375H15V15.625H9.375V13.75H7.5V17.5H16.875V2.5H7.5Z" />
    </>
  ),
};

export const signInIcon: LoadedIconFunction = createIcon(
  "signIn",
  iconDefinition,
);
