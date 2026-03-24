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
      <path d="M9.375 5.625L14.375 10.625L11.875 13.125H9.52812L4.52812 18.125L1.875 15.4719L6.875 10.4719V8.125L9.375 5.625ZM13.125 1.02187L11.9406 0.625L10.625 4.56875L11.8094 4.96563L13.125 1.02187ZM18.9781 6.875L15.0344 8.19062L15.4313 9.375L19.375 8.05938L18.9781 6.875ZM17.5 3.38438L16.6156 2.5L13.4375 5.67812L14.3219 6.5625L17.5 3.38438Z" />
    </>
  ),
};

export const flashlightIcon: LoadedIconFunction = createIcon(
  "flashlight",
  iconDefinition,
);
