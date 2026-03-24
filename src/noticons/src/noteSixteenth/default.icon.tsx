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
      <path d="M14.6875 4.0625L9.0625 2.65625V12.6094C8.77813 12.5406 8.4625 12.5 8.125 12.5C6.39062 12.5 5.3125 13.4563 5.3125 15C5.3125 16.5437 6.39062 17.5 8.125 17.5C9.85938 17.5 10.9375 16.5437 10.9375 15V8.75L14.6875 9.6875V4.0625ZM12.8125 7.2875L10.9375 6.81875V5.05938L12.8125 5.52813V7.2875Z" />
    </>
  ),
};

export const noteSixteenthIcon: LoadedIconFunction = createIcon(
  "noteSixteenth",
  iconDefinition,
);
