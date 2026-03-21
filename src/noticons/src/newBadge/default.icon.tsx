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
      <path d="M16.6531 11.7844L17.3063 14.2188L14.8719 14.8719L14.2188 17.3063L11.7844 16.6531L10 18.4375L8.21563 16.6531L5.78125 17.3063L5.12812 14.8719L2.69375 14.2188L3.34687 11.7844L1.5625 10L3.34687 8.21563L2.69375 5.78125L5.12812 5.12812L5.78125 2.69375L8.21563 3.34687L10 1.5625L11.7844 3.34687L14.2188 2.69375L14.8719 5.12812L17.3063 5.78125L16.6531 8.21563L18.4375 10L16.6531 11.7844Z" />
    </>
  ),
};

export const newBadgeIcon: LoadedIconFunction = createIcon(
  "newBadge",
  iconDefinition,
);
