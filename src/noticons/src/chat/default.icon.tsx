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
      <path d="M17.5 9.375C17.5 13.6156 14.6281 16.25 10 16.25C9.15 16.25 8.3625 16.1594 7.64062 15.9875C6.38438 16.9344 4.82187 17.5 3.125 17.5L2.5 16.5625L4.59375 14.4688C3.25 13.2781 2.5 11.5375 2.5 9.375C2.5 5.13438 5.37187 2.5 10 2.5C14.6281 2.5 17.5 5.13438 17.5 9.375Z" />
    </>
  ),
};

export const chatIcon: LoadedIconFunction = createIcon("chat", iconDefinition);
