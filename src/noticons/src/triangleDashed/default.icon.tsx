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
      <path d="M4.40626 15H9.37501V16.875H2.24064C2.00001 16.4594 1.94064 16.3531 1.70001 15.9375L5.26564 9.75937L6.89064 10.6969L4.40626 15ZM14.7313 9.75937L13.1063 10.6969L15.5906 15H10.6219V16.875H17.7563C17.9969 16.4594 18.0563 16.3531 18.2969 15.9375L14.7313 9.75937ZM14.1063 8.67813L10.5406 2.5H9.45939L5.89376 8.67813L7.51876 9.61563L10.0031 5.3125L12.4875 9.61563L14.1125 8.67813H14.1063Z" />
    </>
  ),
};

export const triangleDashedIcon: LoadedIconFunction = createIcon(
  "triangleDashed",
  iconDefinition,
);
