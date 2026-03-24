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
      <path d="M4.375 4.375H6.875V15.625H4.375V4.375ZM8.125 15.625H9.375V4.375H8.125V15.625ZM1.875 15.625H3.125V4.375H1.875V15.625ZM10.625 15.625H13.125V4.375H10.625V15.625ZM16.875 4.375V15.625H18.125V4.375H16.875ZM14.375 15.625H15.625V4.375H14.375V15.625Z" />
    </>
  ),
};

export const barcodeIcon: LoadedIconFunction = createIcon(
  "barcode",
  iconDefinition,
);
