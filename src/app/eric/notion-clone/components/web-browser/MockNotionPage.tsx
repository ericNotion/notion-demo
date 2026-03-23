"use client";

import { Icon } from "@nds-icons";
import { linkIcon } from "@nds-icons/link/default.icon";
import { checkmarkIcon } from "@nds-icons/checkmark/default.icon";

export function MockNotionPage() {
  return (
    <div className="flex flex-1 flex-col overflow-auto bg-primary">
      <div className="mx-auto w-full max-w-4xl px-24 py-12">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="content-page-title mb-2 text-primary">
            Research Notes: Knowledge Management
          </h1>
          <div className="text-body text-tertiary">
            Collecting insights for the new documentation system
          </div>
        </div>

        {/* Content Blocks */}
        <div className="space-y-3">
          <p className="content-text-block text-primary">
            Exploring how modern organizations manage and share knowledge
            effectively. Key areas to research:
          </p>

          <ul className="ml-6 space-y-2">
            <li className="flex items-start gap-2">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
              <span className="content-text-block text-primary">
                Content management systems and document organization
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
              <span className="content-text-block text-primary">
                Collaboration tools and real-time sharing
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
              <span className="content-text-block text-primary">
                AI-assisted search and discovery
              </span>
            </li>
          </ul>

          {/* Divider */}
          <div className="my-6 h-px bg-secondary" />

          {/* Section Heading */}
          <h2 className="content-h2 mb-3 text-primary">Clipped Content</h2>

          {/* Clipped Quote Example */}
          <div className="group relative rounded-sm border border-primary bg-tertiary p-4 transition-colors hover:bg-secondary">
            <div className="mb-2 flex items-center gap-2">
              <Icon icon={linkIcon} color="tertiary" size="sm" />
              <a
                href="https://en.wikipedia.org/wiki/Knowledge_management"
                className="text-caption text-blue-primary hover:underline"
              >
                en.wikipedia.org/wiki/Knowledge_management
              </a>
            </div>
            <blockquote className="border-l-4 border-blue-primary pl-4">
              <p className="content-text-block italic text-primary">
                {"\u201C"}The most successful knowledge management initiatives are those
                that integrate seamlessly into existing workflows and foster a
                culture of continuous learning and sharing.{"\u201D"}
              </p>
            </blockquote>
          </div>

          {/* To-Do List */}
          <div className="mt-6">
            <h3 className="content-h3 mb-3 text-primary">Next Steps</h3>
            <div className="space-y-2">
              <div className="group flex items-start gap-2 rounded-sm px-2 py-1 transition-colors hover:bg-tertiary">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center">
                  <div className="flex h-4 w-4 items-center justify-center rounded-sm bg-blue-primary">
                    <Icon icon={checkmarkIcon} color="secondary" size="sm" />
                  </div>
                </div>
                <span className="content-text-block text-tertiary line-through">
                  Research knowledge management best practices
                </span>
              </div>
              <div className="group flex items-start gap-2 rounded-sm px-2 py-1 transition-colors hover:bg-tertiary">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center">
                  <div className="h-4 w-4 rounded-sm border-2 border-primary transition-colors group-hover:border-strong" />
                </div>
                <span className="content-text-block text-primary">
                  Document key findings and recommendations
                </span>
              </div>
              <div className="group flex items-start gap-2 rounded-sm px-2 py-1 transition-colors hover:bg-tertiary">
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center">
                  <div className="h-4 w-4 rounded-sm border-2 border-primary transition-colors group-hover:border-strong" />
                </div>
                <span className="content-text-block text-primary">
                  Share findings with the team
                </span>
              </div>
            </div>
          </div>

          {/* Placeholder for cursor */}
          <div className="mt-8 flex items-center gap-2 opacity-0">
            <div className="h-0.5 w-6 bg-blue-primary" />
            <span className="text-body text-tertiary">
              Click here to continue...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
