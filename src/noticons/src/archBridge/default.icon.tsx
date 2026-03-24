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
      <path d="M1.25 5V16.25H3.3875C4.20312 13.3656 6.85625 11.25 10 11.25C13.1438 11.25 15.7969 13.3656 16.6125 16.25H18.75V5H1.25ZM3.125 12.7188V6.875H6.25V10.2281C5.03437 10.8094 3.9625 11.6594 3.125 12.7188ZM8.125 9.58125V6.875H11.875V9.58125C11.2688 9.44688 10.6406 9.375 10 9.375C9.35938 9.375 8.73125 9.44688 8.125 9.58125ZM16.875 12.7188C16.0375 11.6594 14.9656 10.8063 13.75 10.2281V6.875H16.875V12.7188Z" />
    </>
  ),
};

export const archBridgeIcon: LoadedIconFunction = createIcon(
  "archBridge",
  iconDefinition,
);
