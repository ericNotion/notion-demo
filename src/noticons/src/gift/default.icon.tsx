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
      <path d="M14.375 5.625V1.875H12.5L10 4.375L7.5 1.875H5.625V5.625H2.5V10H3.75V17.5H16.25V10H17.5V5.625H14.375ZM11.25 15.625H8.75V7.5H11.25V15.625Z" />
    </>
  ),
};

export const giftIcon: LoadedIconFunction = createIcon("gift", iconDefinition);
