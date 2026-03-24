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
      <path d="M11.25 3.75H12.5V14.375L8.75 16.25H7.5V5.625L11.25 3.75ZM1.25 3.75V14.375L5 16.25H6.25V5.625L2.5 3.75H1.25ZM15 3.75H13.75V14.375L17.5 16.25H18.75V5.625L15 3.75Z" />
    </>
  ),
};

export const mapIcon: LoadedIconFunction = createIcon("map", iconDefinition);
