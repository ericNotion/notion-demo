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
      <path d="M12.5 11.25H15V13.75H12.5V11.25ZM8.75 13.75H11.25V11.25H8.75V13.75ZM10.625 10H13.125V7.5H10.625V10ZM5.625 7.5H3.125V10H5.625V7.5ZM10 1.25C6.5 1.25 3.125 2.4125 3.125 4.59375V6.25H7.5V4.0625C7.7625 3.8375 8.42188 3.4375 10 3.4375C11.5781 3.4375 12.2375 3.8375 12.5 4.0625V6.25H16.875V4.59375C16.875 2.39687 13.475 1.25 10 1.25ZM14.375 10H16.875V7.5H14.375V10ZM3.125 17.5H16.875V15H3.125V17.5ZM6.875 10H9.375V7.5H6.875V10ZM5 13.75H7.5V11.25H5V13.75Z" />
    </>
  ),
};

export const symbolIcon: LoadedIconFunction = createIcon(
  "symbol",
  iconDefinition,
);
