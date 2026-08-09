"use client";

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../atoms/Button";
import { mergeClassNames } from "@/utils/classNames";
import { motion, AnimatePresence } from "motion/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  onAnimationEnd?: () => void;
  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  onAnimationEnd,
  className,
}: ModalProps) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setShouldRender(true);
    } else if (!isOpen && shouldRender) {
      document.body.style.overflow = "auto";
      setIsClosing(true);
    }
  }, [isOpen, shouldRender]);

  useEffect(() => {
    const node = modalRef.current;
    if (!node) return;

    const handleAnimationEnd = () => {
      if (isClosing) {
        setShouldRender(false);
        setIsClosing(false);
        onAnimationEnd?.();
      } else {
        onAnimationEnd?.();
      }
    };

    node.addEventListener("animationend", handleAnimationEnd);
    return () => node.removeEventListener("animationend", handleAnimationEnd);
  }, [isClosing, onAnimationEnd]);

  if (!shouldRender) return null;

  const animationClass = isClosing
    ? "animate-slideOutRight"
    : "animate-slideInRight";

  return createPortal(
    <div className="fixed inset-0 flex z-[99] items-center justify-center w-full">
      <div
        ref={modalRef}
        className={mergeClassNames(
          "h-dvh w-full px-6 flex flex-col items-center justify-center",
          "bg-[#0C0A08] text-[#F7F4EE]",
          "transition-all duration-300 ease-in-out",
          animationClass
        )}
      >
        {title && (
          <div className="sm:hidden flex items-center gap-2 absolute w-full justify-start max-w-[var(--page-width)] top-0 mt-5 ml-16">
            <div className="bg-transparent text-xl text-[#9B9490] font-serif">
              {title}
            </div>
            <div className="w-24 h-px bg-[#E8542A] opacity-60" />
          </div>
        )}
        <div className="flex absolute w-full justify-end max-w-[var(--page-width)] top-0">
          <Button
            onClick={onClose}
            variant="secondary"
            className="w-12 bg-transparent mt-2 mr-4 text-[#E8542A] border-none"
            disableAnimation
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: "inline-block" }}
                >
                  <IoCloseSharp size={32} />
                </motion.span>
              ) : (
                ""
              )}
            </AnimatePresence>
          </Button>
        </div>

        <div
          className={mergeClassNames("w-full max-w-[var(--page-width)]", className)}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
