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
      <path d="M14.5125 7.2875L10.725 2.2375C10.5531 2.00937 10.2844 1.875 10 1.875C9.71562 1.875 9.44688 2.00937 9.275 2.2375L5.4875 7.2875C4.5625 8.52187 4.0625 10.0219 4.0625 11.5625C4.0625 14.8406 6.72188 17.5 10 17.5C13.2781 17.5 15.9375 14.8406 15.9375 11.5625C15.9375 10.0219 15.4375 8.52187 14.5125 7.2875ZM9.375 11.25H5.95C6.0125 10.2281 6.37188 9.23125 6.9875 8.4125L8.60938 6.25H9.375V11.25Z" />
    </>
  ),
};

export const waterIcon: LoadedIconFunction = createIcon(
  "water",
  iconDefinition,
);
