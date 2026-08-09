import { mergeClassNames, PAGE_GUTTER } from "@/utils/classNames";

interface SectionTemplateProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  noPaddingInline?: boolean;
  isTranparentBackgroud?: boolean;
}

export default function SectionTemplate({
  children,
  id,
  className,
  noPaddingInline = false,
  isTranparentBackgroud = false,
}: SectionTemplateProps) {
  return (
    <div
      className={mergeClassNames(
        "w-full py-24 sm:py-32 scroll-mt-20",
        noPaddingInline ? "" : PAGE_GUTTER,
        isTranparentBackgroud ? "" : "bg-[#F7F4EE]",
        className
      )}
      id={id}
    >
      {children}
    </div>
  );
}
