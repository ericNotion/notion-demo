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
      <path d="M14.375 12.5V13.8594C15.1031 14.1156 15.625 14.8094 15.625 15.625C15.625 16.6594 14.7844 17.5 13.75 17.5C12.7156 17.5 11.875 16.6594 11.875 15.625C11.875 14.8094 12.3969 14.1156 13.125 13.8594V12.5H5.625V13.8594C6.35313 14.1156 6.875 14.8094 6.875 15.625C6.875 16.6594 6.03437 17.5 5 17.5C3.96563 17.5 3.125 16.6594 3.125 15.625C3.125 14.8094 3.64688 14.1156 4.375 13.8594V12.5H2.5V7.5C2.5 4.41563 4.41563 2.5 7.5 2.5H12.5V3.75L10.625 7.5H14.925L17.425 5L18.75 6.325L16.25 8.825V12.5H14.375Z" />
    </>
  ),
};

export const pramIcon: LoadedIconFunction = createIcon("pram", iconDefinition);
