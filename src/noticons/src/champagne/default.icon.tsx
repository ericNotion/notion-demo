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
      <path d="M14.375 8.75C14.375 8.42812 14.3344 8.10938 14.2562 7.79688L12.9313 2.5H7.06563L5.74063 7.79688C5.6625 8.10938 5.62187 8.42812 5.62187 8.75C5.62187 11.1469 6.72812 12.7344 9.05937 13.0594V15.625H6.55937V17.5H13.4344V15.625H10.9344V13.0594C13.2656 12.7344 14.3719 11.1469 14.3719 8.75H14.375ZM11.4688 4.375L11.7812 5.625H8.21563L8.52813 4.375H11.4688Z" />
    </>
  ),
};

export const champagneIcon: LoadedIconFunction = createIcon(
  "champagne",
  iconDefinition,
);
