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
      <path d="M10 3.74999C8.15937 3.74999 6.875 5.03437 6.875 6.87499V14.6844L6.34687 14.8156C5.225 15.0969 4.35312 14.575 4.07187 13.45L1.95 4.96249C1.66875 3.84062 2.19062 2.96874 3.31562 2.68749L8.77187 1.32187C9.89375 1.04062 10.7656 1.56249 11.0469 2.68749L11.3125 3.74999H10.0031H10ZM15.625 4.99999H10C8.84375 4.99999 8.125 5.71874 8.125 6.87499V15.625C8.125 16.7812 8.84375 17.5 10 17.5H15.625C16.7812 17.5 17.5 16.7812 17.5 15.625V6.87499C17.5 5.71874 16.7812 4.99999 15.625 4.99999Z" />
    </>
  ),
};

export const cardsIcon: LoadedIconFunction = createIcon(
  "cards",
  iconDefinition,
);
