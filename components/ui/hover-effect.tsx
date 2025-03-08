"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2  lg:grid-cols-4  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.name}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="absolute inset-0 rounded-lg bg-slate-800 dark:bg-slate-800/[0.8]"
            initial={false}
            animate={{
              scale: hoveredIndex === idx ? 1 : 0.95,
            }}
          />
          <motion.div
            className="relative"
            initial={false}
            animate={{
              scale: hoveredIndex === idx ? 1.05 : 1,
            }}
          >
            <div className="p-4 text-center">
              <h4 className="text-lg font-bold text-white mb-2">{item.name}</h4>
            </div>
          </motion.div>
        </a>
      ))}
    </div>
  );
};