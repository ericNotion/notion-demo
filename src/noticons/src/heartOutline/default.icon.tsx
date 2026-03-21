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
      <path d="M13.75 3.125C12.2125 3.125 10.6938 4.0875 10 5.37812C9.30625 4.0875 7.7875 3.125 6.25 3.125C4.00625 3.125 2.1875 4.83125 2.1875 7.5C2.1875 12.3687 6.1125 15.2344 9.375 17.5H10.625C13.8875 15.2344 17.8125 12.3687 17.8125 7.5C17.8125 4.83125 15.9937 3.125 13.75 3.125ZM10 15.6531C6.72813 13.3469 4.0625 11.0563 4.0625 7.5C4.0625 5.98125 4.92188 5 6.25 5C7.57812 5 8.17188 5.80312 10 7.96562C11.8281 5.80312 12.4469 5 13.75 5C15.0781 5 15.9375 5.98125 15.9375 7.5C15.9375 11.0563 13.2719 13.3469 10 15.6531Z" />
    </>
  ),
};

export const heartOutlineIcon: LoadedIconFunction = createIcon(
  "heartOutline",
  iconDefinition,
);
