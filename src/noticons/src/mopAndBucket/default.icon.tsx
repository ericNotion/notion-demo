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
      <path d="M10.625 15.625V16.875H2.8125L1.80937 14.8688C1.4 14.0469 1.25 13.4187 1.25 12.5C1.25 10.8656 2.4 9.75938 4.0625 9.45938V1.25H5.9375V9.45938C7.6 9.75938 8.75 10.8656 8.75 12.5V13.75C8.75 14.9062 9.46875 15.625 10.625 15.625ZM19.375 9.375H10.625V11.25H11.5625L12.5 16.875H17.5L18.4375 11.25H19.375V9.375Z" />
    </>
  ),
};

export const mopAndBucketIcon: LoadedIconFunction = createIcon(
  "mopAndBucket",
  iconDefinition,
);
