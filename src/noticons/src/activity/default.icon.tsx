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
      <path d="M13.125 12.1344L17.5 7.75938V14.375C17.5 15.9187 16.5437 16.875 15 16.875H5C3.45625 16.875 2.5 15.9187 2.5 14.375V12.7594L4.375 10.8844L6.875 13.3844L10.625 9.63438L13.125 12.1344ZM15 3.125H5C3.45625 3.125 2.5 4.08125 2.5 5.625V10.9906L4.375 9.11562L6.875 11.6156L10.625 7.86562L13.125 10.3656L17.5 5.99062V5.625C17.5 4.08125 16.5437 3.125 15 3.125Z" />
    </>
  ),
};

export const activityIcon: LoadedIconFunction = createIcon(
  "activity",
  iconDefinition,
);
