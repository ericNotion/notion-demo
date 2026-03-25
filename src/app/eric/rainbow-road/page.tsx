"use client";

import { Agentation } from "@/components/playground-kit";
import { Button } from "@/components/ui/button";
import { Icon } from "@nds-icons";
import { paintPaletteIcon } from "@nds-icons/paintPalette/default.icon";
import { sparklesIcon } from "@nds-icons/sparkles/default.icon";
import { starIcon } from "@nds-icons/star/default.icon";
import { sunIcon } from "@nds-icons/sun/default.icon";
import { textColorIcon } from "@nds-icons/textColor/default.icon";
import { cn } from "@/utils/cn";
import { atom, useAtom } from "jotai";
import { AnimatePresence, motion } from "motion/react";
import "./rainbow.css";

// State management
const rainbowModeAtom = atom(false);

export default function RainbowRoadPage() {
  return (
    <Agentation>
      <RainbowRoadContent />
    </Agentation>
  );
}

function RainbowRoadContent() {
  const [rainbowMode, setRainbowMode] = useAtom(rainbowModeAtom);

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        rainbowMode ? "rainbow-mode" : "bg-primary",
      )}
    >
      {/* Header */}
      <header
        className={cn(
          "border-b transition-colors duration-300",
          rainbowMode ? "border-rainbow" : "border-primary",
        )}
      >
        <div className="mx-auto max-w-7xl px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon icon={rainbowMode ? sparklesIcon : starIcon} size={24} />
              <h1
                className={cn(
                  "text-title-xl font-semibold transition-all duration-300",
                  rainbowMode ? "rainbow-text" : "text-primary",
                )}
              >
                Rainbow Road
              </h1>
            </div>
            <Button
              variant={rainbowMode ? "primary" : "outline"}
              size="md"
              onClick={() => setRainbowMode(!rainbowMode)}
              className={cn(
                "flex items-center gap-2 transition-all duration-300",
                rainbowMode && "rainbow-button",
              )}
            >
              <Icon icon={rainbowMode ? sunIcon : paintPaletteIcon} size={16} />
              {rainbowMode ? "Normal Mode" : "Activate Rainbow Road"}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Sample Cards */}
          <AnimatePresence mode="wait">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: num * 0.05, duration: 0.2 }}
              >
                <Card
                  rainbowMode={rainbowMode}
                  title={`Feature ${num}`}
                  description="Experience the wild colors and vibrant gradients of Rainbow Road mode"
                  index={num}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Info Section */}
        <div className="mt-12">
          <InfoSection rainbowMode={rainbowMode} />
        </div>

        {/* Sidebar Demo */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Sidebar rainbowMode={rainbowMode} />
          </div>
          <div className="lg:col-span-2">
            <ContentArea rainbowMode={rainbowMode} />
          </div>
        </div>
      </main>
    </div>
  );
}

