import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const primarySidebarAtom = atomWithStorage<boolean>(
  "primary-sidebar-open-state",
  true,
);

export const primarySidebarWidthAtom = atomWithStorage<number>(
  "primary-sidebar-width",
  240,
);

export type CollapsibleGroupId =
  | "agents"
  | "favorites"
  | "private"
  | "shared"
  | "teamspaces"
  | "app-views"
  | "app-data"
  | "app-automations";

export const collapsibleGroupsAtom = atomWithStorage<
  Record<CollapsibleGroupId, boolean>
>("collapsible-groups-state", {
  agents: true,
  favorites: true,
  private: false,
  shared: false,
  teamspaces: false,
  "app-views": true,
  "app-data": true,
  "app-automations": true,
});

export const collapseAllGroupsAtom = atom(null, (get, set) => {
  const groups = get(collapsibleGroupsAtom);

  const newState = Object.keys(groups).reduce(
    (acc, key) => {
      acc[key as CollapsibleGroupId] = false;
      return acc;
    },
    {} as Record<CollapsibleGroupId, boolean>,
  );

  set(collapsibleGroupsAtom, newState);
});
