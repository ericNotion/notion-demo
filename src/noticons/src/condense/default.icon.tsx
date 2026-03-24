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
      <path d="M2.49999 11.5625H8.43749V17.5H6.56249V14.7625L3.21874 18.1062L1.89374 16.7812L5.23749 13.4375H2.49999V11.5625ZM17.5 6.56249H14.7625L18.1062 3.21874L16.7812 1.89374L13.4375 5.23749V2.49999H11.5625V8.43749H17.5V6.56249ZM17.5 13.4375V11.5625H11.5625V17.5H13.4375V14.7625L16.7812 18.1062L18.1062 16.7812L14.7625 13.4375H17.5ZM6.56249 5.23749L3.21874 1.89374L1.89374 3.21874L5.23749 6.56249H2.49999V8.43749H8.43749V2.49999H6.56249V5.23749Z" />
    </>
  ),
};

export const condenseIcon: LoadedIconFunction = createIcon(
  "condense",
  iconDefinition,
);
