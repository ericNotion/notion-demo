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
      <path d="M3.125 13.125H16.875V16.875H3.125V13.125ZM3.125 3.125V6.875H16.875V3.125H3.125ZM3.125 11.875H16.875V8.125H3.125V11.875Z" />
    </>
  ),
};

export const rowIcon: LoadedIconFunction = createIcon("row", iconDefinition);
