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
      <path d="M19.375 14.375H17.5V16.25H15.625V14.375H4.375V16.25H2.5V14.375H0.625V6.875H2.5V10.625H17.5V6.875H19.375V14.375ZM9.375 3.75H3.75V9.375H9.375V3.75ZM16.25 3.75H10.625V9.375H16.25V3.75Z" />
    </>
  ),
};

export const couchIcon: LoadedIconFunction = createIcon(
  "couch",
  iconDefinition,
);
