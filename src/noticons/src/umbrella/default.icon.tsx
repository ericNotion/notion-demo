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
      <path d="M10.9375 10.625V15.3125C10.9375 17.0469 9.85938 18.125 8.125 18.125C6.39062 18.125 5.3125 17.0469 5.3125 15.3125V14.375H7.1875V15.3125C7.1875 15.8906 7.54688 16.25 8.125 16.25C8.70312 16.25 9.0625 15.8906 9.0625 15.3125V10.625H2.5C2.5 6.3875 4.91562 3.62813 8.875 3.19375L9.40625 1.5625H10.5969L11.1281 3.19375C15.0875 3.62813 17.5031 6.3875 17.5031 10.625H10.9406H10.9375Z" />
    </>
  ),
};

export const umbrellaIcon: LoadedIconFunction = createIcon(
  "umbrella",
  iconDefinition,
);
