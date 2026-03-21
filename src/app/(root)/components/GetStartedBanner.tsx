"use client";

import { PlaygroundButton } from "@/components/playground-kit";
import { useIsProduction } from "@/hooks/usePreviewProductionMode";
import { xMarkSmallIcon } from "@/nds-icons/src/xMark/small.icon";
import { getStartedBannerDismissedAtom } from "@/root/atoms/getStartedBannerAtom";
import { Icon } from "@nds-icons";
import { useAtom } from "jotai";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const USERNAME_KEY = "playground-username";

export function GetStartedBanner() {
  const isProduction = useIsProduction();
  const [isDismissed, setIsDismissed] = useAtom(getStartedBannerDismissedAtom);
  const [hasUsername, setHasUsername] = useState(true); // Default true to prevent flash

  useEffect(() => {
    setHasUsername(!!localStorage.getItem(USERNAME_KEY));
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  const shouldShow = isProduction && !isDismissed && !hasUsername;

  // Always render the wrapper to maintain flex gap consistency
  // Animate height + margin to 0 when hidden
  return (
    <motion.div
      className="hidden overflow-hidden md:grid"
      initial={false}
      animate={{
        gridTemplateRows: shouldShow ? "1fr" : "0fr",
        marginBottom: shouldShow ? 0 : -48, // Offset the parent's gap-12 (48px)
      }}
      transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
    >
      <section className="grid min-h-0 grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-10">
        <div className="min-h-0 lg:col-span-3 lg:col-start-2 xl:col-start-2 2xl:col-span-2 2xl:col-start-2">
          <motion.div
            className="bg-secondary relative flex w-full gap-4 rounded-2xl p-6"
            initial={false}
            animate={{
              opacity: shouldShow ? 1 : 0,
              scale: shouldShow ? 1 : 0.96,
            }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="flex flex-1 flex-col gap-4">
              <div className="flex flex-col gap-0">
                <div className="text-title font-semibold">
                  Make prototypes like these in 5 minutes or less
                </div>
                <div className="text-title text-secondary font-medium">
                  View the quickstart guide
                </div>
              </div>
              <div className="flex items-center gap-2">
                <PlaygroundButton
                  asChild
                  variant="primary"
                  className="self-start"
                >
                  <Link href="/guides">Get started</Link>
                </PlaygroundButton>
                <PlaygroundButton asChild variant="tint" className="self-start">
                  <Link
                    href="https://notion.enterprise.slack.com/archives/C08PARQS41J"
                    target="_blank"
                  >
                    Ask for help
                  </Link>
                </PlaygroundButton>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="fill-secondary hover:fill-primary absolute top-3 right-3 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-black/5 transition-colors hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20"
              aria-label="Dismiss banner"
            >
              <Icon
                icon={xMarkSmallIcon}
                size="sm"
                weight="bold"
                color="inherit"
              />
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
