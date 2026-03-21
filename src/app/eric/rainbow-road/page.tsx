"use client";

import { Agentation } from "@/components/playground-kit";
import { Button } from "@/components/ui/button";
import { Icon } from "@nds-icons";
import { cn } from "@/utils/cn";
import { atom, useAtom } from "jotai";
import { motion, AnimatePresence } from "motion/react";

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
        rainbowMode ? "rainbow-mode" : "bg-primary"
      )}
    >
      {/* Header */}
      <header
        className={cn(
          "border-b transition-colors duration-300",
          rainbowMode ? "border-rainbow" : "border-primary"
        )}
      >
        <div className="mx-auto max-w-7xl px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon
                name={rainbowMode ? "sparkles" : "star"}
                size="xl"
                className={cn(
                  "transition-colors duration-300",
                  rainbowMode ? "text-rainbow-animate" : "text-primary"
                )}
              />
              <h1
                className={cn(
                  "text-title-xl font-semibold transition-all duration-300",
                  rainbowMode ? "rainbow-text" : "text-primary"
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
                rainbowMode && "rainbow-button"
              )}
            >
              <Icon
                name={rainbowMode ? "sun" : "paintPalette"}
                size="sm"
              />
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

      {/* CSS Animations and Styles */}
      <style jsx global>{`
        @keyframes rainbow-rotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes rainbow-border {
          0% {
            border-color: #ff0080;
          }
          25% {
            border-color: #00ff80;
          }
          50% {
            border-color: #0080ff;
          }
          75% {
            border-color: #ff8000;
          }
          100% {
            border-color: #ff0080;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .rainbow-mode {
          background: linear-gradient(
            135deg,
            #667eea 0%,
            #764ba2 25%,
            #f093fb 50%,
            #4facfe 75%,
            #667eea 100%
          );
          background-size: 400% 400%;
          animation: rainbow-rotate 15s ease infinite;
        }

        .rainbow-text {
          background: linear-gradient(
            90deg,
            #ff0080,
            #ff8c00,
            #40e0d0,
            #8a2be2,
            #ff0080
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: rainbow-rotate 3s linear infinite;
        }

        .text-rainbow-animate {
          background: linear-gradient(
            90deg,
            #ff0080,
            #ff8c00,
            #40e0d0,
            #8a2be2,
            #ff0080
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: rainbow-rotate 3s linear infinite;
        }

        .border-rainbow {
          border-width: 2px;
          animation: rainbow-border 3s linear infinite;
        }

        .rainbow-card {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
          );
          backdrop-filter: blur(10px);
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
          overflow: hidden;
        }

        .rainbow-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            #ff0080,
            #ff8c00,
            #40e0d0,
            #8a2be2,
            #ff0080
          );
          background-size: 300% 300%;
          animation: rainbow-rotate 6s ease infinite;
          border-radius: inherit;
          z-index: -1;
          margin: -2px;
        }

        .rainbow-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          animation: shimmer 3s infinite;
        }

        .rainbow-button {
          background: linear-gradient(
            90deg,
            #667eea,
            #764ba2,
            #f093fb,
            #667eea
          ) !important;
          background-size: 200% auto !important;
          animation: rainbow-rotate 3s linear infinite;
          border: none !important;
          color: white !important;
        }

        .rainbow-button:hover {
          transform: scale(1.05);
        }

        .rainbow-glow {
          box-shadow: 0 0 20px rgba(255, 0, 128, 0.5),
            0 0 40px rgba(64, 224, 208, 0.3);
        }
      `}</style>
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
          : "bg-secondary border border-primary"
      )}
      style={{
        transitionDelay: `${index * 30}ms`,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "rounded-lg p-2 transition-colors duration-300",
            rainbowMode ? "bg-elevated/20" : "bg-tertiary"
          )}
        >
          <Icon
            name="sparkles"
            size="lg"
            className={cn(
              "transition-colors duration-300",
              rainbowMode ? "text-rainbow-animate" : "text-secondary"
            )}
          />
        </div>
        <div className="flex-1">
          <h3
            className={cn(
              "text-title-sm font-semibold mb-2 transition-colors duration-300",
              rainbowMode ? "rainbow-text" : "text-primary"
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              "text-body-sm transition-colors duration-300",
              rainbowMode ? "text-primary" : "text-secondary"
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
          : "bg-secondary border border-primary"
      )}
    >
      <h2
        className={cn(
          "text-title-lg font-semibold mb-4 transition-colors duration-300",
          rainbowMode ? "rainbow-text" : "text-primary"
        )}
      >
        Welcome to Rainbow Road 🌈
      </h2>
      <p
        className={cn(
          "text-body mb-4 transition-colors duration-300",
          rainbowMode ? "text-primary" : "text-secondary"
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
            <Icon
              name="star"
              size="sm"
              className={cn(
                "transition-colors duration-300",
                rainbowMode ? "text-rainbow-animate" : "text-tertiary"
              )}
            />
            <span
              className={cn(
                "text-body-sm transition-colors duration-300",
                rainbowMode ? "text-primary" : "text-secondary"
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
    { icon: "star", label: "Overview" },
    { icon: "sparkles", label: "Features" },
    { icon: "paintPalette", label: "Themes" },
    { icon: "textColor", label: "Colors" },
  ];

  return (
    <div
      className={cn(
        "rounded-lg p-4 transition-all duration-300",
        rainbowMode
          ? "rainbow-card rainbow-glow"
          : "bg-secondary border border-primary"
      )}
    >
      <h3
        className={cn(
          "text-title-sm font-semibold mb-4 px-2 transition-colors duration-300",
          rainbowMode ? "rainbow-text" : "text-primary"
        )}
      >
        Navigation
      </h3>
      <nav className="space-y-1">
        {navItems.map((item, i) => (
          <button
            key={i}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200",
              rainbowMode
                ? "hover:bg-elevated/20 text-primary"
                : "hover:bg-tertiary text-secondary hover:text-primary"
            )}
          >
            <Icon
              name={item.icon as any}
              size="sm"
              className={cn(
                "transition-colors duration-300",
                rainbowMode ? "text-rainbow-animate" : "text-secondary"
              )}
            />
            <span className="text-body-sm">{item.label}</span>
          </button>
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
          : "bg-secondary border border-primary"
      )}
    >
      <h3
        className={cn(
          "text-title font-semibold mb-4 transition-colors duration-300",
          rainbowMode ? "rainbow-text" : "text-primary"
        )}
      >
        Content Preview
      </h3>
      <div className="space-y-4">
        <p
          className={cn(
            "text-body transition-colors duration-300",
            rainbowMode ? "text-primary" : "text-secondary"
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
                rainbowMode ? "bg-elevated/20" : "bg-tertiary"
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon
                  name="star"
                  size="sm"
                  className={cn(
                    "transition-colors duration-300",
                    rainbowMode ? "text-rainbow-animate" : "text-tertiary"
                  )}
                />
                <span
                  className={cn(
                    "text-body-sm font-medium transition-colors duration-300",
                    rainbowMode ? "text-primary" : "text-primary"
                  )}
                >
                  Item {num}
                </span>
              </div>
              <p
                className={cn(
                  "text-caption transition-colors duration-300",
                  rainbowMode ? "text-secondary" : "text-tertiary"
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
