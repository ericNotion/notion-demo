// Don't edit or remove this. It's a generic chat API route used in templates.
// Feel free to copy + remix!

import { exaWebSearch } from "@/lib/exa-rate-limiter";
import { openai } from "@ai-sdk/openai";
import { assertString } from "@jclem/assert";
import { streamText } from "ai";
export const maxDuration = 30;

export async function POST(req: Request) {
  assertString(process.env.OPENAI_API_KEY, "OPENAI_API_KEY is not set");
  assertString(process.env.EXA_API_KEY, "EXA_API_KEY is not set");

  const {
    messages,
    modelId = "gpt-4.1-mini-2025-04-14",
    enableWebsearch,
  } = await req.json();

  const model = openai(modelId);

  const tools = {};

  if (enableWebsearch) {
    Object.assign(tools, { exaWebSearch });
  }

  try {
    const result = await streamText({
      model,
      tools,
      toolCallStreaming: true,
      messages,
    });

    return result.toDataStreamResponse({ sendReasoning: true });
  } catch (error) {
    // Enhanced error logging
    console.error("[POST] Error in chat route:", error);
    if (error instanceof Error) {
      console.error("[POST] Error stack:", error.stack);
    }
    // Log error response if it's an API error with a response property
    if (error && typeof error === "object" && "response" in error) {
      console.error("[POST] Error response:", error.response);
    }
    // Log model and provider info for debugging
    console.error("[POST] Model info:", {
      modelId,
      messages,
      tools,
    });
    return new Response("Internal Server Error", { status: 500 });
  }
}
