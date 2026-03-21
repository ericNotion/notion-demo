import type {
  DatabaseObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

import { getAllBlocks } from "./blocks";
import { notion } from "./client";
import { type Guide, type GuideWithContent, hasProperties } from "./types";

// Cache for database ID -> data source ID mapping
const dataSourceIdCache = new Map<string, string>();

async function getDataSourceId(databaseId: string): Promise<string> {
  if (dataSourceIdCache.has(databaseId)) {
    return dataSourceIdCache.get(databaseId)!;
  }

  const database = (await notion.databases.retrieve({
    database_id: databaseId,
  })) as DatabaseObjectResponse;

  const dataSourceId = database.data_sources[0]?.id;
  if (!dataSourceId) {
    throw new Error(`No data source found for database ${databaseId}`);
  }

  dataSourceIdCache.set(databaseId, dataSourceId);
  return dataSourceId;
}

// ===== Guides Database =====

export async function getGuides(): Promise<Guide[]> {
  try {
    const databaseId = process.env.NOTION_GUIDES_DATABASE_ID || "";
    const notionToken = process.env.NOTION_TOKEN || "";

    if (!databaseId) {
      console.warn("NOTION_GUIDES_DATABASE_ID is not set");
      return [];
    }
    if (!notionToken) {
      console.warn("NOTION_TOKEN is not set");
      return [];
    }

    const dataSourceId = await getDataSourceId(databaseId);
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter: {
        property: "Published",
        date: {
          is_not_empty: true,
        },
      },
      sorts: [
        {
          property: "Order",
          direction: "ascending",
        },
      ],
    });

    const items = response.results.map((page) => {
      if (!hasProperties(page)) return null;

      const pageWithProps = page as PageObjectResponse;
      const properties = pageWithProps.properties as {
        Name?: { title: { plain_text: string }[] };
        Slug?: { rich_text: { plain_text: string }[] };
        Description?: { rich_text: { plain_text: string }[] };
        Published?: { date: { start: string } | null };
        Updated?: { date: { start: string } | null };
        "Header Image Light"?: {
          files: Array<
            | { type: "file"; file: { url: string } }
            | { type: "external"; external: { url: string } }
          >;
        };
        "Header Image Dark"?: {
          files: Array<
            | { type: "file"; file: { url: string } }
            | { type: "external"; external: { url: string } }
          >;
        };
      };

      const slug = properties.Slug?.rich_text[0]?.plain_text || "";

      // Skip guides without a slug
      if (!slug) return null;

      // Extract image URLs from file properties
      const lightImageFile = properties["Header Image Light"]?.files[0];
      const darkImageFile = properties["Header Image Dark"]?.files[0];
      const headerImageLight = lightImageFile
        ? lightImageFile.type === "file"
          ? lightImageFile.file.url
          : lightImageFile.external.url
        : undefined;
      const headerImageDark = darkImageFile
        ? darkImageFile.type === "file"
          ? darkImageFile.file.url
          : darkImageFile.external.url
        : undefined;

      return {
        id: pageWithProps.id,
        title: properties.Name?.title[0]?.plain_text || "Untitled",
        slug,
        description: properties.Description?.rich_text[0]?.plain_text,
        publishedAt: properties.Published?.date?.start,
        updatedAt:
          properties.Updated?.date?.start || pageWithProps.last_edited_time,
        headerImageLight,
        headerImageDark,
      } as Guide;
    });

    return items.filter((item): item is Guide => item !== null);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`Unable to fetch guides from Notion: ${message}`);
    return [];
  }
}

export async function getGuideBySlug(
  slug: string,
): Promise<GuideWithContent | null> {
  try {
    const databaseId = process.env.NOTION_GUIDES_DATABASE_ID || "";
    const notionToken = process.env.NOTION_TOKEN || "";

    if (!databaseId) {
      console.warn("NOTION_GUIDES_DATABASE_ID is not set");
      return null;
    }
    if (!notionToken) {
      console.warn("NOTION_TOKEN is not set");
      return null;
    }

    const dataSourceId = await getDataSourceId(databaseId);
    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    });

    if (response.results.length === 0) {
      return null;
    }

    const page = response.results[0];
    if (!hasProperties(page)) return null;

    const pageWithProps = page as PageObjectResponse;
    const properties = pageWithProps.properties as {
      Name?: { title: { plain_text: string }[] };
      Slug?: { rich_text: { plain_text: string }[] };
      Description?: { rich_text: { plain_text: string }[] };
      Published?: { date: { start: string } | null };
      Updated?: { date: { start: string } | null };
    };

    const blocks = await getAllBlocks(pageWithProps.id);

    return {
      id: pageWithProps.id,
      title: properties.Name?.title[0]?.plain_text || "Untitled",
      slug: properties.Slug?.rich_text[0]?.plain_text || slug,
      description: properties.Description?.rich_text[0]?.plain_text,
      publishedAt: properties.Published?.date?.start,
      updatedAt:
        properties.Updated?.date?.start || pageWithProps.last_edited_time,
      blocks,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(`Unable to fetch guide "${slug}" from Notion: ${message}`);
    return null;
  }
}

// Get all guide slugs for static generation
export async function getAllGuideSlugs(): Promise<string[]> {
  const guides = await getGuides();
  return guides.map((guide) => guide.slug).filter(Boolean);
}
