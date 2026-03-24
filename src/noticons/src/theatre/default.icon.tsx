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
      <path d="M14.375 2.5C14.375 2.5 13.2375 4.375 10 4.375C6.7625 4.375 5.625 2.5 5.625 2.5H3.75V11.9094C3.75 14.025 4.62187 15.4344 6.5125 16.3812L10 18.125L13.4875 16.3812C15.3813 15.4344 16.25 14.025 16.25 11.9094V2.5H14.375ZM6.25 9.44375V9.0625C6.25 8.09688 6.72813 7.5 7.5 7.5C8.27187 7.5 8.75 8.09688 8.75 9.0625V9.44375H6.25ZM10 14.6875C8.1 14.6875 6.5625 13.5688 6.5625 12.1875H13.4375C13.4375 13.5688 11.9 14.6875 10 14.6875ZM13.75 9.44375H11.25V9.0625C11.25 8.09688 11.7281 7.5 12.5 7.5C13.2719 7.5 13.75 8.09688 13.75 9.0625V9.44375Z" />
    </>
  ),
};

export const theatreIcon: LoadedIconFunction = createIcon(
  "theatre",
  iconDefinition,
);
