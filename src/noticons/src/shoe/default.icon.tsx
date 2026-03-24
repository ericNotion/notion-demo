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
      <path d="M18.75 9.375V11.25C18.75 11.25 17.0844 13.75 12.0844 13.75H1.25V12.1719C1.25 11.4875 1.30625 11.0188 1.475 10.3531L2.5 6.25H3.75C3.75 6.25 4.1 8.125 6.25 8.125C8.4 8.125 8.75 6.25 8.75 6.25H10L16.25 9.375H18.75Z" />
    </>
  ),
};

export const shoeIcon: LoadedIconFunction = createIcon("shoe", iconDefinition);
