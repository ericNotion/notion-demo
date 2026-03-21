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
      <path d="M3.125 3.125V16.875H16.875V3.125H3.125ZM5.9375 7.5C5.075 7.5 4.375 6.8 4.375 5.9375C4.375 5.075 5.075 4.375 5.9375 4.375C6.8 4.375 7.5 5.075 7.5 5.9375C7.5 6.8 6.8 7.5 5.9375 7.5ZM10 11.5625C9.1375 11.5625 8.4375 10.8625 8.4375 10C8.4375 9.1375 9.1375 8.4375 10 8.4375C10.8625 8.4375 11.5625 9.1375 11.5625 10C11.5625 10.8625 10.8625 11.5625 10 11.5625ZM14.0625 15.625C13.2 15.625 12.5 14.925 12.5 14.0625C12.5 13.2 13.2 12.5 14.0625 12.5C14.925 12.5 15.625 13.2 15.625 14.0625C15.625 14.925 14.925 15.625 14.0625 15.625Z" />
    </>
  ),
};

export const die3Icon: LoadedIconFunction = createIcon("die3", iconDefinition);
