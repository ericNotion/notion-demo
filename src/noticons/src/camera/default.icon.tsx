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
      <path d="M12.8125 10.3125C12.8125 11.8656 11.5531 13.125 10 13.125C8.44688 13.125 7.1875 11.8656 7.1875 10.3125C7.1875 8.75938 8.44688 7.5 10 7.5C11.5531 7.5 12.8125 8.75938 12.8125 10.3125ZM17.5 5V16.25H2.5V5H5.9375L7.1875 2.5H12.8125L14.0625 5H17.5ZM14.0625 10.3125C14.0625 8.06875 12.2437 6.25 10 6.25C7.75625 6.25 5.9375 8.06875 5.9375 10.3125C5.9375 12.5562 7.75625 14.375 10 14.375C12.2437 14.375 14.0625 12.5562 14.0625 10.3125Z" />
    </>
  ),
};

export const cameraIcon: LoadedIconFunction = createIcon(
  "camera",
  iconDefinition,
);
