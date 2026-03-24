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
      <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM15 10.9375H7.8875L10.625 13.675L9.3 15L4.3 10L9.3 5L10.625 6.325L7.8875 9.0625H15V10.9375Z" />
    </>
  ),
};

export const arrowLeftIcon: LoadedIconFunction = createIcon(
  "arrowLeft",
  iconDefinition,
);
