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
      <path d="M2.5 4.375V15.625H17.5V4.375H2.5ZM4.375 6.25H8.75V7.5H4.375V6.25ZM7.5 12.5H4.375V11.25H7.5V12.5ZM10 10H4.375V8.75H10V10ZM15.625 10H12.5V6.25H15.625V10Z" />
    </>
  ),
};

export const postcardIcon: LoadedIconFunction = createIcon(
  "postcard",
  iconDefinition,
);
