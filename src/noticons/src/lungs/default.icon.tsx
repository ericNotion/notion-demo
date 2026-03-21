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
      <path d="M18.125 9.99995V17.5H16.875L14.5719 16.35C13.1531 15.6406 12.5 14.5843 12.5 12.9968V11.9531L10 9.45308L7.5 11.9531V12.9968C7.5 14.5843 6.84688 15.6406 5.42813 16.35L3.125 17.5H1.875V9.99995C1.875 6.91558 3.79063 4.99995 6.875 4.99995H7.5V9.29995L7.65312 9.14683C8.4375 8.36245 8.75 7.6062 8.75 6.4937V2.49683H11.25V6.4937C11.25 7.6062 11.5625 8.35933 12.3469 9.14683L12.5 9.29995V4.99995H13.125C16.2094 4.99995 18.125 6.91558 18.125 9.99995Z" />
    </>
  ),
};

export const lungsIcon: LoadedIconFunction = createIcon(
  "lungs",
  iconDefinition,
);
