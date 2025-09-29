import { mergeClassNames } from "@/utils/classNames";

interface ProjectsFilterProps {
  className: string;
}

export default function ProjectsFilter({ className }: ProjectsFilterProps) {
  return <div className={mergeClassNames("", className)}></div>;
}
