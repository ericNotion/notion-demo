/**
 * Version grouping utilities for prototype gallery display
 *
 * These utilities help:
 * - Group prototypes by versionGroupId
 * - Filter to show only latest versions (stacked view)
 * - Get all versions for a specific group
 */

import type { Prototype } from "@/types/prototypes";

export type PrototypeWithAuthor = Prototype & { username: string };

export interface VersionGroup {
  versionGroupId: string;
  versions: PrototypeWithAuthor[];
  latestVersion: PrototypeWithAuthor;
}

/**
 * Get the version group ID for a prototype
 * Falls back to username/slug if no explicit versionGroupId is set
 */
function getGroupId(proto: PrototypeWithAuthor): string {
  return proto.versionGroupId || `${proto.username}/${proto.slug}`;
}

/**
 * Group prototypes by their versionGroupId
 * Prototypes without a versionGroupId are treated as standalone (their own group)
 */
export function groupPrototypesByVersion(
  prototypes: PrototypeWithAuthor[],
): Map<string, VersionGroup> {
  const groups = new Map<string, VersionGroup>();

  for (const proto of prototypes) {
    const groupId = getGroupId(proto);

    if (!groups.has(groupId)) {
      groups.set(groupId, {
        versionGroupId: groupId,
        versions: [],
        latestVersion: proto,
      });
    }

    const group = groups.get(groupId)!;
    group.versions.push(proto);

    // Update latest version if this one has a higher version number
    const protoVersion = proto.version || 1;
    const latestVersion = group.latestVersion.version || 1;
    if (protoVersion > latestVersion) {
      group.latestVersion = proto;
    }
  }

  // Sort versions within each group by version number descending
  for (const group of groups.values()) {
    group.versions.sort((a, b) => (b.version || 1) - (a.version || 1));
  }

  return groups;
}

/**
 * Filter prototypes to show only the latest version of each group
 * This creates the "stacked" view where versions are collapsed
 */
export function getLatestVersions(
  prototypes: PrototypeWithAuthor[],
): PrototypeWithAuthor[] {
  const groups = groupPrototypesByVersion(prototypes);
  return Array.from(groups.values()).map((group) => group.latestVersion);
}

/**
 * Get the total count of versions for a prototype
 */
export function getVersionCount(
  prototype: PrototypeWithAuthor,
  allPrototypes: PrototypeWithAuthor[],
): number {
  const groupId = getGroupId(prototype);
  return allPrototypes.filter((p) => getGroupId(p) === groupId).length;
}

/**
 * Get all versions of a specific prototype (by versionGroupId)
 * Sorted by version number descending (latest first)
 */
export function getVersionsForPrototype(
  prototype: PrototypeWithAuthor,
  allPrototypes: PrototypeWithAuthor[],
): PrototypeWithAuthor[] {
  const groupId = getGroupId(prototype);
  return allPrototypes
    .filter((p) => getGroupId(p) === groupId)
    .sort((a, b) => (b.version || 1) - (a.version || 1));
}

/**
 * Check if a prototype has multiple versions
 */
export function hasMultipleVersions(
  prototype: PrototypeWithAuthor,
  allPrototypes: PrototypeWithAuthor[],
): boolean {
  return getVersionCount(prototype, allPrototypes) > 1;
}

/**
 * Check if a prototype is the latest version in its group
 */
export function isLatestVersion(
  prototype: PrototypeWithAuthor,
  allPrototypes: PrototypeWithAuthor[],
): boolean {
  const versions = getVersionsForPrototype(prototype, allPrototypes);
  if (versions.length === 0) return true;
  return versions[0].slug === prototype.slug;
}
