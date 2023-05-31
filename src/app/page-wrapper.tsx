"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ y: -500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -500, opacity: 0 }}
        transition={{ duration: 0.45 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
