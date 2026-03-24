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
      <path d="M13.75 7.5L10.625 4.375V3.125L13.125 1.875V0.625H9.375V4.375L6.25 7.5H2.5V16.875H8.75V13.75C8.75 12.9781 9.22813 12.5 10 12.5C10.7719 12.5 11.25 12.9781 11.25 13.75V16.875H17.5V7.5H13.75ZM6.875 15H4.375V13.125H6.875V15ZM6.875 11.25H4.375V9.375H6.875V11.25ZM10 10.625C9.30937 10.625 8.75 10.0656 8.75 9.375C8.75 8.68437 9.30937 8.125 10 8.125C10.6906 8.125 11.25 8.68437 11.25 9.375C11.25 10.0656 10.6906 10.625 10 10.625ZM15.625 15H13.125V13.125H15.625V15ZM15.625 11.25H13.125V9.375H15.625V11.25Z" />
    </>
  ),
};

export const schoolIcon: LoadedIconFunction = createIcon(
  "school",
  iconDefinition,
);
