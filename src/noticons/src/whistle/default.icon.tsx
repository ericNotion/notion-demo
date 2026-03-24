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
      <path d="M20 4.37495V8.12495H18.4375C16.5812 8.12495 14.85 9.05308 13.8219 10.5937L12.1156 13.1531C11.0875 14.6968 9.35625 15.6218 7.5 15.6218C4.825 15.6218 2.5875 13.75 2.01875 11.2468H0V8.74683H2.01875C2.5875 6.2437 4.82188 4.37183 7.5 4.37183H9.375V6.24683H11.25V4.37183H20V4.37495Z" />
    </>
  ),
};

export const whistleIcon: LoadedIconFunction = createIcon(
  "whistle",
  iconDefinition,
);
