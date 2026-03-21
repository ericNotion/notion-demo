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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 15.625C6.89375 15.625 4.375 13.1062 4.375 10C4.375 8.78438 4.7625 7.6625 5.41875 6.74375L13.2562 14.5813C12.3375 15.2344 11.2156 15.625 10 15.625ZM14.5813 13.2562L6.74375 5.41875C7.6625 4.76562 8.78438 4.375 10 4.375C13.1062 4.375 15.625 6.89375 15.625 10C15.625 11.2156 15.2375 12.3375 14.5813 13.2562Z" />
    </>
  ),
};

export const noIcon: LoadedIconFunction = createIcon("no", iconDefinition);
