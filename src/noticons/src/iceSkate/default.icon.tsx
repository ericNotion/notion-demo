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
      <path d="M16.25 14.375V15C16.25 15.3844 16.0094 15.625 15.625 15.625H13.75V14.3C16.5312 13.95 17.5 12.5 17.5 12.5V10.7812L14.375 10L9.375 5.625V2.5H3.125V5.02813L2.725 6.63125C2.55938 7.29688 2.5 7.76563 2.5 8.45C2.5 9.13438 2.55625 9.60313 2.725 10.2688L3.75 14.3719H4.375V15.6219H2.5V17.4969H15.625C17.1687 17.4969 18.125 16.5406 18.125 14.9969V14.3719H16.25V14.375ZM6.25 15.625V14.375H6.875V12.5H7.8125L9.6875 14.375H11.875V15.625H6.25Z" />
    </>
  ),
};

export const iceSkateIcon: LoadedIconFunction = createIcon(
  "iceSkate",
  iconDefinition,
);
