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
      <path d="M15.625 13.1938L11.3188 17.5H8.67812L4.37187 13.1938L5.06562 12.5C6.92187 12.5 8.43125 13.5625 9.05937 15.1406V11.175C6.91562 10.825 5.62187 9.24687 5.62187 6.875V2.5H6.87187L8.12187 5L9.37187 2.5H10.6219L11.8719 5L13.1219 2.5H14.3719V6.875C14.3719 9.24687 13.0781 10.825 10.9344 11.175V15.1406C11.5594 13.5625 13.0719 12.5 14.9281 12.5L15.6219 13.1938H15.625Z" />
    </>
  ),
};

export const tulipIcon: LoadedIconFunction = createIcon(
  "tulip",
  iconDefinition,
);
