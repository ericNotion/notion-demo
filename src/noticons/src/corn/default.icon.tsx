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
      <path d="M16.25 7.5C16.25 12.5 13.125 14.375 13.125 14.375L10.625 19.375H9.375L6.875 14.375C6.875 14.375 3.75 12.5 3.75 7.5H5L10 13.75L15 7.5H16.25ZM10 11.775L7.1875 8.26875V7.8125C7.1875 3.4375 9.375 0.625 9.375 0.625H10.625C10.625 0.625 12.8125 3.4375 12.8125 7.8125V8.26875L10 11.775ZM10.3125 8.125H11.5625V6.875H10.3125V8.125ZM9.6875 5H8.4375V6.25H9.6875V5Z" />
    </>
  ),
};

export const cornIcon: LoadedIconFunction = createIcon("corn", iconDefinition);
