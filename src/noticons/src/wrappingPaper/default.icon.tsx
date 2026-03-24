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
      <path d="M15 11.25H15.625C17.0063 11.25 18.125 9.85 18.125 8.125C18.125 6.4 17.0063 5 15.625 5H3.75C2.36875 5 1.25 6.4 1.25 8.125C1.25 9.125 1.64687 10.0844 2.35625 10.7938L7.8125 16.25H20L15 11.25ZM3.75 9.375C3.23125 9.375 2.8125 8.81562 2.8125 8.125C2.8125 7.43438 3.23125 6.875 3.75 6.875C4.26875 6.875 4.6875 7.43438 4.6875 8.125C4.6875 8.81562 4.26875 9.375 3.75 9.375Z" />
    </>
  ),
};

export const wrappingPaperIcon: LoadedIconFunction = createIcon(
  "wrappingPaper",
  iconDefinition,
);
