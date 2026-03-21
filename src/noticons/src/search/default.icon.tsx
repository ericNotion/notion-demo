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
      <path d="M13.9625 12.1938C14.6156 11.2063 15 10.0219 15 8.75C15 5.29688 12.2031 2.5 8.75 2.5C5.29688 2.5 2.5 5.29688 2.5 8.75C2.5 12.2031 5.29688 15 8.75 15C10.025 15 11.2063 14.6156 12.1938 13.9625L15.7312 17.5L17.5 15.7312L13.9625 12.1938ZM8.75 13.125C6.33437 13.125 4.375 11.1656 4.375 8.75C4.375 6.33437 6.33437 4.375 8.75 4.375C11.1656 4.375 13.125 6.33437 13.125 8.75C13.125 11.1656 11.1656 13.125 8.75 13.125Z" />
    </>
  ),
};

export const searchIcon: LoadedIconFunction = createIcon(
  "search",
  iconDefinition,
);
