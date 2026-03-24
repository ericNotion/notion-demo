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
      <path d="M15 8.125H16.875V15H3.125V8.125H5V10.625C6.54375 10.625 7.5 11.5813 7.5 13.125H12.5C12.5 11.5813 13.4563 10.625 15 10.625V8.125ZM12.1875 9.375V8.125H7.8125V9.375C7.8125 10.9187 8.65 11.875 10 11.875C11.35 11.875 12.1875 10.9187 12.1875 9.375ZM0 5V12.5H1.875V6.875H18.125V12.5H20V5H0Z" />
    </>
  ),
};

export const atmIcon: LoadedIconFunction = createIcon("atm", iconDefinition);
