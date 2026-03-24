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
      <path d="M13.125 7.1875V12.8125C13.125 14.35 12.1625 15.3125 10.625 15.3125H3.75C2.2125 15.3125 1.25 14.35 1.25 12.8125V7.1875C1.25 5.65 2.2125 4.6875 3.75 4.6875H10.625C12.1625 4.6875 13.125 5.65 13.125 7.1875ZM17.5 5.625L14.375 8.75V11.25L17.5 14.375H18.75V5.625H17.5Z" />
    </>
  ),
};

export const videoCameraIcon: LoadedIconFunction = createIcon(
  "videoCamera",
  iconDefinition,
);
