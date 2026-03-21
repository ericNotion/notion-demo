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
      <path d="M15.9375 11.25C15.9375 14.7156 13.4656 17.5 10 17.5C6.53437 17.5 4.0625 14.7156 4.0625 11.25C4.0625 7.5875 6.3375 2.5 10 2.5C13.6625 2.5 15.9375 7.5875 15.9375 11.25Z" />
    </>
  ),
};

export const eggIcon: LoadedIconFunction = createIcon("egg", iconDefinition);
