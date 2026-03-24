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
      <path d="M18.125 9.375C18.125 6.675 16.45 5 13.75 5H1.875V6.875H3.75V9.375H1.875V11.25H3.125L2.5 15H3.75L4.16563 12.5H5.41563L5 15H17.5L16.875 11.25H18.125V9.375ZM5.625 6.875H13.75C15.2937 6.875 16.25 7.83125 16.25 9.375H5.625V6.875Z" />
    </>
  ),
};

export const scrubBrushIcon: LoadedIconFunction = createIcon(
  "scrubBrush",
  iconDefinition,
);
