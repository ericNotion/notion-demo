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
      <path d="M13.75 6.25V1.875H11.875V6.875H8.125V1.875H6.25V6.25C6.25 7.79375 5.29375 8.75 3.75 8.75V18.125H16.25V8.75C14.7063 8.75 13.75 7.79375 13.75 6.25ZM13.125 14.6875L10 16.25L6.875 14.6875V11.25H13.125V14.6875Z" />
    </>
  ),
};

export const apronIcon: LoadedIconFunction = createIcon(
  "apron",
  iconDefinition,
);
