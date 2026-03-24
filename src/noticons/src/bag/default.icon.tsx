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
      <path d="M15 2.5V10C15 11.0656 14.0844 11.8531 12.5 12.2375V14.375H10.9375V15C10.9375 16.4719 9.90938 17.5 8.4375 17.5H6.25V15.625H8.4375C8.88125 15.625 9.0625 15.4438 9.0625 15V14.375H7.5V12.2375C5.91562 11.8531 5 11.0688 5 10V8.75H7.5V7.5H5V5.625H7.5V4.375H5V2.5H15Z" />
    </>
  ),
};

export const bagIcon: LoadedIconFunction = createIcon("bag", iconDefinition);
