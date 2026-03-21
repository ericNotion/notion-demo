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
      <path d="M12.0094 7.1875L10.3125 8.64062V5.73438L12.0094 7.1875ZM10.3125 14.2656L12.0094 12.8125L10.3125 11.3594V14.2656ZM16.25 10C16.25 15.0125 13.8562 18.125 10 18.125C6.14375 18.125 3.75 15.0125 3.75 10C3.75 4.9875 6.14375 1.875 10 1.875C13.8562 1.875 16.25 4.9875 16.25 10ZM10.6469 10L13.9281 7.1875L9.0625 3.01562V8.64062L6.8125 6.7125L6 7.6625L8.72813 10L6 12.3375L6.8125 13.2875L9.0625 11.3594V16.9844L13.9281 12.8125L10.6469 10Z" />
    </>
  ),
};

export const bluetoothIcon: LoadedIconFunction = createIcon(
  "bluetooth",
  iconDefinition,
);
