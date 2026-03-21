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
      <path d="M18.3625 8.55937L17.6125 6.25H12.725L11.2031 1.5625H8.79999L7.27812 6.25H2.32499L1.58749 8.525L5.59062 11.4344L4.09374 16.0406L6.08124 17.4844L9.99999 14.6375L13.8781 17.4563L15.8906 15.9937L14.4094 11.4344L18.3625 8.5625V8.55937ZM13.5656 14.9094L9.99999 12.3187L6.43437 14.9094L7.79687 10.7156L4.22812 8.125H8.63749L9.99999 3.93125L11.3625 8.125H15.7719L12.2062 10.7156L13.5687 14.9094H13.5656Z" />
    </>
  ),
};

export const starOutlineIcon: LoadedIconFunction = createIcon(
  "starOutline",
  iconDefinition,
);
