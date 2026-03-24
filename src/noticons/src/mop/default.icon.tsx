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
      <path d="M16.4594 15.4156V16.875H7.65625L6.48438 14.5344C6.00625 13.575 5.83125 12.8437 5.83125 11.7719C5.83125 9.85 7.11875 8.55313 9.05938 8.21563V1.25H10.9344V8.18125C12.9719 8.45937 14.2688 9.78125 14.2688 11.7688V13.2281C14.2688 14.5781 15.1063 15.4156 16.4563 15.4156H16.4594Z" />
    </>
  ),
};

export const mopIcon: LoadedIconFunction = createIcon("mop", iconDefinition);
