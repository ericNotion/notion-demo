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
      <path d="M18.125 9.375H13.9813C13.4063 10.5625 12.225 11.25 10.625 11.25H8.125L9.375 16.25H6.25L4.99063 11.2063C3.05313 10.9625 1.875 9.59062 1.875 7.5C1.875 5.1875 3.3125 3.75 5.625 3.75H10.625C12.225 3.75 13.4031 4.4375 13.9813 5.625H18.125V9.375Z" />
    </>
  ),
};

export const hairdryerIcon: LoadedIconFunction = createIcon(
  "hairdryer",
  iconDefinition,
);
