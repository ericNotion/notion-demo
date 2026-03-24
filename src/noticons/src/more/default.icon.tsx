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
      <path d="M17.5 10C17.5 11.0344 16.6594 11.875 15.625 11.875C14.5906 11.875 13.75 11.0344 13.75 10C13.75 8.96563 14.5906 8.125 15.625 8.125C16.6594 8.125 17.5 8.96563 17.5 10ZM4.375 8.125C3.34063 8.125 2.5 8.96563 2.5 10C2.5 11.0344 3.34063 11.875 4.375 11.875C5.40937 11.875 6.25 11.0344 6.25 10C6.25 8.96563 5.40937 8.125 4.375 8.125ZM10 8.125C8.96562 8.125 8.125 8.96563 8.125 10C8.125 11.0344 8.96562 11.875 10 11.875C11.0344 11.875 11.875 11.0344 11.875 10C11.875 8.96563 11.0344 8.125 10 8.125Z" />
    </>
  ),
};

export const moreIcon: LoadedIconFunction = createIcon("more", iconDefinition);
