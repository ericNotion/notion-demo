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
      <path d="M11.4531 5.62495L13.1312 8.97808L10.9375 10.075V17.5H9.06249V11.0125L6.67811 12.2062L6.25936 11.3687L3.34061 12.8281L2.50311 11.15L5.42186 9.69058L5.00311 8.85308L11.4562 5.62495H11.4531ZM15.625 2.49995C14.1 2.49995 12.8344 3.59058 12.5562 5.03433L14.2531 8.42808C14.6687 8.6312 15.1312 8.74683 15.6219 8.74683C17.3469 8.74683 18.7469 7.34683 18.7469 5.62183C18.7469 3.89683 17.3469 2.49683 15.6219 2.49683L15.625 2.49995Z" />
    </>
  ),
};

export const musicArtistIcon: LoadedIconFunction = createIcon(
  "musicArtist",
  iconDefinition,
);
