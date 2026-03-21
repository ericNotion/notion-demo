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
      <path d="M15 13.125C15 15.8875 12.7625 18.125 10 18.125C7.2375 18.125 5 15.8875 5 13.125C5 11.5469 5.73438 10.1406 6.875 9.225V7.5C6.875 5.98125 7.95937 4.71562 9.39687 4.43437C9.775 2.49062 10.625 1.25 10.625 1.25L12.5 2.1875C12.5 2.1875 11.6625 3.07187 11.0812 4.57188C12.275 5.0125 13.125 6.15625 13.125 7.5V9.225C14.2656 10.1406 15 11.5469 15 13.125Z" />
    </>
  ),
};

export const pearIcon: LoadedIconFunction = createIcon("pear", iconDefinition);
