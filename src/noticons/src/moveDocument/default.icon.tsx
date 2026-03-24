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
      <path d="M9.375 9.375H16.25V17.5H3.75V13.4375H7.86562L6.25 15.0531L7.13438 15.9375L10.2594 12.8125L7.13438 9.6875L6.25 10.5719L7.86562 12.1875H3.75V2.5H9.375V9.375ZM11.875 2.5H10.625V8.125H16.25V6.875L11.875 2.5Z" />
    </>
  ),
};

export const moveDocumentIcon: LoadedIconFunction = createIcon(
  "moveDocument",
  iconDefinition,
);
