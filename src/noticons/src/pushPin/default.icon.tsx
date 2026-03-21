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
      <path d="M15 13.1249H10.9375V16.2499L10.3125 18.7499H9.6875L9.0625 16.2499V13.1249H5V11.6593C5 10.9187 5.20938 10.4155 5.73125 9.89053L7.5 8.12178V5.62178L6.35625 4.47803C5.83125 3.95303 5.625 3.4499 5.625 2.70928V2.49365H14.375V2.70928C14.375 3.4499 14.1656 3.95303 13.6438 4.47803L12.5 5.62178V8.12178L14.2688 9.89053C14.7937 10.4155 15 10.9187 15 11.6593V13.1249Z" />
    </>
  ),
};

export const pushPinIcon: LoadedIconFunction = createIcon(
  "pushPin",
  iconDefinition,
);
