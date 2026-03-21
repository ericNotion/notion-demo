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
      <path d="M18.125 8.28125H12.5V10H10.9375V15L10.3125 17.5H9.6875L9.0625 15V10H7.5V8.28125H1.875V6.25C1.875 6.25 4.51875 3.75 10 3.75C15.4813 3.75 18.125 6.25 18.125 6.25V8.28125Z" />
    </>
  ),
};

export const pinIcon: LoadedIconFunction = createIcon("pin", iconDefinition);
