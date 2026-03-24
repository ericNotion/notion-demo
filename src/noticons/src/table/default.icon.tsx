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
      <path d="M2.5 3.125V16.875H17.5V3.125H2.5ZM9.0625 15H4.375V12.5H9.0625V15ZM9.0625 10.625H4.375V8.125H9.0625V10.625ZM15.625 15H10.9375V12.5H15.625V15ZM15.625 10.625H10.9375V8.125H15.625V10.625Z" />
    </>
  ),
};

export const tableIcon: LoadedIconFunction = createIcon(
  "table",
  iconDefinition,
);
