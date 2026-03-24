"use client";

import {
  AgentIcon,
  type AgentIconColor,
  type AgentIconName,
  type AgentIconSize,
} from "@/components/notion-kit/agent-icon";
import { useState } from "react";

const ICONS: AgentIconName[] = [
  "alarm",
  "apple",
  "book",
  "bulb",
  "chat",
  "check",
  "file",
  "ghost",
  "globe",
  "hat",
  "mailbox",
  "plug",
  "puzzle",
  "rock",
  "sign",
  "square",
  "triangle",
  "umbrella",
];

const COLORS: AgentIconColor[] = [
  "blue",
  "brown",
  "gray",
  "green",
  "orange",
  "pink",
  "purple",
  "red",
  "teal",
  "yellow",
];

const SIZES: AgentIconSize[] = [96, 48, 20, 16];

export default function AgentIconsPreview() {
  const [activeColor, setActiveColor] = useState<AgentIconColor>("blue");

  return (
    <div className="bg-primary min-h-dvh p-8">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <div>
          <h1 className="text-primary text-2xl font-semibold">Agent Icons</h1>
          <p className="text-secondary mt-1 text-sm">
            18 icons &middot; 10 colors &middot; 4 sizes (96, 48, 20, 16)
          </p>
        </div>

        {/* Color picker */}
        <div className="space-y-3">
          <h2 className="text-primary text-sm font-medium">Background color</h2>
          <div className="flex flex-wrap gap-2">
            {COLORS.map((color) => (
              <button
                key={color}
                onClick={() => setActiveColor(color)}
                className="flex flex-col items-center gap-1"
              >
                <AgentIcon
                  icon="ghost"
                  color={color}
                  size={48}
                  className={
                    activeColor === color
                      ? "ring-2 ring-blue-500 ring-offset-2"
                      : ""
                  }
                />
                <span
                  className={`text-xs capitalize ${
                    activeColor === color
                      ? "text-primary font-medium"
                      : "text-secondary"
                  }`}
                >
                  {color}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* All icons at all sizes */}
        <div className="space-y-3">
          <h2 className="text-primary text-sm font-medium">
            All icons &middot; <span className="capitalize">{activeColor}</span>
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
            {ICONS.map((icon) => (
              <div
                key={icon}
                className="bg-secondary flex flex-col items-center gap-3 rounded-lg p-4"
              >
                <div className="flex items-end gap-2">
                  {SIZES.map((size) => (
                    <AgentIcon
                      key={size}
                      icon={icon}
                      color={activeColor}
                      size={size}
                    />
                  ))}
                </div>
                <span className="text-secondary text-xs capitalize">
                  {icon}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Color matrix — every icon in every color at 48px */}
        <div className="space-y-3">
          <h2 className="text-primary text-sm font-medium">
            Color matrix (48px)
          </h2>
          <div className="overflow-x-auto">
            <table className="border-collapse">
              <thead>
                <tr>
                  <th className="text-secondary px-2 pb-2 text-left text-xs font-normal">
                    Icon
                  </th>
                  {COLORS.map((color) => (
                    <th
                      key={color}
                      className="text-secondary px-2 pb-2 text-center text-xs font-normal capitalize"
                    >
                      {color}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ICONS.map((icon) => (
                  <tr key={icon}>
                    <td className="text-secondary px-2 py-1.5 text-xs capitalize">
                      {icon}
                    </td>
                    {COLORS.map((color) => (
                      <td key={color} className="px-2 py-1.5 text-center">
                        <AgentIcon icon={icon} color={color} size={48} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Size comparison */}
        <div className="space-y-3">
          <h2 className="text-primary text-sm font-medium">Size comparison</h2>
          <div className="bg-secondary flex flex-wrap items-end gap-6 rounded-lg p-6">
            {SIZES.map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <AgentIcon icon="alarm" color={activeColor} size={size} />
                <span className="text-secondary text-xs">{size}px</span>
              </div>
            ))}
          </div>
          <p className="text-tertiary text-xs">
            96px and 48px use <code>icon-lg</code> variants. 20px and 16px use{" "}
            <code>icon-sm</code> variants (bolder strokes for small rendering).
          </p>
        </div>
      </div>
    </div>
  );
}
