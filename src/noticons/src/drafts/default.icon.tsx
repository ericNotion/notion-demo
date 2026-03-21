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
      <path d="M11.875 5.9375H1.25V4.0625H11.875V5.9375ZM1.25 15.9375H5.625V14.0625H1.25V15.9375ZM8.75 9.0625H1.25V10.9375H8.75V9.0625ZM9.375 12.4781L8.125 15.4969L8.56563 15.9375L11.5844 14.6875L16.95 9.32188L14.7406 7.1125L9.375 12.4781ZM17.7906 4.0625L15.625 6.22813L17.8344 8.4375L20 6.27187L17.7906 4.0625Z" />
    </>
  ),
};

export const draftsIcon: LoadedIconFunction = createIcon(
  "drafts",
  iconDefinition,
);
