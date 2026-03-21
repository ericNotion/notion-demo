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
      <path d="M15.7 2.5L14.375 3.825L15.8469 5.29688C15.7063 5.60938 15.625 5.95937 15.625 6.325C15.625 7.49062 16.4219 8.46562 17.5 8.74375V12.1875C17.5 12.8281 17.2031 13.125 16.5625 13.125C15.9219 13.125 15.625 12.8281 15.625 12.1875V10.9375C15.625 9.25625 14.4937 8.125 12.8125 8.125H11.875V2.5H3.125V15H1.25V16.875H13.75V15H11.875V10H12.8125C13.4531 10 13.75 10.2969 13.75 10.9375V12.1875C13.75 13.8687 14.8813 15 16.5625 15C18.2437 15 19.375 13.8687 19.375 12.1875V6.175L15.7 2.5ZM5 4.375H10V8.125H5V4.375Z" />
    </>
  ),
};

export const fuelIcon: LoadedIconFunction = createIcon("fuel", iconDefinition);
