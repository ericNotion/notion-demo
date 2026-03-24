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
      <path d="M17.5 9.0625V9.6875L9.6875 17.5H9.0625V16.5625C9.0625 12.4219 12.4219 9.0625 16.5625 9.0625H17.5ZM16.5625 7.8125H17.175C16.2375 4.7375 13.3813 2.5 10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 13.3813 4.7375 16.2375 7.8125 17.175V16.5625C7.8125 11.7375 11.7375 7.8125 16.5625 7.8125Z" />
    </>
  ),
};

export const stickerIcon: LoadedIconFunction = createIcon(
  "sticker",
  iconDefinition,
);
