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
      <path d="M17.5 15C17.5 15 16.25 16.875 12.5 16.875H9.6875L7.8125 15H6.875V16.875H3.75L2.725 12.7719C2.55938 12.1062 2.5 11.6375 2.5 10.9531C2.5 10.2687 2.55625 9.79999 2.725 9.13436L3.125 7.53124V3.12811H9.375V8.12811L14.375 12.5031L17.5 13.2844V15.0031V15Z" />
    </>
  ),
};

export const bootIcon: LoadedIconFunction = createIcon("boot", iconDefinition);
