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
      <path d="M16.8875 5.76561L13.8656 8.78749L15.0031 9.92499L13.6781 11.25L8.75313 6.32499L10.0781 4.99999L11.2156 6.13749L14.2375 3.11561C14.6469 2.70624 15.1062 2.50311 15.5625 2.50311C16.5188 2.50311 17.5031 3.48749 17.5031 4.44374C17.5031 4.90311 17.3 5.35936 16.8906 5.76874L16.8875 5.76561ZM4.0625 13.2844L2.5 17.0562L2.94062 17.4969L6.7125 15.9344L11.6531 10.9937L9 8.34061L4.05937 13.2812L4.0625 13.2844Z" />
    </>
  ),
};

export const colorPickerIcon: LoadedIconFunction = createIcon(
  "colorPicker",
  iconDefinition,
);
