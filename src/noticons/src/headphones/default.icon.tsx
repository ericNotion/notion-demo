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
      <path d="M17.5 15H16.25V17.5H12.5V11.25H15.625V10C15.625 6.52813 13.4719 4.375 10 4.375C6.52813 4.375 4.375 6.52813 4.375 10V11.25H7.5V17.5H3.75V15H2.5V10C2.5 5.37187 5.37187 2.5 10 2.5C14.6281 2.5 17.5 5.37187 17.5 10V15Z" />
    </>
  ),
};

export const headphonesIcon: LoadedIconFunction = createIcon(
  "headphones",
  iconDefinition,
);
