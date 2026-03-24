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
      <path d="M12.125 7.5C12.75 6.90625 13.125 6.14375 13.125 5.3125C13.125 3.4125 11.1656 1.875 8.75 1.875C6.33438 1.875 4.375 3.4125 4.375 5.3125V14.6875C4.375 16.5875 6.33438 18.125 8.75 18.125H15.625V7.5H12.125ZM8.75 4.0625C9.6125 4.0625 10.3125 4.62188 10.3125 5.3125C10.3125 6.00313 9.6125 6.5625 8.75 6.5625C7.8875 6.5625 7.1875 6.00313 7.1875 5.3125C7.1875 4.62188 7.8875 4.0625 8.75 4.0625Z" />
    </>
  ),
};

export const paperTowelsIcon: LoadedIconFunction = createIcon(
  "paperTowels",
  iconDefinition,
);
