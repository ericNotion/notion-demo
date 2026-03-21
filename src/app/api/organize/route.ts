import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { z } from "zod";

export const maxDuration = 30;

const OrganizedResultSchema = z.object({
  clusters: z.array(
    z.object({
      name: z.string().describe("Name of the topic cluster (3-5 words)"),
      description: z
        .string()
        .describe("Brief description of what this cluster contains"),
      pages: z
        .array(z.string())
        .describe("Array of page titles that belong in this cluster"),
    }),
  ),
});

export async function GET() {
  return Response.json({ message: "Organize endpoint working", method: "GET" });
}

export async function POST(req: Request) {
  console.log("=== AI ORGANIZE REQUEST ===");

  try {
    // Debug environment variables
    console.log("Environment check:");
    console.log("- NODE_ENV:", process.env.NODE_ENV);
    console.log("- OPENAI_API_KEY exists:", !!process.env.OPENAI_API_KEY);
    console.log("- OPENAI_API_KEY length:", process.env.OPENAI_API_KEY?.length);
    console.log(
      "- All env keys:",
      Object.keys(process.env).filter((key) => key.includes("OPENAI")),
    );

    // Check API key
    if (!process.env.OPENAI_API_KEY) {
      console.error("OPENAI_API_KEY not found");
      return Response.json(
        { error: "API key not configured" },
        { status: 500 },
      );
    }

    const body = await req.json();
    const { pageTitles } = body;

    if (!pageTitles?.length) {
      return Response.json(
        { error: "No pageTitles provided" },
        { status: 400 },
      );
    }

    console.log("Processing", pageTitles.length, "page titles with AI");

    const systemPrompt = `You are an expert at organizing documents and creating logical topic clusters based on CONTENT DOMAIN, not document type or format.

Your task is to analyze a list of page titles and organize them into 3-7 meaningful topic clusters.

Guidelines:
- Create 3-7 clusters (no more, no less)
- Each cluster should contain 2+ pages (redistribute if needed)
- Cluster names should be 3-5 words, descriptive, professional, and specific to the content domain
- Every input page MUST be assigned to exactly one cluster
- Choose cluster names that clearly indicate the CONTENT DOMAIN

Examples of good cluster names:
- "Strategic Planning"  
- "Engineering"
- "User Research"
- "Design"
- "Marketing"
- "Enterprise"
- "DevOps"

You can also find topics that are specific to the user's interests, that are not necessarily the cluster names above.`;

    const userPrompt = `Please organize these ${pageTitles.length} page titles into logical topic clusters:

${pageTitles.map((title: string, i: number) => `${i + 1}. ${title}`).join("\n")}

Return a JSON object with clusters containing name, description, and pages arrays. Every page title must be assigned to exactly one cluster.`;

    console.log("Calling OpenAI API...");
    const result = await generateObject({
      model: openai("gpt-4o-mini"),
      system: systemPrompt,
      prompt: userPrompt,
      schema: OrganizedResultSchema,
    });

    const organizedResult = result.object as z.infer<
      typeof OrganizedResultSchema
    >;

    // Verify all pages were assigned
    const assignedPages = new Set();
    organizedResult.clusters.forEach((cluster) => {
      cluster.pages.forEach((page) => assignedPages.add(page));
    });

    const unassignedPages = pageTitles.filter(
      (title: string) => !assignedPages.has(title),
    );
    if (unassignedPages.length > 0) {
      console.warn("Unassigned pages:", unassignedPages);
      // Add unassigned pages to the first cluster as fallback
      if (organizedResult.clusters.length > 0) {
        organizedResult.clusters[0].pages.push(...unassignedPages);
      }
    }

    console.log(
      "AI organized into",
      organizedResult.clusters.length,
      "clusters",
    );
    return Response.json(organizedResult);
  } catch (error) {
    console.error("Error organizing with AI:", error);
    return Response.json(
      { error: "Failed to organize pages" },
      { status: 500 },
    );
  }
}
