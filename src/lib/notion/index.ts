// Client
// Types
export type { Guide, ProcessedBlock, RichTextContent } from "./types";

// Queries (Guides)
export { getAllGuideSlugs, getGuideBySlug, getGuides } from "./queries";

// Blocks
// Prototypes
export {
  archivePrototype,
  batchCreatePrototypes,
  createPrototype,
  findPrototype,
  getAllPrototypes,
  getAllPrototypesIncludingArchived,
  isPrototypesDbConfigured,
  updatePrototype,
} from "./prototypes";
export type { CreatePrototypeInput, PrototypeMetadata } from "./prototypes";

// Generated Zod Schemas (from Notion database)
export {
  CreatePrototypeInputSchema,
  NotionWebhookPayloadSchema,
  PrototypeSchema,
  UpdatePrototypeInputSchema,
  parseWebhookPayload,
  safeValidateCreateInput,
  safeValidateUpdateInput,
  validateCreateInput,
  validateUpdateInput,
} from "./generated-schemas";
export type { NotionWebhookPayload } from "./generated-schemas";
