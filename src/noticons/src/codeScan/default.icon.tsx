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
      <path d="M3.125 16.875H9.375V10.625H3.125V16.875ZM5 12.5H7.5V15H5V12.5ZM14.375 10.625H16.875V13.125H15V14.375H16.875V16.875H14.375V15H13.125V16.875H10.625V14.375H12.5V13.125H10.625V10.625H13.125V12.5H14.375V10.625ZM10.625 3.125V9.375H16.875V3.125H10.625ZM15 7.5H12.5V5H15V7.5ZM3.125 9.375H9.375V3.125H3.125V9.375ZM5 5H7.5V7.5H5V5Z" />
    </>
  ),
};

export const codeScanIcon: LoadedIconFunction = createIcon(
  "codeScan",
  iconDefinition,
);
