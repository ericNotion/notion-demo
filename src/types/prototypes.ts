export type Prototype = {
  slug: string;
  title: string;
  description?: string;
  createdAt: Date;
  updatedAt?: Date;
  hasLocalChanges?: boolean;
  externalUrl?: string;
  // Version fields
  versionGroupId?: string; // Shared ID across all versions (e.g., "brian/my-prototype")
  version?: number; // Version number (1, 2, 3...)
  branchedFromVersion?: number; // Which version this was branched from (enables tree structure)
};

export type UserPrototypes = {
  username: string;
  prototypes: Prototype[];
};
