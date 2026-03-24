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
      <path d="M17.8125 10.625V8.75H15.9375V6.875H14.0625V5.625H15.9375V3.125H13.4375V5H11.5625V6.875H8.4375V5H6.5625V3.125H4.0625V5.625H5.9375V6.875H4.0625V8.75H2.1875V10.625H0.3125V15H2.8125V11.25H4.0625V15H5.9375V16.875H8.4375V14.375H6.5625V13.125H13.4375V14.375H11.5625V16.875H14.0625V15H15.9375V11.25H17.1875V15H19.6875V10.625H17.8125ZM8.125 10.9375H6.25V9.0625H8.125V10.9375ZM13.75 10.9375H11.875V9.0625H13.75V10.9375Z" />
    </>
  ),
};

export const alienPixelIcon: LoadedIconFunction = createIcon(
  "alienPixel",
  iconDefinition,
);
