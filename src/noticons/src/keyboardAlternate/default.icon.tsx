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
      <path d="M7.5 7.5H5V5H7.5V7.5ZM11.25 5H8.75V7.5H11.25V5ZM14.375 11.25H16.875V8.75H14.375V11.25ZM15 5H12.5V7.5H15V5ZM10.625 11.25H13.125V8.75H10.625V11.25ZM6.875 11.25H9.375V8.75H6.875V11.25ZM16.25 15H18.75V12.5H16.25V15ZM16.25 5V7.5H18.75V5H16.25ZM5 15H15V12.5H5V15ZM3.125 11.25H5.625V8.75H3.125V11.25ZM1.25 15H3.75V12.5H1.25V15ZM3.76562 5H1.26563V7.5H3.76562V5Z" />
    </>
  ),
};

export const keyboardAlternateIcon: LoadedIconFunction = createIcon(
  "keyboardAlternate",
  iconDefinition,
);
