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
      <path d="M11.5625 5C9.0375 5 6.77812 6.025 5.25938 7.6375C4.42188 6.96875 2.975 6.25 0.625 6.25V7.5L2.70937 10L0.625 12.5V13.75C2.975 13.75 4.42188 13.0281 5.25938 12.3625C6.77812 13.975 9.0375 15 11.5625 15C15.1687 15 18.2375 12.9125 19.375 10C18.2375 7.0875 15.1687 5 11.5625 5ZM13.75 10.625C13.0594 10.625 12.5 10.0656 12.5 9.375C12.5 8.68438 13.0594 8.125 13.75 8.125C14.4406 8.125 15 8.68438 15 9.375C15 10.0656 14.4406 10.625 13.75 10.625Z" />
    </>
  ),
};

export const fishIcon: LoadedIconFunction = createIcon("fish", iconDefinition);
