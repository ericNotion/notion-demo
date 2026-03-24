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
      <path d="M10.9375 5.98214V2.8125H9.06247V5.98214H10.9375Z" />
      <path d="M13.5039 7.82198L15.7452 5.58071L14.4194 4.25488L12.1781 6.49616L13.5039 7.82198Z" />
      <path d="M17.1874 10.9375H14.0178V9.0625H17.1874V10.9375Z" />
      <path d="M12.1781 13.504L14.4194 15.7453L15.7452 14.4194L13.504 12.1782L12.1781 13.504Z" />
      <path d="M9.06241 17.1875V14.0179H10.9374V17.1875H9.06241Z" />
      <path d="M6.49599 12.178L4.25471 14.4193L5.58054 15.7451L7.82181 13.5038L6.49599 12.178Z" />
      <path d="M2.8125 9.0625L5.98214 9.0625L5.98214 10.9375H2.8125V9.0625Z" />
      <path d="M7.82177 6.49602L5.58049 4.25474L4.25467 5.58057L6.49594 7.82184L7.82177 6.49602Z" />
    </>
  ),
};

export const burstIcon: LoadedIconFunction = createIcon(
  "burst",
  iconDefinition,
);
