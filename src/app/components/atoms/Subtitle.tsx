import { mergeClassNames } from "@/utils/classNames";
import AnimatedComponent from "../molecules/AnimatedComponent";

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Subtitle({ children, className }: SubtitleProps) {
  return (
    <AnimatedComponent
      className={mergeClassNames(
        "text-sm sm:text-lg font-normal text-[#6B6560] leading-8",
        className
      )}
      HTMLtag="h2"
    >
      {children}
    </AnimatedComponent>
  );
}
