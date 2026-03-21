import { tool } from "ai";
import Exa from "exa-js";
import { z } from "zod";

// Types for better type safety
interface ExaResult {
  answer: string;
  citations: Array<{
    title: string | null;
    url: string;
    favicon?: string;
    [key: string]: unknown;
  }>;
}

interface ExaError extends Error {
  statusCode?: number;
}

interface QueueItem {
  query: string;
  resolve: (result: ExaResult) => void;
  reject: (error: unknown) => void;
  retryCount: number;
  timestamp: number;
}

interface RateLimiterStats {
  totalRequests: number;
  successfulRequests: number;
  failedRequests: number;
  retryAttempts: number;
  currentQueueSize: number;
  averageRequestTime: number;
  lastRequestTime: number;
}

class ExaRateLimiter {
  private queue: QueueItem[] = [];
  private processing = false;
  private lastRequestTime = 0;
  private MIN_INTERVAL: number;
  private MAX_RETRIES: number;
  private RETRY_DELAY: number;
  private stats: RateLimiterStats;
  private exa: Exa;

  constructor(
    options: {
      apiKey?: string;
      minInterval?: number; // milliseconds between requests
      maxRetries?: number;
      retryDelay?: number; // base retry delay in milliseconds
    } = {},
  ) {
    this.MIN_INTERVAL = options.minInterval ?? 500; // 500ms = 2 requests per second
    this.MAX_RETRIES = options.maxRetries ?? 3;
    this.RETRY_DELAY = options.retryDelay ?? 1000;
    this.exa = new Exa(options.apiKey || process.env.EXA_API_KEY);

    this.stats = {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      retryAttempts: 0,
      currentQueueSize: 0,
      averageRequestTime: 0,
      lastRequestTime: 0,
    };
  }

  async search(query: string): Promise<ExaResult> {
    this.stats.totalRequests++;
    this.stats.currentQueueSize++;

    return new Promise((resolve, reject) => {
      this.queue.push({
        query,
        resolve,
        reject,
        retryCount: 0,
        timestamp: Date.now(),
      });
      this.processQueue();
    });
  }

  private async processQueue() {
    if (this.processing || this.queue.length === 0) {
      return;
    }

    this.processing = true;

    while (this.queue.length > 0) {
      const item = this.queue.shift()!;
      this.stats.currentQueueSize--;
      const startTime = Date.now();

      try {
        // Enforce rate limit
        const now = Date.now();
        const timeSinceLastRequest = now - this.lastRequestTime;

        if (timeSinceLastRequest < this.MIN_INTERVAL) {
          const delay = this.MIN_INTERVAL - timeSinceLastRequest;
          console.log(
            `[ExaRateLimiter] Rate limiting: waiting ${delay}ms before next request`,
          );
          await new Promise((resolve) => setTimeout(resolve, delay));
        }

        console.log(
          `[ExaRateLimiter] Processing query: "${item.query.substring(0, 50)}..." (attempt ${item.retryCount + 1})`,
        );

        this.lastRequestTime = Date.now();
        this.stats.lastRequestTime = this.lastRequestTime;

        const result = await this.exa.answer(item.query);

        // Update stats
        const requestTime = Date.now() - startTime;
        this.stats.successfulRequests++;
        this.stats.averageRequestTime =
          (this.stats.averageRequestTime * (this.stats.successfulRequests - 1) +
            requestTime) /
          this.stats.successfulRequests;

        console.log(
          `[ExaRateLimiter] Successfully processed query in ${requestTime}ms`,
        );

        // Ensure answer is a string
        const formattedResult: ExaResult = {
          answer:
            typeof result.answer === "string"
              ? result.answer
              : JSON.stringify(result.answer),
          citations: result.citations || [],
        };

        item.resolve(formattedResult);
      } catch (error: unknown) {
        console.error(`[ExaRateLimiter] Error processing query:`, error);

        // Check if it's a rate limit error
        const exaError = error as ExaError;
        if (
          exaError?.statusCode === 429 &&
          item.retryCount < this.MAX_RETRIES
        ) {
          console.log(
            `[ExaRateLimiter] Rate limit hit, retrying in ${this.RETRY_DELAY * (item.retryCount + 1)}ms`,
          );

          this.stats.retryAttempts++;

          // Exponential backoff
          const delay = this.RETRY_DELAY * Math.pow(2, item.retryCount);
          await new Promise((resolve) => setTimeout(resolve, delay));

          // Increment retry count and re-queue
          item.retryCount++;
          this.queue.unshift(item); // Put back at front of queue
          this.stats.currentQueueSize++;
          continue;
        }

        // If it's not a rate limit error or we've exceeded retries, reject
        this.stats.failedRequests++;
        item.reject(error);
      }
    }

    this.processing = false;
  }

  getStats(): RateLimiterStats {
    return { ...this.stats };
  }

  clearStats(): void {
    this.stats = {
      totalRequests: 0,
      successfulRequests: 0,
      failedRequests: 0,
      retryAttempts: 0,
      currentQueueSize: this.queue.length,
      averageRequestTime: 0,
      lastRequestTime: this.lastRequestTime,
    };
  }

  // Method to adjust rate limiting on the fly
  updateSettings(options: {
    minInterval?: number;
    maxRetries?: number;
    retryDelay?: number;
  }): void {
    if (options.minInterval !== undefined) {
      this.MIN_INTERVAL = options.minInterval;
    }
    if (options.maxRetries !== undefined) {
      this.MAX_RETRIES = options.maxRetries;
    }
    if (options.retryDelay !== undefined) {
      this.RETRY_DELAY = options.retryDelay;
    }

    console.log(`[ExaRateLimiter] Updated settings:`, {
      minInterval: this.MIN_INTERVAL,
      maxRetries: this.MAX_RETRIES,
      retryDelay: this.RETRY_DELAY,
    });
  }
}

// Global shared instance with default settings
const globalExaRateLimiter = new ExaRateLimiter();

// Shared Exa web search tool implementation
export const exaWebSearch = tool({
  description:
    "Search the web for up-to-date information. Rate limited to prevent API errors.",
  parameters: z.object({
    query: z.string().min(1).max(300).describe("The search query"),
  }),
  execute: async ({ query }) => {
    try {
      console.log(`[ExaWebSearch] Queuing search for: "${query}"`);
      const { answer, citations } = await globalExaRateLimiter.search(query);

      console.log(
        `[ExaWebSearch] Search completed successfully for: "${query}"`,
      );
      return {
        answer,
        citations,
      };
    } catch (error: unknown) {
      console.error(`[ExaWebSearch] Search failed for: "${query}"`, error);

      // Provide a helpful error message based on the error type
      let errorMessage = "I'm sorry, I couldn't search for that information.";

      const exaError = error as ExaError;
      if (exaError?.statusCode === 429) {
        errorMessage =
          "Web search is temporarily rate limited. Please try again in a moment.";
      } else if (exaError?.statusCode === 401) {
        errorMessage = "Web search is not configured properly.";
      } else if (exaError?.statusCode && exaError.statusCode >= 500) {
        errorMessage = "Web search service is temporarily unavailable.";
      }

      return {
        answer: errorMessage,
        citations: [],
        error: error instanceof Error ? error.message : "Unknown error",
      };
    }
  },
});
