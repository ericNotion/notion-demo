import { atomWithStorage } from "jotai/utils";

const STORAGE_KEY = "has-dismissed-get-started-banner";

/**
 * Tracks whether the get started banner has been dismissed.
 * true = banner is dismissed/hidden
 * false = banner should show (if other conditions are met)
 */
export const getStartedBannerDismissedAtom = atomWithStorage(
  STORAGE_KEY,
  false,
);
