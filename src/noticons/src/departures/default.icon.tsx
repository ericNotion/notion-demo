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
      <path d="M18.0563 8.72188L8.275 11.1688C7.85313 11.275 7.55 11.2781 7.125 11.1844L3.43125 10.3625C3.06875 10.2813 2.84688 10.125 2.64688 9.8125L1.33438 7.74688L1.18125 7.14063L1.89063 6.96251C2.25 6.87188 2.51875 6.91251 2.8375 7.10313L5.425 8.65626L8.45625 7.89688L5.425 6.07813L5.27188 5.47188L6.65938 5.12501C7.19375 4.99063 7.5875 5.00938 8.10625 5.19688L12.7 6.8375L14.4625 6.39688C15.3406 6.17813 15.9906 6.22813 16.8281 6.57813L18.1719 7.14376C18.9969 7.49063 18.9125 8.50625 18.05 8.71876L18.0563 8.72188ZM2.5 17.5H12.5V15.625H2.5V17.5Z" />
    </>
  ),
};

export const departuresIcon: LoadedIconFunction = createIcon(
  "departures",
  iconDefinition,
);
