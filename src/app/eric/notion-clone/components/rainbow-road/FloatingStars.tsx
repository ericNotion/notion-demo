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
          animate= y: [0, -20, 0], opacity: [0.3, 1, 0.3] 
          transition=
            duration: 5 + star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          
        >
          \u2B50
        </motion.div>
      ))}
    </div>
  );
}
