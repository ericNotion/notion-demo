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
      <path d="M14.375 7.5H5.625V1.875H14.375V7.5ZM18.125 11.25V17.5H1.875V11.25C1.875 9.70625 2.83125 8.75 4.375 8.75H15.625C17.1687 8.75 18.125 9.70625 18.125 11.25ZM15.625 15.625L14.375 11.875H5.625L4.375 15.625H15.625Z" />
    </>
  ),
};

export const printIcon: LoadedIconFunction = createIcon(
  "print",
  iconDefinition,
);
