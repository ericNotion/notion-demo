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
      <path d="M17.5 9.375V12.5H16.25V16.25C16.25 17.7469 15.2469 18.75 13.75 18.75H8.75V16.25H11.25V17.5H13.75C14.5562 17.5 15 17.0562 15 16.25V15H12.5V10H15.625V9.375C15.625 5.90313 13.4719 3.75 10 3.75C6.52813 3.75 4.375 5.90313 4.375 9.375V10H7.5V15H3.75V12.5H2.5V9.375C2.5 4.74687 5.37187 1.875 10 1.875C14.6281 1.875 17.5 4.74687 17.5 9.375Z" />
    </>
  ),
};

export const headsetIcon: LoadedIconFunction = createIcon(
  "headset",
  iconDefinition,
);
