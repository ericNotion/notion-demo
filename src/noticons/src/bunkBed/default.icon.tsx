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
      <path d="M16.25 3.75V5.625H9.375C9.375 4.08125 8.41875 3.125 6.875 3.125H3.75V1.25H1.875V18.75H3.75V16.25H11.875V18.75H13.75V16.25H16.25V18.75H18.125V3.75H16.25ZM16.25 10H13.75V7.5H16.25V10ZM9.375 14.375C9.375 12.8313 8.41875 11.875 6.875 11.875H3.75V7.5H11.875V14.375H9.375ZM13.75 14.375V11.875H16.25V14.375H13.75Z" />
    </>
  ),
};

export const bunkBedIcon: LoadedIconFunction = createIcon(
  "bunkBed",
  iconDefinition,
);
