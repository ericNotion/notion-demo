"use client";

import { Agentation } from "@/components/playground-kit/Agentation";
import { CollapsibleGroup } from "@/components/notion-kit/PrimarySidebar/CollapsibleGroup";
import { PrimarySidebarHeader } from "@/components/notion-kit/PrimarySidebar/Header";
import { PrimarySidebarLayout } from "@/components/notion-kit/PrimarySidebar/Layout";
import { SidebarItem } from "@/components/notion-kit/PrimarySidebar/SidebarItem";
import { PageTopBar } from "@/components/notion-kit/PageTopBar";
import { Icon } from "@nds-icons";
import { homeIcon } from "@nds-icons/home/default.icon";
import { inboxIcon } from "@nds-icons/inbox/default.icon";
import { pageIcon } from "@nds-icons/page/default.icon";
import { sparklesIcon } from "@nds-icons/sparkles/default.icon";
import { starIcon } from "@nds-icons/star/fill.icon";
import { motion } from "motion/react";

// Twinkling Star Component
function TwinklingStar({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="absolute text-yellow-300"
      initial={{ opacity: 0.3, scale: 0.8 }}
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      <Icon icon={starIcon} size={12} />
    </motion.div>
  );
}

// Rainbow Road Sidebar
function RainbowRoadSidebar() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden">
      {/* Space background overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-black/20" />
      </div>

      {/* Twinkling stars scattered in sidebar */}
      <TwinklingStar delay={0} />
      <TwinklingStar delay={0.5} />
      <TwinklingStar delay={1} />
      <TwinklingStar delay={1.5} />

      <div className="relative z-10 flex flex-1 flex-col">
        <PrimarySidebarHeader title="Rainbow Road" />

        <div className="flex-1 overflow-y-auto px-2 py-1">
          {/* Rainbow gradient divider */}
          <div className="rainbow-divider my-2 h-[2px] rounded-full" />

          <div className="space-y-1">
            <SidebarItem
              icon={<Icon color="inherit" icon={homeIcon} />}
              label="Home"
              className="rainbow-hover"
            />
            <SidebarItem
              icon={<Icon color="inherit" icon={inboxIcon} />}
              label="Inbox"
              className="rainbow-hover"
            />
          </div>

          <div className="rainbow-divider my-2 h-[2px] rounded-full" />

          <CollapsibleGroup id="favorites" label="✨ Favorites">
            <SidebarItem
              icon={<Icon color="inherit" icon={pageIcon} />}
              label="Welcome to Rainbow Road"
              className="rainbow-hover"
            />
            <SidebarItem
              icon={<Icon color="inherit" icon={starIcon} />}
              label="Cosmic Journey"
              className="rainbow-hover"
            />
            <SidebarItem
              icon={<Icon color="inherit" icon={sparklesIcon} />}
              label="Star Power"
              className="rainbow-hover"
            />
          </CollapsibleGroup>

          <div className="rainbow-divider my-2 h-[2px] rounded-full" />

          <CollapsibleGroup id="workspace" label="🌈 Workspace">
            <SidebarItem
              icon={<Icon color="inherit" icon={pageIcon} />}
              label="Getting Started"
              className="rainbow-hover"
            />
            <SidebarItem
              icon={<Icon color="inherit" icon={pageIcon} />}
              label="Team Goals"
              className="rainbow-hover"
            />
            <SidebarItem
              icon={<Icon color="inherit" icon={pageIcon} />}
              label="Project Roadmap"
              className="rainbow-hover"
            />
          </CollapsibleGroup>
        </div>
      </div>

      <style jsx>{`
        .rainbow-divider {
          background: linear-gradient(
            90deg,
            #ff0080,
            #ff8c00,
            #ffd700,
            #00ff00,
            #00bfff,
            #8a2be2,
            #ff0080
          );
          background-size: 200% 100%;
          animation: rainbow-flow 3s linear infinite;
        }

        @keyframes rainbow-flow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </div>
  );
}

// Main Content Area
function RainbowRoadContent() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden">
      {/* Cosmic background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-black opacity-40" />
        {/* Scattered stars across the page */}
        <div className="absolute left-[10%] top-[15%]">
          <TwinklingStar delay={0} />
        </div>
        <div className="absolute right-[20%] top-[25%]">
          <TwinklingStar delay={0.7} />
        </div>
        <div className="absolute left-[70%] top-[40%]">
          <TwinklingStar delay={1.2} />
        </div>
        <div className="absolute left-[15%] top-[60%]">
          <TwinklingStar delay={1.8} />
        </div>
        <div className="absolute right-[15%] top-[70%]">
          <TwinklingStar delay={0.4} />
        </div>
        <div className="absolute left-[50%] top-[80%]">
          <TwinklingStar delay={1.5} />
        </div>
      </div>

      {/* Page Top Bar with rainbow accent */}
      <div className="relative z-10 rainbow-border-bottom">
        <PageTopBar />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-8 py-12">
          {/* Page Icon */}
          <motion.div
            className="mb-6 text-[78px] leading-[86px]"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ⭐
          </motion.div>

          {/* Page Title */}
          <h1 className="content-page-title rainbow-text mb-8 font-bold">
            Welcome to Rainbow Road
          </h1>

          {/* Content blocks */}
          <div className="space-y-4">
            <div className="rainbow-card rounded-lg p-6">
              <div className="mb-2 flex items-center gap-2">
                <Icon
                  icon={sparklesIcon}
                  size={20}
                  className="text-purple-400"
                />
                <h2 className="content-h2 font-semibold">
                  A Magical Workspace Experience
                </h2>
              </div>
              <p className="content-text-block text-secondary">
                You&apos;ve discovered a secret easter egg! This is what Notion
                would look like if it took a trip through Mario Kart&apos;s most
                iconic level. Every element is infused with cosmic energy and
                rainbow magic.
              </p>
            </div>

            <div className="rainbow-card rounded-lg p-6">
              <div className="mb-2 flex items-center gap-2">
                <Icon icon={starIcon} size={20} className="text-yellow-400" />
                <h2 className="content-h2 font-semibold">Features</h2>
              </div>
              <ul className="content-text-block text-secondary ml-6 space-y-2">
                <li className="list-disc">
                  Animated rainbow gradients that flow like the road itself
                </li>
                <li className="list-disc">
                  Twinkling stars scattered across the interface
                </li>
                <li className="list-disc">
                  Cosmic space background with depth and atmosphere
                </li>
                <li className="list-disc">
                  Neon glow effects on interactive elements
                </li>
                <li className="list-disc">
                  Smooth animations throughout the experience
                </li>
              </ul>
            </div>

            <div className="rainbow-card rounded-lg p-6">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl">🌈</span>
                <h2 className="content-h2 font-semibold">Hover & Interact</h2>
              </div>
              <p className="content-text-block text-secondary">
                Try hovering over the sidebar items to see the rainbow glow
                effect. Every interactive element has been enhanced with cosmic
                energy!
              </p>
            </div>

            <div className="rainbow-card rounded-lg p-6">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-2xl">🎮</span>
                <h2 className="content-h2 font-semibold">Inspired by Gaming</h2>
              </div>
              <p className="content-text-block text-secondary mb-3">
                Rainbow Road from Mario Kart has been delighting players for
                decades with its otherworldly aesthetics. This theme brings that
                same sense of wonder to your workspace.
              </p>
              <div className="flex flex-wrap gap-2">
                {["🏎️ Speed", "⭐ Stars", "🌌 Space", "🎨 Colors", "✨ Magic"].map(
                  (tag, i) => (
                    <motion.span
                      key={tag}
                      className="rainbow-tag rounded-full px-3 py-1 text-caption"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ),
                )}
              </div>
            </div>

            <motion.div
              className="rainbow-card rounded-lg p-8 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-3 text-5xl">🚀</div>
              <h3 className="content-h3 mb-2 font-semibold">
                Ready to Race?
              </h3>
              <p className="content-text-block text-secondary">
                Your workspace has never looked this magical. Start creating in
                style!
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rainbow-text {
          background: linear-gradient(
            90deg,
            #ff0080,
            #ff8c00,
            #ffd700,
            #00ff00,
            #00bfff,
            #8a2be2,
            #ff0080
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rainbow-flow 4s linear infinite;
        }

        .rainbow-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .rainbow-card::before {
          content: "";
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(
            90deg,
            #ff0080,
            #ff8c00,
            #ffd700,
            #00ff00,
            #00bfff,
            #8a2be2,
            #ff0080
          );
          background-size: 200% 100%;
          border-radius: inherit;
          opacity: 0;
          z-index: -1;
          animation: rainbow-flow 3s linear infinite;
          transition: opacity 0.3s ease;
        }

        .rainbow-card:hover::before {
          opacity: 0.3;
        }

        .rainbow-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.3);
        }

        .rainbow-tag {
          background: rgba(138, 43, 226, 0.2);
          border: 1px solid rgba(138, 43, 226, 0.4);
          color: #c4b5fd;
          font-weight: 500;
        }

        .rainbow-border-bottom {
          position: relative;
        }

        .rainbow-border-bottom::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            #ff0080,
            #ff8c00,
            #ffd700,
            #00ff00,
            #00bfff,
            #8a2be2,
            #ff0080
          );
          background-size: 200% 100%;
          animation: rainbow-flow 3s linear infinite;
        }

        @keyframes rainbow-flow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>

      <style jsx global>{`
        .rainbow-hover {
          transition: all 0.2s ease;
          position: relative;
        }

        .rainbow-hover::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 6px;
          padding: 1px;
          background: linear-gradient(
            90deg,
            #ff0080,
            #ff8c00,
            #ffd700,
            #00ff00,
            #00bfff,
            #8a2be2
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .rainbow-hover:hover::before {
          opacity: 0.6;
        }

        .rainbow-hover:hover {
          box-shadow: 0 0 15px rgba(138, 43, 226, 0.4);
        }
      `}</style>
    </div>
  );
}

export default function RainbowRoadPage() {
  return (
    <Agentation>
      <div className="flex h-screen overflow-hidden bg-[#0a0a0f]">
        <PrimarySidebarLayout
          sidebar={<RainbowRoadSidebar />}
          className="flex-1"
        >
          <RainbowRoadContent />
        </PrimarySidebarLayout>
      </div>
    </Agentation>
  );
}
