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
      <path d="M17.5 11.25V15.625H15.625C15.625 13.6969 14.4281 12.5 12.5 12.5H9.375V15.625H8.125L1.875 9.375L8.125 3.125H9.375V6.25H12.5C15.5844 6.25 17.5 8.16563 17.5 11.25Z" />
    </>
  ),
};

export const replyIcon: LoadedIconFunction = createIcon(
  "reply",
  iconDefinition,
);
