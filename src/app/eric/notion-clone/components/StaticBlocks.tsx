"use client";

import { Icon } from "@nds-icons";
import { arrowDiagonalUpRightIcon } from "@nds-icons/arrowDiagonalUpRight/default.icon";
import Link from "next/link";

export function CalloutBlock({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-secondary my-2 flex gap-3 rounded-lg px-4 py-3">
      <span className="shrink-0 text-lg">{icon}</span>
      <div className="text-primary text-[15px] leading-relaxed">{children}</div>
    </div>
  );
}

export function DividerBlock() {
  return <hr className="border-primary my-4 border-t" />;
}

interface InlineDatabaseBlockProps {
  title: string;
  emoji: string;
  href: string;
  headers: string[];
  rows: string[][];
}

export function InlineDatabaseBlock({
  title,
  emoji,
  href,
  headers,
  rows,
}: InlineDatabaseBlockProps) {
  return (
    <div className="my-4">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-base">{emoji}</span>
        <Link
          href={href}
          className="text-primary text-sm font-semibold hover:underline"
        >
          {title}
        </Link>
        <Link
          href={href}
          className="text-tertiary hover:text-secondary ml-auto flex items-center gap-1 text-xs"
        >
          <Icon icon={arrowDiagonalUpRightIcon} size={12} color="tertiary" />
          Open
        </Link>
      </div>
      <div className="overflow-hidden rounded-lg border border-[var(--theme-colors-border-primary)]">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-[var(--theme-colors-border-primary)]">
              {headers.map((h) => (
                <th
                  key={h}
                  className="text-secondary px-3 py-1.5 text-left text-xs font-normal"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-[var(--theme-colors-border-primary)] last:border-0"
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-3 py-1.5 ${j === 0 ? "text-primary font-medium" : "text-secondary"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
