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
      <path d="M18.75 10.625H17.5V11.875C17.5 14.9594 15.5844 16.875 12.5 16.875H7.5C4.41563 16.875 2.5 14.9594 2.5 11.875V10.625H1.25V8.75H5.3125V6.875H7.1875V8.75H9.0625V4.0625C9.0625 2.38125 10.1938 1.25 11.875 1.25C13.5562 1.25 14.6875 2.38125 14.6875 4.0625V5H12.8125V4.0625C12.8125 3.42188 12.5156 3.125 11.875 3.125C11.2344 3.125 10.9375 3.42188 10.9375 4.0625V8.75H12.8125V6.875H14.6875V8.75H18.75V10.625Z" />
    </>
  ),
};

export const sinkIcon: LoadedIconFunction = createIcon("sink", iconDefinition);
