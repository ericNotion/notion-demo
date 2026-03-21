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
      <path d="M7.1875 5.18125V2.5H4.6875V5.18125C3.3125 5.60625 2.5 6.77187 2.5 8.4375V17.5H9.375V8.4375C9.375 6.77187 8.5625 5.60625 7.1875 5.18125ZM7.5 12.5H4.375V10H7.5V12.5ZM15.3125 5.18125V2.5H12.8125V5.18125C11.4375 5.60625 10.625 6.77187 10.625 8.4375V17.5H17.5V8.4375C17.5 6.77187 16.6875 5.60625 15.3125 5.18125ZM15.625 15.625H12.5V12.5H15.625V15.625ZM15.625 10H12.5V8.4375C12.5 7.47188 13.0969 6.875 14.0625 6.875C15.0281 6.875 15.625 7.47188 15.625 8.4375V10Z" />
    </>
  ),
};

export const hairCareIcon: LoadedIconFunction = createIcon(
  "hairCare",
  iconDefinition,
);
