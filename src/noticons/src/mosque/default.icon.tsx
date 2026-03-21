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
      <path d="M2.5 5.625L3.75 8.125V16.875H1.25V8.125L2.5 5.625ZM17.5 5.625L16.25 8.125V16.875H18.75V8.125L17.5 5.625ZM15 5C15 3.125 12.5 1.875 10 0.625C7.5 1.875 5 3.125 5 5C5 6.0375 5.76875 6.88125 6.875 7.43125V8.125H5V16.875H8.75V13.75C8.75 12.9781 9.22813 12.5 10 12.5C10.7719 12.5 11.25 12.9781 11.25 13.75V16.875H15V8.125H13.125V7.43125C14.2312 6.88125 15 6.0375 15 5Z" />
    </>
  ),
};

export const mosqueIcon: LoadedIconFunction = createIcon(
  "mosque",
  iconDefinition,
);
