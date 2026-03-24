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
      <path d="M14.0625 5.44688C16.2 4.925 17.5 4.17812 17.5 4.17812L16.65 2.5C16.65 2.5 13.975 4.0625 10 4.0625C6.025 4.0625 3.35 2.5 3.35 2.5L2.5 4.17812C2.5 4.17812 3.8 4.92813 5.9375 5.44688V14.5531C3.8 15.075 2.5 15.8219 2.5 15.8219L3.35 17.5C3.35 17.5 6.025 15.9375 10 15.9375C13.975 15.9375 16.65 17.5 16.65 17.5L17.5 15.8219C17.5 15.8219 16.2 15.0719 14.0625 14.5531V5.44688ZM7.8125 14.2062V5.79687C8.49375 5.88437 9.225 5.94063 10 5.94063C10.775 5.94063 11.5063 5.8875 12.1875 5.79687V14.2062C11.5063 14.1187 10.775 14.0625 10 14.0625C9.225 14.0625 8.49375 14.1156 7.8125 14.2062Z" />
    </>
  ),
};

export const geminiIcon: LoadedIconFunction = createIcon(
  "gemini",
  iconDefinition,
);
