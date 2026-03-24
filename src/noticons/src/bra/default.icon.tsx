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
      <path d="M18.125 12.3438C18.125 14.5 16.375 16.25 14.2188 16.25C12.8062 16.25 11.5719 15.4969 10.8875 14.375H9.1125C8.425 15.4969 7.19375 16.25 5.78125 16.25C3.625 16.25 1.875 14.5 1.875 12.3438C1.875 11.5219 2.06563 10.7125 2.43437 9.975L3.4375 7.96875V2.5H5.3125V7.96875L9.21875 11.875H10.7812L14.6875 7.96875V2.5H16.5625V7.96875L17.5656 9.975C17.9344 10.7094 18.125 11.5219 18.125 12.3438Z" />
    </>
  ),
};

export const braIcon: LoadedIconFunction = createIcon("bra", iconDefinition);
