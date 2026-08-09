"use client";

import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { createPortal } from "react-dom";
import usePortal from "@/hooks/usePortal";
import { mergeClassNames } from "@/utils/classNames";

type Option = { label: string; value: string };
type SelectorProps = {
  label: string;
  options: Option[];
  onChange: (value: string) => void;
};

export default function Selector({ label, options, onChange }: SelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option>(options[0]);
  const portalRoot = usePortal(`select-${label}`);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const isDefault = selected.value === options[0].value;

  const handleSelect = (option: Option) => {
    setSelected(option);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-xs">
      {label && (
        <label className="capitalize block mb-2 text-xs font-medium text-[#6B6560] tracking-wide">
          {label}
        </label>
      )}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={mergeClassNames(
          "w-full px-4 py-2.5 flex justify-between items-center bg-transparent text-sm border transition-colors duration-200",
          isOpen
            ? "border-[#E8542A]"
            : "border-[#0C0A08]/15 hover:border-[#E8542A]/60"
        )}
      >
        <span className={isDefault ? "text-[#0C0A08]/30" : "text-[#0C0A08]"}>
          {selected.label}
        </span>
        <FiChevronDown
          size={18}
          className={`transition-transform duration-200 text-[#0C0A08]/30 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {isOpen &&
        portalRoot &&
        createPortal(
          <div
            ref={dropdownRef}
            className="absolute z-40 bg-[#F7F4EE] border border-[#0C0A08]/10 shadow-lg overflow-y-auto max-h-[200px] custom-scrollbar"
            style={{
              position: "absolute",
              top: coords.top,
              left: coords.left,
              width: coords.width,
              opacity: coords.top === 0 ? 0 : 1,
              transition: "opacity 0.15s ease",
              pointerEvents: coords.top === 0 ? "none" : "auto",
            }}
          >
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className="cursor-pointer px-4 py-2.5 text-sm text-[#0C0A08] hover:bg-[#E8542A]/8 hover:text-[#E8542A] transition-colors"
              >
                {option.label}
              </div>
            ))}
          </div>,
          portalRoot
        )}
    </div>
  );
}
