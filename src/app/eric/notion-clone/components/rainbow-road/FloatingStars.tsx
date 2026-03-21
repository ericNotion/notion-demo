"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  delay: number;
}

const starAnimation = { y: [0, -20, 0], opacity: [0.3, 1, 0.3] };

export function FloatingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = [];
    for (let i = 0; i < 15; i++) {
      generatedStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 10,
      });
    }
    setStars(generatedStars);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {stars.map((star) => {
        const starTransition = {
          duration: 10,
          repeat: Infinity,
          delay: star.delay,
          ease: "easeInOut" as const,
        };
        const starStyle = {
          left: `${star.x}%`,
          top: `${star.y}%`,
        };
        return (
          <motion.div
            key={star.id}
            className="absolute text-2xl"
            style={starStyle}
            animate={starAnimation}
            transition={starTransition}
          >
            \u2B50
          </motion.div>
        );
      })}
    </div>
  );
}
