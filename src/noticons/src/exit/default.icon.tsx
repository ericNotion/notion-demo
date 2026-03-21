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
      <path d="M8.125 2.73749V17.2656C4.89062 16.4344 2.5 13.4969 2.5 10.0031C2.5 6.50936 4.89062 3.56874 8.125 2.73749ZM11.875 2.73749V17.2656C15.1094 16.4344 17.5 13.4969 17.5 10.0031C17.5 6.50936 15.1094 3.57186 11.875 2.74061V2.73749Z" />
    </>
  ),
};

export const exitIcon: LoadedIconFunction = createIcon("exit", iconDefinition);
