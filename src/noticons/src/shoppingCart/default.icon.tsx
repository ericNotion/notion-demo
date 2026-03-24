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
      <path d="M6.94062 13.125H17.5V15H15.625V16.25C15.625 16.9406 15.0656 17.5 14.375 17.5C13.6844 17.5 13.125 16.9406 13.125 16.25V15H9.375V16.25C9.375 16.9406 8.81563 17.5 8.125 17.5C7.43437 17.5 6.875 16.9406 6.875 16.25V15H5.35L3.58125 4.375H0.625V2.5H5.16875L5.48125 4.375H18.125L16.5625 10.625L6.70625 11.7188L6.94062 13.125Z" />
    </>
  ),
};

export const shoppingCartIcon: LoadedIconFunction = createIcon(
  "shoppingCart",
  iconDefinition,
);
