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
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.5 8.75V10.625H16.25V15.625H15V17.5H12.5V15.625H7.5V17.5H5V15.625H3.75V10.625H2.5V8.75H4.21875L5 5.625H15L15.7812 8.75H17.5ZM14.3156 10.625H5.68125L6.4625 7.5H13.5344L14.3156 10.625ZM6.875 12.1875C7.39375 12.1875 7.8125 12.6062 7.8125 13.125C7.8125 13.6438 7.39375 14.0625 6.875 14.0625C6.35625 14.0625 5.9375 13.6438 5.9375 13.125C5.9375 12.6062 6.35625 12.1875 6.875 12.1875ZM14.0625 13.125C14.0625 13.6438 13.6438 14.0625 13.125 14.0625C12.6062 14.0625 12.1875 13.6438 12.1875 13.125C12.1875 12.6062 12.6062 12.1875 13.125 12.1875C13.6438 12.1875 14.0625 12.6062 14.0625 13.125Z"
      />
    </>
  ),
};

export const truckIcon: LoadedIconFunction = createIcon(
  "truck",
  iconDefinition,
);
