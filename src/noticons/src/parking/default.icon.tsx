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
      <path d="M10.9375 6.25H7.5V13.75H9.375V11.875H10.9375C12.6719 11.875 13.75 10.7969 13.75 9.0625C13.75 7.32812 12.6719 6.25 10.9375 6.25ZM10.75 10.1875H9.375V7.9375H10.75C11.4438 7.9375 11.875 8.36875 11.875 9.0625C11.875 9.75625 11.4438 10.1875 10.75 10.1875ZM10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM10 15.625C6.89375 15.625 4.375 13.1062 4.375 10C4.375 6.89375 6.89375 4.375 10 4.375C13.1062 4.375 15.625 6.89375 15.625 10C15.625 13.1062 13.1062 15.625 10 15.625Z" />
    </>
  ),
};

export const parkingIcon: LoadedIconFunction = createIcon(
  "parking",
  iconDefinition,
);
