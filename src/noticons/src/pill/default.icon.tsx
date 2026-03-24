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
      <path d="M13.125 2.5C12.0063 2.5 10.8844 2.92813 10.0312 3.78125L3.78125 10.0312C2.92813 10.8844 2.5 12.0063 2.5 13.125C2.5 15.5406 4.45938 17.5 6.875 17.5C7.99375 17.5 9.11562 17.0719 9.96875 16.2188L16.2188 9.96875C17.0719 9.11562 17.5 7.99375 17.5 6.875C17.5 4.45938 15.5406 2.5 13.125 2.5ZM8.64375 14.8938C8.17188 15.3656 7.54375 15.625 6.875 15.625C5.49688 15.625 4.375 14.5031 4.375 13.125C4.375 12.4563 4.63438 11.8281 5.10625 11.3562L8.23125 8.23125L11.7656 11.7656L8.64062 14.8906L8.64375 14.8938Z" />
    </>
  ),
};

export const pillIcon: LoadedIconFunction = createIcon("pill", iconDefinition);
