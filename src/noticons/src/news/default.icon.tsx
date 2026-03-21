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
      <path d="M15.9375 3.125L14.6875 4.375L13.4375 3.125H12.8125L11.5625 4.375L10.3125 3.125H9.6875L8.4375 4.375L7.1875 3.125H6.5625L5.3125 4.375L4.0625 3.125H3.125V14.375C3.125 15.9187 4.08125 16.875 5.625 16.875H14.375C15.9187 16.875 16.875 15.9187 16.875 14.375V3.125H15.9375ZM8.75 14.375H5V10.625H8.75V14.375ZM15 14.375H10V13.125H15V14.375ZM15 11.875H10V10.625H15V11.875ZM15 8.125H5V6.875H15V8.125Z" />
    </>
  ),
};

export const newsIcon: LoadedIconFunction = createIcon("news", iconDefinition);
