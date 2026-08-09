import { mergeClassNames } from '@/utils/classNames'
import AnimatedComponent from './AnimatedComponent'
import ProjectMedia from './ProjectMedia'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'

export interface ProjectProps {
  className?: string
  title: string
  about: string
  technologies: Array<string>
  image: string
  link: string
  github?: string
  categories?: Array<string>
  featured?: boolean
  liveOnMobile?: boolean
  video?: string
}

export default function Project({
  className,
  title,
  about,
  technologies,
  image,
  link,
  github,
  categories,
  featured = false,
  liveOnMobile = false,
  video,
}: ProjectProps) {
  return (
    <AnimatedComponent
      HTMLtag="article"
      className={mergeClassNames(
        'group relative flex flex-col overflow-hidden border border-[#0C0A08]/10 bg-[#ECEAE3] transition-all duration-300 hover:border-[#E8542A]/40 hover:-translate-y-0.5',
        className
      )}
    >
      <ProjectMedia title={title} image={image} video={video} />

      <div className="relative z-0 shrink-0 border-t border-[#0C0A08]/10 p-4 sm:p-6">
        <div className="flex items-start justify-between gap-3 pb-3">
          <h3 className="text-lg sm:text-xl font-serif font-medium text-[#0C0A08] pr-3 leading-snug">
            {title}
          </h3>
          {featured && (
            <span className="shrink-0 border border-[#E8542A]/40 bg-[#E8542A]/8 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-[#E8542A]">
              Featured
            </span>
          )}
        </div>

        <p className="text-sm leading-6 text-[#6B6560] max-w-2xl">
          {about}
        </p>

        {technologies.length > 0 && (
          <div className="flex gap-2 flex-wrap pt-4">
            {technologies.map((item, index) => (
              <span
                key={index}
                className="text-[10px] tracking-wide text-[#6B6560] border border-[#0C0A08]/12 px-2 py-0.5"
              >
                {item}
              </span>
            ))}
          </div>
        )}

        {categories?.length ? (
          <div className="flex gap-2 flex-wrap pt-3">
            {categories.map((category, index) => (
              <span
                key={index}
                className="text-[10px] text-[#B5B0AB] border border-[#0C0A08]/8 px-2 py-0.5"
              >
                {category}
              </span>
            ))}
          </div>
        ) : null}

        {liveOnMobile && (
          <div className="pt-4">
            <span className="inline-block border border-emerald-600/25 bg-emerald-50 px-2.5 py-1 text-[10px] font-medium tracking-wide text-emerald-700">
              Live on iOS &amp; Android
            </span>
          </div>
        )}

        {(link || github) && (
          <div className="flex flex-wrap gap-3 pt-5">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[#E8542A]/35 bg-[#E8542A]/8 px-4 py-2 text-xs font-medium text-[#E8542A] transition-colors hover:bg-[#E8542A]/15"
              >
                <FaArrowUpRightFromSquare size={11} />
                Live Demo
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[#0C0A08]/15 bg-transparent px-4 py-2 text-xs font-medium text-[#6B6560] transition-colors hover:bg-[#0C0A08]/5 hover:text-[#0C0A08]"
              >
                <FaGithub size={13} />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </AnimatedComponent>
  )
}
