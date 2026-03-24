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
      <path d="M17.5 3.75V6.25H15.625V9.375C15.625 10.2531 15.3281 10.8469 14.625 11.375L10.625 14.375V16.25H11.875V17.5H8.125V16.25H9.375V14.375H8.125C6.58125 14.375 5.625 13.4187 5.625 11.875H5C3.45625 11.875 2.5 10.9187 2.5 9.375V4.375H3.75C5.29375 4.375 6.25 5.33125 6.25 6.875V8.125H11.25L13.0312 5.00938C13.5281 4.14063 14.2 3.75 15.2031 3.75H15.6281V2.5H16.2531C17.025 2.5 17.5031 2.97812 17.5031 3.75H17.5Z" />
    </>
  ),
};

export const chickenIcon: LoadedIconFunction = createIcon(
  "chicken",
  iconDefinition,
);
