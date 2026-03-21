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
      <path d="M2.5 3.125V16.875H17.5V3.125H2.5ZM9.375 7.5H13.125V8.75H9.375V7.5ZM4.375 5H8.125V8.75H4.375V5ZM15.625 15H4.375V10.625H15.625V15ZM15.625 6.25H9.375V5H15.625V6.25Z" />
    </>
  ),
};

export const feedIcon: LoadedIconFunction = createIcon("feed", iconDefinition);
