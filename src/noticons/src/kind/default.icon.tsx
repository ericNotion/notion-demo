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
      <path d="M12.0281 10H7.5V2.5H15V8.125H13.1125L12.0312 10H12.0281ZM6.25 11.25V6.875C3.83437 6.875 1.875 8.83437 1.875 11.25C1.875 13.6656 3.83437 15.625 6.25 15.625C8.66562 15.625 10.625 13.6656 10.625 11.25H6.25ZM14.9156 9.375H13.8344L10.0469 15.9375C10.2875 16.3531 10.3469 16.4594 10.5875 16.875H18.1656C18.4062 16.4594 18.4656 16.3531 18.7062 15.9375L14.9187 9.375H14.9156Z" />
    </>
  ),
};

export const kindIcon: LoadedIconFunction = createIcon("kind", iconDefinition);
