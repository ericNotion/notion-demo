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
      <path d="M1.875 4.375V15.625H18.125V4.375H1.875ZM16.25 11.25C14.7063 11.25 13.75 12.2063 13.75 13.75H6.25C6.25 12.2063 5.29375 11.25 3.75 11.25V8.75C5.29375 8.75 6.25 7.79375 6.25 6.25H13.75C13.75 7.79375 14.7063 8.75 16.25 8.75V11.25ZM12.1875 10C12.1875 11.5437 11.35 12.5 10 12.5C8.65 12.5 7.8125 11.5437 7.8125 10C7.8125 8.45625 8.65 7.5 10 7.5C11.35 7.5 12.1875 8.45625 12.1875 10Z" />
    </>
  ),
};

export const cashIcon: LoadedIconFunction = createIcon("cash", iconDefinition);
