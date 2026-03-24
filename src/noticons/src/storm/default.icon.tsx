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
      <path d="M11.875 12.5H14.375V13.75L11.875 17.5H10.625V14.375H8.125V10H11.875V12.5ZM15.2937 7.525C15.3031 7.41563 15.3125 7.30312 15.3125 7.1875C15.3125 5.64375 14.3562 4.6875 12.8125 4.6875C12.6156 4.6875 12.4312 4.70312 12.2531 4.73438C11.75 3.32812 10.5031 2.5 8.75 2.5C6.4375 2.5 5 3.9375 5 6.25C5 6.27187 5 6.29063 5 6.30938C3.82812 6.5375 3.12187 7.42812 3.12187 8.75C3.12187 10.2937 4.07812 11.25 5.62187 11.25H6.87187V8.75H13.1219V11.25H14.9969C16.1531 11.25 16.8719 10.5312 16.8719 9.375C16.8719 8.32188 16.2719 7.6375 15.2906 7.525H15.2937Z" />
    </>
  ),
};

export const stormIcon: LoadedIconFunction = createIcon(
  "storm",
  iconDefinition,
);
