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
      <path d="M10.9375 4.3375V6.25H11.875C13.0312 6.25 13.75 6.96875 13.75 8.125V17.5H6.25V8.125C6.25 6.96875 6.96875 6.25 8.125 6.25H9.0625V5H8.125C6.1375 5 5 6.1375 5 8.125V15.625H3.125V8.125C3.125 5.0875 5.0875 3.125 8.125 3.125H9.0625V1.875H14.375V3.125L10.9375 4.3375Z" />
    </>
  ),
};

export const fireExtinguisherIcon: LoadedIconFunction = createIcon(
  "fireExtinguisher",
  iconDefinition,
);
