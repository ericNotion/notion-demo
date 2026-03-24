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
      <path d="M15.625 10.625V8.2L11.325 12.5L8.35312 9.52812L4.375 13.5063V15.0031H17.5V16.8781H2.5V3.125H4.375V10.8531L8.35312 6.875L11.325 9.84688L14.2969 6.875H11.8719V5H17.4969V10.625H15.6219H15.625Z" />
    </>
  ),
};

export const chartLineIcon: LoadedIconFunction = createIcon(
  "chartLine",
  iconDefinition,
);
