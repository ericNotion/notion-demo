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
      <path d="M10.9375 9.21875V8.70312L11.5375 8.40312C12.7094 7.81562 13.4375 6.64062 13.4375 5.3125C13.4375 3.41562 11.8969 1.875 10 1.875C8.10313 1.875 6.5625 3.41562 6.5625 5.3125H8.4375C8.4375 4.45 9.1375 3.75 10 3.75C10.8625 3.75 11.5625 4.45 11.5625 5.33125C11.5625 5.92812 11.2313 6.4625 10.7 6.72813L9.0625 7.54688V9.21875L1.875 12.8125V16.875H18.125V12.8125L10.9375 9.21875ZM16.25 15H3.75V13.9719L10 10.8469L16.25 13.9719V15Z" />
    </>
  ),
};

export const hangerIcon: LoadedIconFunction = createIcon(
  "hanger",
  iconDefinition,
);
