"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  delay: number;
}

export function FloatingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate random stars
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
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute text-2xl"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        >
          ⭐
        </motion.div>
      ))}
    </div>
  );
}
