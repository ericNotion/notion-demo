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
      <path d="M18.75 5.625V16.875H16.25V5.625C16.25 4.85313 16.7281 4.375 17.5 4.375C18.2719 4.375 18.75 4.85313 18.75 5.625ZM2.5 4.375C1.72812 4.375 1.25 4.85313 1.25 5.625V16.875H3.75V5.625C3.75 4.85313 3.27187 4.375 2.5 4.375ZM10 1.875L15 6.875V16.875H11.25V13.75C11.25 12.9781 10.7719 12.5 10 12.5C9.22813 12.5 8.75 12.9781 8.75 13.75V16.875H5V6.875L10 1.875ZM10.7219 6.875L10 5.625L9.27812 6.875H7.83437L8.55625 8.125L7.83437 9.375H9.27812L10 10.625L10.7219 9.375H12.1656L11.4437 8.125L12.1656 6.875H10.7219Z" />
    </>
  ),
};

export const synagogueIcon: LoadedIconFunction = createIcon(
  "synagogue",
  iconDefinition,
);
