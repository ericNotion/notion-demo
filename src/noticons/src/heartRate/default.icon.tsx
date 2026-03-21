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
      <path d="M12.2625 11.25H16.4031C14.8656 13.9125 12.0344 16.0906 10.0031 17.5C7.97187 16.0906 5.14062 13.9125 3.60312 11.25H6.01562L7.50313 8.27187L10.2406 13.75H11.0125L12.2625 11.25ZM13.4375 3.125C11.9 3.125 10.5781 4.05312 10 5.37812C9.42188 4.05312 8.1 3.125 6.5625 3.125C4.31875 3.125 2.5 4.83125 2.5 7.5C2.5 8.36562 2.68125 9.2 2.99375 10H5.2375L7.1125 6.25H7.88437L10.6219 11.7281L11.4844 10H17C17.3125 9.2 17.4937 8.36562 17.4937 7.5C17.4937 4.83125 15.675 3.125 13.4312 3.125H13.4375Z" />
    </>
  ),
};

export const heartRateIcon: LoadedIconFunction = createIcon(
  "heartRate",
  iconDefinition,
);
