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
      <path d="M18.125 6.875V3.125C18.125 3.125 15.3656 4.375 10 4.375C4.63438 4.375 1.875 3.125 1.875 3.125V6.875H4.375L4.14062 8.75H2.5V10.625H3.90625L3.125 16.875H5.625L6.40625 10.625H13.5938L14.375 16.875H16.875L16.0938 10.625H17.5V8.75H15.8594L15.625 6.875H18.125ZM6.875 6.875H8.75V8.75H6.64062L6.875 6.875ZM13.3594 8.75H11.25V6.875H13.125L13.3594 8.75Z" />
    </>
  ),
};

export const toriiIcon: LoadedIconFunction = createIcon(
  "torii",
  iconDefinition,
);
