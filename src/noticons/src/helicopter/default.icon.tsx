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
      <path d="M19.0312 13.2843L16.6531 9.3187C15.8969 8.0562 14.9094 7.49683 13.4375 7.49683H12.1875V5.62183H18.75V4.37183H3.75V5.62183H10.3125V7.49683H2.8125L1.875 5.62183H0L0.703125 8.43433L0 11.2468H1.875L2.8125 9.37183H6.09375L9.21562 14.4593C9.97812 15.7 10.9563 16.2468 12.4125 16.2468H17.3531C18.5969 16.2468 19.3781 15.4406 19.3781 14.4468C19.3781 14.075 19.2687 13.675 19.0344 13.2843H19.0312ZM12.1875 12.5V9.37495H13.4375C14.0969 9.37495 14.7063 9.72183 15.0469 10.2843L16.375 12.5H12.1906H12.1875Z" />
    </>
  ),
};

export const helicopterIcon: LoadedIconFunction = createIcon(
  "helicopter",
  iconDefinition,
);
