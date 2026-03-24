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
      <path d="M15.625 6.25V8.125H14.375V10.625C14.375 12.1687 13.4187 13.125 11.875 13.125H10.9375V14.375C10.9375 15.5844 11.6031 16.25 12.8125 16.25H13.75V18.125H12.8125C10.5687 18.125 9.0625 16.6187 9.0625 14.375V13.125H8.125C6.58125 13.125 5.625 12.1687 5.625 10.625V8.125H4.375V6.25H6.5625V1.875H8.4375V6.25H11.5625V1.875H13.4375V6.25H15.625Z" />
    </>
  ),
};

export const electricPlugIcon: LoadedIconFunction = createIcon(
  "electricPlug",
  iconDefinition,
);
