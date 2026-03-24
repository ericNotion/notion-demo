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
      <path d="M18.75 11.875L17.5 10.2094V8.75C17.5 4.89375 14.6281 2.5 10 2.5C5.37187 2.5 2.5 4.89375 2.5 8.75C2.5 12.2031 4.60938 15 8.75 15H10.625V13.125H11.875L12.5562 15.1656C12.9375 16.3062 13.725 16.875 14.9281 16.875H17.5V13.125L18.75 11.875ZM14.375 11.875C13.6031 11.875 13.125 11.2781 13.125 10.3125C13.125 9.34688 13.6031 8.75 14.375 8.75C15.1469 8.75 15.625 9.34688 15.625 10.3125C15.625 11.2781 15.1469 11.875 14.375 11.875Z" />
    </>
  ),
};

export const skullProfileIcon: LoadedIconFunction = createIcon(
  "skullProfile",
  iconDefinition,
);
