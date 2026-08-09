import { mergeClassNames } from "@/utils/classNames";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <div
      className={mergeClassNames(
        "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
        "w-full pt-8 pb-6 border-t border-[#0C0A08]/10",
        className
      )}
    >
      <p className="text-xs text-[#B5B0AB]">© 2026 Charles Emanyo</p>
      <p className="text-xs text-[#B5B0AB]">
        Full Stack &amp; Mobile Engineer
      </p>
    </div>
  );
}
