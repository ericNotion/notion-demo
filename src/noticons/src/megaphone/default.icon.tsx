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
      <path d="M16.875 3.125V15.625H15.625L9.375 12.5H8.125L9.375 17.5H6.25L5 12.5C3.45625 12.5 2.5 11.5437 2.5 10V8.75C2.5 7.20625 3.45625 6.25 5 6.25H9.375L15.625 3.125H16.875Z" />
    </>
  ),
};

export const megaphoneIcon: LoadedIconFunction = createIcon(
  "megaphone",
  iconDefinition,
);