function Card({
  rainbowMode,
  title,
  description,
  index,
}: {
  rainbowMode: boolean;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <div
      className={cn(
        "rounded-lg p-6 transition-all duration-300",
        rainbowMode
          ? "rainbow-card rainbow-glow text-primary"
          : "border border-primary bg-secondary",
      )}
      style={{
        transitionDelay: `${index * 30}ms`,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "rounded-lg p-2 transition-colors duration-300",
            rainbowMode ? "bg-elevated/20" : "bg-tertiary",
          )}
        >
          <Icon icon={sparklesIcon} size={24} />
        </div>
        <div className="flex-1">
          <h3
            className={cn(
              "mb-2 text-title-sm font-semibold transition-colors duration-300",
              rainbowMode ? "rainbow-text" : "text-primary",
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "text-body-sm transition-colors duration-300",
              rainbowMode ? "text-primary" : "text-secondary",
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoSection({ rainbowMode }: { rainbowMode: boolean }) {
  return (
    <div
      className={cn(
        "rounded-lg p-8 transition-all duration-300",
        rainbowMode
          ? "rainbow-card rainbow-glow"
          : "border border-primary bg-secondary",
      )}
    >
      <h2
        className={cn(
          "mb-4 text-title-lg font-semibold transition-colors duration-300",
          rainbowMode ? "rainbow-text" : "text-primary",
        )}
      >
        Welcome to Rainbow Road 🌈
      </h2>
      <p
        className={cn(
          "mb-4 text-body transition-colors duration-300",
          rainbowMode ? "text-primary" : "text-secondary",
        )}
      >
        This is a playful visual mode that transforms the entire interface with
        vibrant rainbow gradients, animated colors, and wild effects. Toggle
        the mode on and off to see the magic happen!
      </p>
      <ul className="space-y-2">
        {[
          "Animated rainbow backgrounds",
          "Gradient text effects",
          "Shimmering borders and glows",
          "Smooth color transitions",
          "Playful sparkle animations",
        ].map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <Icon icon={starIcon} size={16} />
            <span
              className={cn(
                "text-body-sm transition-colors duration-300",
                rainbowMode ? "text-primary" : "text-secondary",
              )}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Sidebar({ rainbowMode }: { rainbowMode: boolean }) {
  const navItems = [
    { icon: starIcon, label: "Overview" },
    { icon: sparklesIcon, label: "Features" },
    { icon: paintPaletteIcon, label: "Themes" },
    { icon: textColorIcon, label: "Colors" },
  ];

  return (
    <div
      className={cn(
        "rounded-lg p-4 transition-all duration-300",
        rainbowMode
          ? "rainbow-card rainbow-glow"
          : "border border-primary bg-secondary",
      )}
    >
      <h3
        className={cn(
          "mb-4 px-2 text-title-sm font-semibold transition-colors duration-300",
          rainbowMode ? "rainbow-text" : "text-primary",
        )}
      >
        Navigation
      </h3>
      <nav className="space-y-1">
        {navItems.map((item, i) => (
          <Button
            key={i}
            variant="ghost"
            className={cn(
              "w-full justify-start gap-3 transition-all duration-200",
              rainbowMode
                ? "hover:bg-elevated/20 text-primary"
                : "text-secondary hover:text-primary",
            )}
          >
            <Icon icon={item.icon} size={16} />
            <span className="text-body-sm">{item.label}</span>
          </Button>
        ))}
      </nav>
    </div>
  );
}

function ContentArea({ rainbowMode }: { rainbowMode: boolean }) {
  return (
    <div
      className={cn(
        "rounded-lg p-6 transition-all duration-300",
        rainbowMode
          ? "rainbow-card rainbow-glow"
          : "border border-primary bg-secondary",
      )}
    >
      <h3
        className={cn(
          "mb-4 text-title font-semibold transition-colors duration-300",
          rainbowMode ? "rainbow-text" : "text-primary",
        )}
      >
        Content Preview
      </h3>
      <div className="space-y-4">
        <p
          className={cn(
            "text-body transition-colors duration-300",
            rainbowMode ? "text-primary" : "text-secondary",
          )}
        >
          This content area demonstrates how text and layouts transform in
          Rainbow Road mode. The colors shift, gradients animate, and the whole
          interface comes alive with vibrant energy.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={cn(
                "rounded-md p-4 transition-all duration-300",
                rainbowMode ? "bg-elevated/20" : "bg-tertiary",
              )}
            >
              <div className="mb-2 flex items-center gap-2">
                <Icon icon={starIcon} size={16} />
                <span
                  className={cn(
                    "text-body-sm font-medium transition-colors duration-300",
                    rainbowMode ? "text-primary" : "text-primary",
                  )}
                >
                  Item {num}
                </span>
              </div>
              <p
                className={cn(
                  "text-caption transition-colors duration-300",
                  rainbowMode ? "text-secondary" : "text-tertiary",
                )}
              >
                Sample content here
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
