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
      <path d="M17.5 10.625V8.125H15.5219C15.0906 5.5875 13.3094 3.9875 10.625 3.775V3.125L13.125 1.875V0.625H9.375V3.775C6.69063 3.9875 4.90937 5.5875 4.47812 8.125H2.5V10.625H4.375V14.375H2.5V16.875H17.5V14.375H15.625V10.625H17.5ZM6.875 10.625H8.75V14.375H6.875V10.625ZM13.125 14.375H11.25V10.625H13.125V14.375Z" />
    </>
  ),
};

export const governmentIcon: LoadedIconFunction = createIcon(
  "government",
  iconDefinition,
);
