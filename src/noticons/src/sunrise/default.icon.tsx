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
      <path d="M6.90625 11.647L6.02188 12.5313L3.8125 10.322L4.69687 9.4376L6.90625 11.647ZM1.875 16.2501H5V15.0001H1.875V16.2501ZM15 15.0001V16.2501H18.125V15.0001H15ZM10 11.8751C7.92812 11.8751 6.25 13.5532 6.25 15.6251V16.2501H13.75V15.6251C13.75 13.5532 12.0719 11.8751 10 11.8751ZM15.3031 9.4376L13.0938 11.647L13.9781 12.5313L16.1875 10.322L15.3031 9.4376ZM9.375 4.94697V10.6251H10.625V4.94697L13.1781 7.5001L14.0625 6.61572L10 2.55322L5.9375 6.61572L6.82188 7.5001L9.375 4.94697Z" />
    </>
  ),
};

export const sunriseIcon: LoadedIconFunction = createIcon(
  "sunrise",
  iconDefinition,
);
