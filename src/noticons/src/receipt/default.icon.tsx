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
      <path d="M14.375 2.5L13.125 3.75L11.875 2.5H11.25L10 3.75L8.75 2.5H8.125L6.875 3.75L5.625 2.5H4.6875V17.5H5.625L6.875 16.25L8.125 17.5H8.75L10 16.25L11.25 17.5H11.875L13.125 16.25L14.375 17.5H15.3125V2.5H14.375ZM9.0625 13.125H6.5625V11.875H9.0625V13.125ZM10.3125 10.625H6.5625V9.375H10.3125V10.625ZM8.125 6.875V5.625H11.875V6.875H8.125ZM13.4375 13.125H11.5625V11.875H13.4375V13.125ZM13.4375 10.625H11.5625V9.375H13.4375V10.625Z" />
    </>
  ),
};

export const receiptIcon: LoadedIconFunction = createIcon(
  "receipt",
  iconDefinition,
);
