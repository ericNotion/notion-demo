import type {
  DataSourceObjectResponse,
  PageObjectResponse,
  PartialDataSourceObjectResponse,
  PartialPageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

// Re-export commonly used Notion SDK types
// Union type for query results from dataSources
export type QueryResultPage =
  | PageObjectResponse
  | PartialPageObjectResponse
  | DataSourceObjectResponse
  | PartialDataSourceObjectResponse;

// Utility type to extract rich text content
export type RichTextContent = {
  type: string;
  text: {
    content: string;
    link?: string | undefined;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
};

// Table row type for table blocks
export type TableRow = {
  id: string;
  cells: RichTextContent[][];
};

// Processed block type for rendering
export type ProcessedBlock = {
  id: string;
  type: string;
  content: RichTextContent[];
  language?: string;
  // Table-specific properties
  hasColumnHeader?: boolean;
  rows?: TableRow[];
  // Container block properties (callout, toggle, etc.)
  hasChildren?: boolean;
  children?: ProcessedBlock[];
  // Callout-specific
  icon?: string;
};

// Guide type for the guides database
export type Guide = {
  id: string;
  title: string;
  slug: string;
  description?: string;
  publishedAt?: string;
  updatedAt?: string;
  headerImageLight?: string;
  headerImageDark?: string;
};

// Guide with full content
export type GuideWithContent = Guide & {
  blocks: ProcessedBlock[];
};

// Type guard to check if a page has properties
export function hasProperties(
  page: QueryResultPage,
): page is PageObjectResponse {
  return "properties" in page && page.properties !== undefined;
}
