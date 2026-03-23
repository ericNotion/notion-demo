"use client";

import { motion } from "motion/react";
import { cn } from "@/utils/cn";

interface MockWebContentProps {
  selectedText?: string;
  onTextSelect?: (text: string) => void;
}

export function MockWebContent({
  selectedText,
  onTextSelect,
}: MockWebContentProps) {
  const handleTextSelect = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      onTextSelect?.(selection.toString());
    }
  };

  return (
    <div
      className="flex-1 overflow-auto bg-primary px-8 py-6"
      onMouseUp={handleTextSelect}
    >
      <article className="mx-auto max-w-3xl">
        {/* Article Header */}
        <div className="mb-8 border-b border-primary pb-6">
          <h1 className="content-h1 mb-3 text-primary">
            Knowledge Management in Modern Organizations
          </h1>
          <div className="flex items-center gap-3 text-caption text-secondary">
            <span>March 23, 2026</span>
            <span>&bull;</span>
            <span>8 min read</span>
            <span>&bull;</span>
            <span>Wikipedia</span>
          </div>
        </div>

        {/* Article Content */}
        <div className="space-y-6">
          <p className="content-text-block text-primary">
            Knowledge management (KM) is the systematic process of creating,
            capturing, organizing, storing, and sharing knowledge within an
            organization. In the digital age, effective knowledge management has
            become crucial for maintaining competitive advantage and fostering
            innovation.
          </p>

          <motion.div
            className={cn(
              "rounded-sm bg-tertiary p-4",
              selectedText && "ring-2 ring-blue-primary"
            )}
            layout
          >
            <p className="content-text-block text-primary">
              The primary goal of knowledge management is to ensure that the
              right information reaches the right people at the right time,
              enabling better decision-making and increased productivity. This
              involves both explicit knowledge (documented information) and
              tacit knowledge (experience-based insights).
            </p>
          </motion.div>

          <h2 className="content-h2 mt-8 text-primary">Key Components</h2>

          <p className="content-text-block text-primary">
            Modern knowledge management systems typically include several core
            components:
          </p>

          <ul className="ml-6 space-y-2">
            <li className="content-text-block text-primary">
              <strong className="font-semibold">
                Content Management Systems:
              </strong>{" "}
              Centralized repositories for storing and organizing documents,
              files, and digital assets.
            </li>
            <li className="content-text-block text-primary">
              <strong className="font-semibold">Collaboration Tools:</strong>{" "}
              Platforms that enable teams to share information, communicate, and
              work together effectively.
            </li>
            <li className="content-text-block text-primary">
              <strong className="font-semibold">Search and Discovery:</strong>{" "}
              Advanced search capabilities that help users find relevant
              information quickly across large knowledge bases.
            </li>
          </ul>

          {/* Mock Image Placeholder */}
          <div className="my-8 overflow-hidden rounded-md border border-primary">
            <div className="flex h-64 items-center justify-center bg-secondary">
              <div className="text-center">
                <div className="text-body-lg font-semibold text-tertiary">
                  Knowledge Management Cycle
                </div>
                <div className="text-body text-tertiary">
                  [Diagram placeholder]
                </div>
              </div>
            </div>
          </div>

          <h2 className="content-h2 text-primary">Benefits and Challenges</h2>

          <p className="content-text-block text-primary">
            Organizations that implement effective knowledge management systems
            report significant improvements in efficiency, innovation, and
            employee satisfaction. However, challenges remain in maintaining
            up-to-date information and encouraging active participation from all
            team members.
          </p>

          <motion.blockquote
            className={cn(
              "my-6 border-l-4 border-blue-primary bg-blue-primary/5 py-3 pl-6 pr-4",
              selectedText?.includes("culture of continuous learning") &&
                "ring-2 ring-blue-primary"
            )}
            layout
          >
            <p className="content-text-block italic text-primary">
              &ldquo;The most successful knowledge management initiatives are those
              that integrate seamlessly into existing workflows and foster a
              culture of continuous learning and sharing.&rdquo;
            </p>
          </motion.blockquote>

          <p className="content-text-block text-primary">
            As organizations continue to generate increasing amounts of data and
            information, the importance of structured knowledge management will
            only grow. Future developments may include AI-powered knowledge
            curation, automated tagging and categorization, and more
            sophisticated recommendation systems.
          </p>

          {/* Additional sections */}
          <h2 className="content-h2 mt-8 text-primary">
            Implementation Strategies
          </h2>

          <p className="content-text-block text-primary">
            Successful implementation requires careful planning, stakeholder
            buy-in, and ongoing maintenance. Organizations should focus on
            user-friendly interfaces, clear governance policies, and regular
            content audits to ensure the system remains valuable and relevant.
          </p>
        </div>
      </article>
    </div>
  );
}
