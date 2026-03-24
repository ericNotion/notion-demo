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
      <path d="M10.625 13.75H12.5V17.5H3.125V2.5H12.5V6.25H10.625V4.375H5V15.625H10.625V13.75ZM15.3875 5.9375L14.0625 7.2625L15.8625 9.0625H10.625V10.9375H15.8625L14.0625 12.7375L15.3875 14.0625L19.45 10L15.3875 5.9375Z" />
    </>
  ),
};

export const signOutIcon: LoadedIconFunction = createIcon(
  "signOut",
  iconDefinition,
);
