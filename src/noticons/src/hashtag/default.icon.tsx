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
      <path d="M16.875 8.125V6.25H14.375L15.3125 2.5H13.4375L12.5 6.25H9.375L10.3125 2.5H8.4375L7.5 6.25H3.75V8.125H7.03125L6.09375 11.875H3.125V13.75H5.625L4.6875 17.5H6.5625L7.5 13.75H10.625L9.6875 17.5H11.5625L12.5 13.75H16.25V11.875H12.9688L13.9062 8.125H16.875ZM11.0938 11.875H7.96875L8.90625 8.125H12.0312L11.0938 11.875Z" />
    </>
  ),
};

export const hashtagIcon: LoadedIconFunction = createIcon(
  "hashtag",
  iconDefinition,
);
