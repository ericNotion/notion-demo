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
      <path d="M18.125 6.25001V8.75001C18.125 10.2938 17.1687 11.25 15.625 11.25H15.2437L10.9563 6.96251L8.75 7.87501V11.2469H4.375C2.83125 11.2469 1.875 10.2906 1.875 8.74689V6.24689C1.875 4.70314 2.83125 3.74689 4.375 3.74689H15.625C17.1687 3.74689 18.125 4.70314 18.125 6.24689V6.25001ZM10 8.71251V15.7313L10.4406 16.1719L11.9906 14.6219L13.3125 17.8125L14.7563 17.2156L13.4344 14.025H15.625V13.4L10.6625 8.43751L10 8.71251Z" />
    </>
  ),
};

export const cursorButtonIcon: LoadedIconFunction = createIcon(
  "cursorButton",
  iconDefinition,
);
