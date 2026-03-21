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
      <path d="M16.875 8.125L10.625 1.875V0.625H9.375V1.875L3.125 8.125H1.875V9.375H3.125L9.375 15.625V16.5625C9.375 17.9094 10.2156 18.75 11.5625 18.75H15V17.5H11.5625C10.9844 17.5 10.625 17.1406 10.625 16.5625V15.625L16.875 9.375H18.125V8.125H16.875ZM9.375 8.125H4.89375L9.375 3.64375V8.125ZM10.625 13.8562V9.375H15.1062L10.625 13.8562Z" />
    </>
  ),
};

export const kiteIcon: LoadedIconFunction = createIcon("kite", iconDefinition);
