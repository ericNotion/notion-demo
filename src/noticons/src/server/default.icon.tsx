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
      <path d="M3.125 16.875H16.875V13.125H3.125V16.875ZM4.375 14.375H8.125V15.625H4.375V14.375ZM3.125 3.125V6.875H16.875V3.125H3.125ZM8.125 5.625H4.375V4.375H8.125V5.625ZM3.125 11.875H16.875V8.125H3.125V11.875ZM4.375 9.375H8.125V10.625H4.375V9.375Z" />
    </>
  ),
};

export const serverIcon: LoadedIconFunction = createIcon(
  "server",
  iconDefinition,
);
