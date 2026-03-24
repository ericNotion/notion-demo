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
      <path d="M10 3.75V1.875C14.4875 1.875 18.125 5.5125 18.125 10H16.25C16.25 6.54688 13.4531 3.75 10 3.75ZM11.25 13.75C10.8031 13.7188 9.55937 13.3094 8.125 11.875C6.69063 10.4406 6.28125 9.19688 6.25 8.75L8.75 6.25L5 2.5L3.38437 4.11562C2.81875 4.68125 2.5 5.45 2.5 6.25C2.5 11.25 8.75 17.5 13.75 17.5C14.55 17.5 15.3188 17.1812 15.8844 16.6156L17.5 15L13.75 11.25L11.25 13.75ZM13.125 10H15C15 7.2375 12.7625 5 10 5V6.875C11.725 6.875 13.125 8.275 13.125 10Z" />
    </>
  ),
};

export const phoneSpeakerIcon: LoadedIconFunction = createIcon(
  "phoneSpeaker",
  iconDefinition,
);
