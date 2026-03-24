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
      <path d="M3.75 13.75H16.25V15.625C16.25 16.3969 15.7719 16.875 15 16.875H5C4.22812 16.875 3.75 16.3969 3.75 15.625V13.75ZM10 1.875C6.14375 1.875 3.75 4.26875 3.75 8.125H16.25C16.25 4.26875 13.8562 1.875 10 1.875ZM16.25 9.375H14.7844C14.0438 9.375 13.5406 9.58437 13.0156 10.1062L11.8719 11.25L10.7281 10.1062C10.2031 9.58125 9.7 9.375 8.95937 9.375H3.75C2.97812 9.375 2.5 9.85313 2.5 10.625V11.25C2.5 12.0219 2.97812 12.5 3.75 12.5H16.25C17.0219 12.5 17.5 12.0219 17.5 11.25V10.625C17.5 9.85313 17.0219 9.375 16.25 9.375Z" />
    </>
  ),
};

export const burgerIcon: LoadedIconFunction = createIcon(
  "burger",
  iconDefinition,
);
