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
      <path d="M17.5 10.9375H14.0937C14.3094 14.3875 15.625 16.65 15.625 16.65L13.9469 17.5C13.9469 17.5 12.4312 14.8719 12.2125 10.9375H7.78437C7.56562 14.8719 6.05 17.5 6.05 17.5L4.37187 16.65C4.37187 16.65 5.6875 14.3875 5.90312 10.9375H2.49687V9.0625H5.90312C5.6875 5.6125 4.37187 3.35 4.37187 3.35L6.05 2.5C6.05 2.5 7.56562 5.12812 7.78437 9.0625H12.2125C12.4312 5.12812 13.9469 2.5 13.9469 2.5L15.625 3.35C15.625 3.35 14.3094 5.6125 14.0937 9.0625H17.5V10.9375Z" />
    </>
  ),
};

export const piscesIcon: LoadedIconFunction = createIcon(
  "pisces",
  iconDefinition,
);
