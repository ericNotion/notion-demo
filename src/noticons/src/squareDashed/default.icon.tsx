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
      <path d="M3.125 3.125H9.375V5H5V9.375H3.125V3.125ZM5 10.625H3.125V16.875H9.375V15H5V10.625ZM10.625 3.125V5H15V9.375H16.875V3.125H10.625ZM15 15H10.625V16.875H16.875V10.625H15V15Z" />
    </>
  ),
};

export const squareDashedIcon: LoadedIconFunction = createIcon(
  "squareDashed",
  iconDefinition,
);
