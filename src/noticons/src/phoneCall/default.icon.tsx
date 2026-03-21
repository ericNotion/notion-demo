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
      <path d="M17.5 15L15.8844 16.6156C15.3188 17.1812 14.55 17.5 13.75 17.5C8.75 17.5 2.5 11.25 2.5 6.25C2.5 5.45 2.81875 4.68125 3.38437 4.11563L5 2.5L8.75 6.25L6.25 8.75C6.28125 9.19688 6.69063 10.4406 8.125 11.875C9.55937 13.3094 10.8031 13.7188 11.25 13.75L13.75 11.25L17.5 15Z" />
    </>
  ),
};

export const phoneCallIcon: LoadedIconFunction = createIcon(
  "phoneCall",
  iconDefinition,
);
