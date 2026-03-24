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
      <path d="M17.5 7.49995C17.5 10.2625 15.2625 12.5 12.5 12.5C11.8063 12.5 11.1469 12.3593 10.5469 12.1031L5.76563 16.8843C4.94688 17.7031 3.93126 17.7031 3.11251 16.8843C2.29376 16.0656 2.29376 15.05 3.11251 14.2312L7.89376 9.44995C7.63751 8.84995 7.49688 8.19058 7.49688 7.49683C7.49688 4.73433 9.73438 2.49683 12.4969 2.49683C12.9281 2.49683 13.3469 2.5562 13.7469 2.66245V3.59683L11.2469 6.09683L11.8063 8.18745L13.8969 8.74683L16.3969 6.24683H17.3313C17.4344 6.64683 17.4969 7.06558 17.4969 7.49683L17.5 7.49995Z" />
    </>
  ),
};

export const wrenchIcon: LoadedIconFunction = createIcon(
  "wrench",
  iconDefinition,
);
