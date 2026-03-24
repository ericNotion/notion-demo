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
      <path d="M16.25 8.85V8.75C16.25 5.27813 14.0969 3.125 10.625 3.125C7.59062 3.125 5.5625 4.77188 5.1 7.50938C2.71875 7.59688 1.25 9.12813 1.25 11.5625C1.25 13.9969 2.80625 15.625 5.3125 15.625H15.3125C17.4344 15.625 18.75 14.3094 18.75 12.1875C18.75 10.4 17.8125 9.1875 16.25 8.85ZM15.3125 13.75H5.3125C3.84063 13.75 3.125 13.0344 3.125 11.5625C3.125 10.0906 3.84063 9.375 5.3125 9.375H6.875V8.75C6.875 6.33125 8.20625 5 10.625 5C13.0437 5 14.375 6.33125 14.375 8.75V10.625H15.3125C16.3938 10.625 16.875 11.1062 16.875 12.1875C16.875 13.2688 16.3938 13.75 15.3125 13.75Z" />
    </>
  ),
};

export const cloudIcon: LoadedIconFunction = createIcon(
  "cloud",
  iconDefinition,
);
