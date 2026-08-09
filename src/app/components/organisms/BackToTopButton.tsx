"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { NAVIGATION_TAB_INDEX, scrollIntoSection } from "./NavigationTabs";
import { useTabs } from "@/contexts/TabsContext";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { setActiveTab, setIsOnClickScrolling } = useTabs();

  useEffect(() => {
    const toggle = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggle, { passive: true });
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollToTop = () => {
    setActiveTab(NAVIGATION_TAB_INDEX.HOME);
    setIsOnClickScrolling(true);
    scrollIntoSection(NAVIGATION_TAB_INDEX.HOME);
    setTimeout(() => setIsOnClickScrolling(false), 1200);
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-20 p-3.5 border border-[#0C0A08]/15 bg-[#F7F4EE] text-[#0C0A08] shadow-sm hover:bg-[#0C0A08] hover:text-[#F7F4EE] hover:border-[#0C0A08] transition-all duration-300
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
    >
      <FaArrowUp size={14} />
    </button>
  );
}
