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
      <path d="M6.90625 11.6469L6.02188 12.5312L3.8125 10.3219L4.69687 9.4375L6.90625 11.6469ZM1.875 16.25H5V15H1.875V16.25ZM10 11.875C7.92812 11.875 6.25 13.5531 6.25 15.625V16.25H13.75V15.625C13.75 13.5531 12.0719 11.875 10 11.875ZM15 15V16.25H18.125V15H15ZM15.3031 9.4375L13.0938 11.6469L13.9781 12.5312L16.1875 10.3219L15.3031 9.4375ZM14.0625 6.50938L13.1781 5.625L10.625 8.17812V2.5H9.375V8.17812L6.82188 5.625L5.9375 6.50938L10 10.5719L14.0625 6.50938Z" />
    </>
  ),
};

export const sunsetIcon: LoadedIconFunction = createIcon(
  "sunset",
  iconDefinition,
);
