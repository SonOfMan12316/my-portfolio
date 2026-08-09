"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function InitialLoadScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setIsLoading(false);
      return;
    }

    const hideAfter = () => {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 1800);
    };

    if (document.readyState === "complete") {
      hideAfter();
    } else {
      window.addEventListener("load", hideAfter, { once: true });
      // Fallback
      const timer = setTimeout(hideAfter, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0C0A08]"
    >
      {/* Monogram */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-serif text-5xl font-light text-[#F7F4EE] mb-10 tracking-tight"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        CE
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E8542A] ml-1 mb-4 align-middle" />
      </motion.div>

      {/* Loading line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-[1px] w-24 bg-[#E8542A] origin-left"
      />
    </motion.div>
  );
}
