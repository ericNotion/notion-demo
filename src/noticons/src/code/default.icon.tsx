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
      <path d="M5 5.625H6.875V6.25L3.125 10L6.875 13.75V14.375H5L0.625 10L5 5.625ZM15.625 5.625H13.75V6.25L17.5 10L13.75 13.75V14.375H15.625L20 10L15.625 5.625ZM7.1875 17.5H9.0625L12.8125 2.5H10.9375L7.1875 17.5Z" />
    </>
  ),
};

export const codeIcon: LoadedIconFunction = createIcon("code", iconDefinition);
