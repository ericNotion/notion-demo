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
      <path d="M15 4.375H5C3.45625 4.375 2.5 5.33125 2.5 6.875V13.125C2.5 14.6687 3.45625 15.625 5 15.625H15C16.5437 15.625 17.5 14.6687 17.5 13.125V6.875C17.5 5.33125 16.5437 4.375 15 4.375ZM7.1875 6.25C8.15312 6.25 8.75 6.84687 8.75 7.8125C8.75 8.77812 8.15312 9.375 7.1875 9.375C6.22187 9.375 5.625 8.77812 5.625 7.8125C5.625 6.84687 6.22187 6.25 7.1875 6.25ZM4.375 13.125C4.375 11.3906 5.45312 10.3125 7.1875 10.3125C8.92188 10.3125 10 11.3906 10 13.125H4.375ZM15.625 11.875H11.875V10.625H15.625V11.875ZM15.625 9.375H10.625V8.125H15.625V9.375Z" />
    </>
  ),
};

export const cardIcon: LoadedIconFunction = createIcon("card", iconDefinition);
