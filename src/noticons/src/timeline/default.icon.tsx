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
      <path d="M13.125 6.875H5.625V3.125H13.125V6.875ZM15.625 8.125H1.875V11.875H15.625V8.125ZM9.375 13.125V16.875H18.125V13.125H9.375Z" />
    </>
  ),
};

export const timelineIcon: LoadedIconFunction = createIcon(
  "timeline",
  iconDefinition,
);
