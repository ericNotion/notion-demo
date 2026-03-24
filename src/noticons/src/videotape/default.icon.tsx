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
      <path d="M1.25 4.375V15.625H18.75V4.375H1.25ZM7.1875 9.375C6.49687 9.375 5.9375 9.93437 5.9375 10.625C5.9375 11.3156 6.49687 11.875 7.1875 11.875V13.125H4.375C4.375 13.125 3.4375 12.3562 3.4375 10.625C3.4375 8.89375 4.375 8.125 4.375 8.125H7.1875V9.375ZM11.5625 13.125H8.4375V8.125H11.5625V13.125ZM15.625 13.125H12.8125V11.875C13.5031 11.875 14.0625 11.3156 14.0625 10.625C14.0625 9.93437 13.5031 9.375 12.8125 9.375V8.125H15.625C15.625 8.125 16.5625 8.89375 16.5625 10.625C16.5625 12.3562 15.625 13.125 15.625 13.125Z" />
    </>
  ),
};

export const videotapeIcon: LoadedIconFunction = createIcon(
  "videotape",
  iconDefinition,
);
