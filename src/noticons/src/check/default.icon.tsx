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
      <path d="M1.25 5V15H18.75V5H1.25ZM3.125 6.875H8.125V8.125H3.125V6.875ZM10.625 10.625H3.125V9.375H10.625V10.625ZM16.875 13.125H11.875V11.875H16.875V13.125ZM16.875 8.75H13.75V6.875H16.875V8.75Z" />
    </>
  ),
};

export const checkIcon: LoadedIconFunction = createIcon(
  "check",
  iconDefinition,
);
