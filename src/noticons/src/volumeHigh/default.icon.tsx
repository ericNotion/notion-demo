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
      <path d="M8.75 4.0625H10V15.9375H8.75L5.3125 12.5H2.5V7.5H5.3125L8.75 4.0625ZM12.7281 6.02188L11.4031 7.34688C12.1344 8.07812 12.5 9.0375 12.5 10C12.5 10.9625 12.1344 11.9188 11.4031 12.6531L12.7281 13.9781C13.825 12.8812 14.375 11.4406 14.375 10C14.375 8.55937 13.825 7.12188 12.7281 6.02188ZM14.9375 3.8125L13.6125 5.1375C14.9563 6.48125 15.625 8.24062 15.625 10C15.625 11.7594 14.9531 13.5188 13.6125 14.8625L14.9375 16.1875C16.6469 14.4781 17.5 12.2406 17.5 10C17.5 7.75937 16.6469 5.52187 14.9375 3.8125Z" />
    </>
  ),
};

export const volumeHighIcon: LoadedIconFunction = createIcon(
  "volumeHigh",
  iconDefinition,
);
