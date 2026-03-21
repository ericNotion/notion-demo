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
      <path d="M2.5 15H17.5V16.875H2.5V15ZM13.9031 10.625C14.5969 9.7625 15 8.66875 15 7.5C15 4.74375 12.7563 2.5 10 2.5C7.24375 2.5 5 4.74375 5 7.5C5 8.66875 5.40313 9.7625 6.09688 10.625H2.5V12.5H8.75V10.3625C7.61875 9.86875 6.875 8.75625 6.875 7.5C6.875 5.77812 8.27812 4.375 10 4.375C11.7219 4.375 13.125 5.77812 13.125 7.5C13.125 8.75625 12.3813 9.86875 11.25 10.3625V12.5H17.5V10.625H13.9031Z" />
    </>
  ),
};

export const libraIcon: LoadedIconFunction = createIcon(
  "libra",
  iconDefinition,
);
