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
      <path d="M15 4.375H5C3.45625 4.375 2.5 5.33125 2.5 6.875V13.125C2.5 14.6687 3.45625 15.625 5 15.625H15C16.5437 15.625 17.5 14.6687 17.5 13.125V6.875C17.5 5.33125 16.5437 4.375 15 4.375ZM4.375 7.5H7.5V9.375H4.375V7.5ZM6.25 12.5H4.375V11.25H6.25V12.5ZM9.375 12.5H7.5V11.25H9.375V12.5ZM12.5 12.5H10.625V11.25H12.5V12.5ZM15.625 12.5H13.75V11.25H15.625V12.5Z" />
    </>
  ),
};

export const creditCardIcon: LoadedIconFunction = createIcon(
  "creditCard",
  iconDefinition,
);
