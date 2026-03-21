/**
 * TypeScript schema for prototype metadata.json files.
 *
 * Each prototype can have a metadata.json file in its directory with:
 * - title: Display name for the prototype
 * - description: Optional short description
 * - externalUrl: Optional link to external prototype (for non-local prototypes)
 * - versionGroupId: Shared ID linking all versions together
 * - version: Version number (1, 2, 3...)
 * - branchedFromVersion: Which version this was created from
 */

export interface PrototypeMetadataJson {
  title: string;
  description?: string;
  externalUrl?: string;
  // Version fields
  versionGroupId?: string;
  version?: number;
  branchedFromVersion?: number;
}

/**
 * Read metadata.json and return typed result
 */
export function parseMetadataJson(content: string): PrototypeMetadataJson {
  const parsed = JSON.parse(content);
  return {
    title: parsed.title || "",
    description: parsed.description,
    externalUrl: parsed.externalUrl,
    versionGroupId: parsed.versionGroupId,
    version: parsed.version,
    branchedFromVersion: parsed.branchedFromVersion,
  };
}
