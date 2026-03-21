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
      <path d="M12.5 2.5C9.7375 2.5 7.5 4.7375 7.5 7.5C7.5 8.15 7.62812 8.76563 7.85312 9.33438L2.5 14.6875V17.5H5.3125L5.9375 16.875V15.3125H7.5L8.125 14.6875V13.125H9.6875L10.6656 12.1469C11.2344 12.3719 11.8531 12.5 12.5 12.5C15.2625 12.5 17.5 10.2625 17.5 7.5C17.5 4.7375 15.2625 2.5 12.5 2.5ZM14.0625 6.875C13.5437 6.875 13.125 6.45625 13.125 5.9375C13.125 5.41875 13.5437 5 14.0625 5C14.5813 5 15 5.41875 15 5.9375C15 6.45625 14.5813 6.875 14.0625 6.875Z" />
    </>
  ),
};

export const keyIcon: LoadedIconFunction = createIcon("key", iconDefinition);
