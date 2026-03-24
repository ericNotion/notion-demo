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
      <path d="M9.375 9.375H16.25V17.5H3.75V2.5H9.375V9.375ZM11.875 2.5H10.625V8.125H16.25V6.875L11.875 2.5Z" />
    </>
  ),
};

export const documentIcon: LoadedIconFunction = createIcon(
  "document",
  iconDefinition,
);
