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
      <path d="M18.75 7.90937V11.875C18.75 13.8031 17.5531 15 15.625 15H15V13.125H15.625C16.3969 13.125 16.875 12.6469 16.875 11.875C16.875 11.1031 16.3969 10.625 15.625 10.625H13.75V15.7625C14.1438 15.9562 14.375 16.3438 14.375 16.875V17.5H10.625V13.125H6.875V15.7625C7.26875 15.9562 7.5 16.3438 7.5 16.875V17.5H3.75V11.875L2.5 10.625V13.75H1.25V9.375C1.25 7.30312 2.92812 5.625 5 5.625H10C10 4.08125 10.9563 3.125 12.5 3.125H13.9656C14.7062 3.125 15.2094 3.33438 15.7344 3.85625L18.0187 6.14062C18.5438 6.66562 18.75 7.16875 18.75 7.90937Z" />
    </>
  ),
};

export const elephantIcon: LoadedIconFunction = createIcon(
  "elephant",
  iconDefinition,
);
