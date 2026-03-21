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
      <path d="M5.3125 1.875V7.5H6.25L8.125 6.5625V5.625C8.125 4.54375 9.00938 3.74687 10 3.74687C11.0813 3.74687 11.8781 4.63125 11.8781 5.62187C11.8781 6.30937 11.4969 6.97188 10.8406 7.3L5.31563 10.0625V18.1219H14.6906V1.875H5.31563H5.3125ZM10 16.5625C8.775 16.5625 7.7375 15.7781 7.35 14.6875H12.6469C12.2594 15.7781 11.2219 16.5625 9.99687 16.5625H10ZM7.35 12.8125C7.7375 11.7219 8.775 10.9375 10 10.9375C11.225 10.9375 12.2625 11.7219 12.65 12.8125H7.35313H7.35Z" />
    </>
  ),
};

export const doNotDisturbIcon: LoadedIconFunction = createIcon(
  "doNotDisturb",
  iconDefinition,
);
