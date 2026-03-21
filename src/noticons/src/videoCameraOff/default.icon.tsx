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
      <path d="M2.37188 5.025L12.1969 14.85C11.7875 15.1469 11.2531 15.3125 10.625 15.3125H3.75C2.2125 15.3125 1.25 14.35 1.25 12.8125V7.1875C1.25 6.1875 1.6625 5.43125 2.37188 5.025ZM13.125 7.1875C13.125 5.65 12.1625 4.6875 10.625 4.6875H7.34062L13.125 10.4719V7.1875ZM1.875 2.75937L17.2406 18.125L18.125 17.2406L2.75937 1.875L1.875 2.75937ZM17.5 5.625L14.375 8.75V11.25L17.5 14.375H18.75V5.625H17.5Z" />
    </>
  ),
};

export const videoCameraOffIcon: LoadedIconFunction = createIcon(
  "videoCameraOff",
  iconDefinition,
);
