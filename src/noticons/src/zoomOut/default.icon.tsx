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
      <path d="M13.9625 12.1938C14.6156 11.2063 15 10.0219 15 8.75C15 5.29688 12.2031 2.5 8.75 2.5C5.29688 2.5 2.5 5.29688 2.5 8.75C2.5 12.2031 5.29688 15 8.75 15C10.025 15 11.2063 14.6156 12.1938 13.9625L15.7312 17.5L17.5 15.7312L13.9625 12.1938ZM12.8125 9.6875H4.6875V7.8125H12.8125V9.6875Z" />
    </>
  ),
};

export const zoomOutIcon: LoadedIconFunction = createIcon(
  "zoomOut",
  iconDefinition,
);
