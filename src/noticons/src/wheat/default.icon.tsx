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
      <path d="M14.4531 6.24692L12.575 8.12505H16.5625C16.5625 9.2813 15.8438 10 14.6875 10H10.7L8.825 11.875H12.8125C12.8125 13.0313 12.0938 13.75 10.9375 13.75H6.95L3.2 17.5L1.875 16.175L3.75 14.3V10.3125C3.75 9.1563 4.46875 8.43755 5.625 8.43755V12.425L7.5 10.55V6.56255C7.5 5.4063 8.21875 4.68755 9.375 4.68755V8.67505L14.45 3.60005C15.2344 2.81567 15.9906 2.50317 17.1031 2.50317H18.125C18.125 4.79067 16.7219 6.21567 14.4531 6.25005V6.24692Z" />
    </>
  ),
};

export const wheatIcon: LoadedIconFunction = createIcon(
  "wheat",
  iconDefinition,
);
