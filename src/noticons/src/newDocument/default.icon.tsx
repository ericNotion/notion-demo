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
      <path d="M9.375 2.5H3.75V17.5H16.25V9.375H9.375V2.5ZM10.625 10.625V12.8125H12.8125V14.0625H10.625V16.25H9.375V14.0625H7.1875V12.8125H9.375V10.625H10.625ZM16.25 6.875V8.125H10.625V2.5H11.875L16.25 6.875Z" />
    </>
  ),
};

export const newDocumentIcon: LoadedIconFunction = createIcon(
  "newDocument",
  iconDefinition,
);
