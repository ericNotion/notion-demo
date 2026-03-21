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
      <path d="M14.9563 6.25C14.6469 3.78438 12.55 1.875 10 1.875C7.45 1.875 5.35 3.78438 5.04375 6.25H2.5V6.875C2.5 10.5906 5.20312 13.675 8.75 14.2688V16.25H5V17.5H15V16.25H11.25V14.2688C14.7969 13.6719 17.5 10.5906 17.5 6.875V6.25H14.9563ZM10 3.75C11.725 3.75 13.125 5.15 13.125 6.875C13.125 8.6 11.725 10 10 10C8.275 10 6.875 8.6 6.875 6.875C6.875 5.15 8.275 3.75 10 3.75ZM10 13.125C6.75938 13.125 4.09375 10.6594 3.78125 7.5H5.04375C5.35312 9.96562 7.45 11.875 10 11.875C12.55 11.875 14.65 9.96562 14.9563 7.5H16.2188C15.9062 10.6594 13.2406 13.125 10 13.125Z" />
    </>
  ),
};

export const mirrorIcon: LoadedIconFunction = createIcon(
  "mirror",
  iconDefinition,
);
