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
      <path d="M2.5 17.5H10V2.5H2.5V17.5ZM7.1875 15.625C6.66875 15.625 6.25 15.2063 6.25 14.6875C6.25 14.1687 6.66875 13.75 7.1875 13.75C7.70625 13.75 8.125 14.1687 8.125 14.6875C8.125 15.2063 7.70625 15.625 7.1875 15.625ZM4.375 4.375H8.125V6.875H4.375V4.375ZM4.375 8.75H8.125V11.25H4.375V8.75ZM19.3562 8.14375L11.25 16.25V6.89375L14.6781 3.46563L19.3562 8.14375Z" />
    </>
  ),
};

export const fanDeckIcon: LoadedIconFunction = createIcon(
  "fanDeck",
  iconDefinition,
);
