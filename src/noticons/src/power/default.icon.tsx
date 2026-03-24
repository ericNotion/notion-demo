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
      <path d="M10.9375 10.625H9.0625V1.875H10.9375V10.625ZM15.3031 4.69687L13.9781 6.02188C15.0406 7.08438 15.625 8.49687 15.625 10C15.625 13.1031 13.1 15.625 10 15.625C6.9 15.625 4.375 13.1031 4.375 10C4.375 8.49687 4.95938 7.08438 6.02188 6.02188L4.69687 4.69687C3.28125 6.1125 2.5 7.99687 2.5 10C2.5 14.1344 5.86563 17.5 10 17.5C14.1344 17.5 17.5 14.1344 17.5 10C17.5 7.99687 16.7188 6.1125 15.3031 4.69687Z" />
    </>
  ),
};

export const powerIcon: LoadedIconFunction = createIcon(
  "power",
  iconDefinition,
);
