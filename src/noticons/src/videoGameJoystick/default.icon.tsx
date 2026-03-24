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
      <path d="M17.5 15V16.875H2.5V15C2.5 13.4563 3.45625 12.5 5 12.5H9.0625V7.98125C7.79375 7.58438 6.875 6.4 6.875 5C6.875 3.275 8.275 1.875 10 1.875C11.725 1.875 13.125 3.275 13.125 5C13.125 6.4 12.2063 7.58438 10.9375 7.98125V12.5H12.1875V11.25H14.6875V12.5H15C16.5437 12.5 17.5 13.4563 17.5 15Z" />
    </>
  ),
};

export const videoGameJoystickIcon: LoadedIconFunction = createIcon(
  "videoGameJoystick",
  iconDefinition,
);
