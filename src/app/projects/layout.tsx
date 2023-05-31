"use client";

import { motion } from "framer-motion";
import React from "react";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: -1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -1000, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 40,
      }}
    >
      {children}
    </motion.div>
  );
}
