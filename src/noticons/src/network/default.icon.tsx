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
      <path d="M15 10.625V11.875H16.875V17.5H11.25V11.875H13.125V10.625H6.875V11.875H8.75V17.5H3.125V11.875H5V10.625H1.875V8.75H9.0625V7.5H7.1875V1.875H12.8125V7.5H10.9375V8.75H18.125V10.625H15Z" />
    </>
  ),
};

export const networkIcon: LoadedIconFunction = createIcon(
  "network",
  iconDefinition,
);
