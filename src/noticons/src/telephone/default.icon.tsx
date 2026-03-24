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
      <path d="M11.875 12.5C11.875 13.3625 11.0344 14.0625 10 14.0625C8.96562 14.0625 8.125 13.3625 8.125 12.5C8.125 11.6375 8.96562 10.9375 10 10.9375C11.0344 10.9375 11.875 11.6375 11.875 12.5ZM10 2.5C6.09062 2.5 1.875 3.52188 1.875 6.15625V7.5H6.25V5.625C6.60313 5.32188 8.0375 4.6875 10 4.6875C11.9625 4.6875 13.3969 5.32188 13.75 5.625V7.5H18.125V6.15625C18.125 3.50313 13.8813 2.5 10 2.5ZM15 8.75L17.5 16.25V17.5H2.5V16.25L5 8.75H7.5V6.875H12.5V8.75H15ZM13.75 12.5C13.75 10.775 12.0719 9.375 10 9.375C7.92812 9.375 6.25 10.775 6.25 12.5C6.25 14.225 7.92812 15.625 10 15.625C12.0719 15.625 13.75 14.225 13.75 12.5Z" />
    </>
  ),
};

export const telephoneIcon: LoadedIconFunction = createIcon(
  "telephone",
  iconDefinition,
);
