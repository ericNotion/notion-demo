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
      <path d="M16.875 11.8062V16.875H3.125V11.8062C3.125 10.9375 3.26562 10.3469 3.65312 9.56875L5 6.875H15L16.3469 9.56875C16.7344 10.3438 16.875 10.9375 16.875 11.8062ZM15 3.125H5V5.625H15V3.125Z" />
    </>
  ),
};

export const jarIcon: LoadedIconFunction = createIcon("jar", iconDefinition);
