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
      <path d="M17.5 3.75V6.875L10 10.625L2.5 6.875V3.75H17.5ZM2.5 8.27187V16.25H17.5V8.27187L10 12.0219L2.5 8.27187Z" />
    </>
  ),
};

export const mailIcon: LoadedIconFunction = createIcon("mail", iconDefinition);
