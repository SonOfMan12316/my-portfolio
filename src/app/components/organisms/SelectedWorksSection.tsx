'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'motion/react'
import { projects, ProjectInterface } from '@/data/project'
import { mergeClassNames, PAGE_CONTAINER } from '@/utils/classNames'
import SectionHeader from '../molecules/SectionHeader'
import VideoModal from '../molecules/VideoModal'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

function WorkCard({
  project,
  index,
  onVideoPlay,
}: {
  project: ProjectInterface
  index: number
  onVideoPlay: (src: string) => void
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-70px 0px' })

  const reveal = (i: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    transition: { duration: 0.55, delay: i * 0.06, ease: EASE },
  })

  const href = project.link || project.github || undefined
  const actionLabel = project.video ? 'Watch Demo' : 'View Project'

  const body = (
    <>
      {/* Index + tech pills */}
      <div className="mb-5 flex items-start justify-between gap-4">
        <motion.span
          {...reveal(0)}
          className="font-mono text-xs tabular-nums text-[#E8542A]"
        >
          {String(index + 1).padStart(2, '0')}
        </motion.span>

        <motion.div {...reveal(0)} className="flex flex-wrap justify-end gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#F7F4EE]/15 px-2.5 py-0.5 text-[10px] tracking-wide text-[#F7F4EE]/45"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Title */}
      <motion.h3
        {...reveal(1)}
        className="mb-3 font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-tight tracking-tight text-[#F7F4EE] transition-colors duration-300 group-hover:text-[#E8542A]"
      >
        {project.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        {...reveal(2)}
        className="mb-6 max-w-md text-sm leading-7 text-[#F7F4EE]/45"
      >
        {project.about.length > 120
          ? project.about.slice(0, 120).trimEnd() + '…'
          : project.about}
      </motion.p>

      {/* Action */}
      <motion.span
        {...reveal(3)}
        className="inline-flex items-center gap-2 text-sm text-[#F7F4EE]/85"
      >
        {actionLabel}
        <span
          aria-hidden
          className="inline-block transition-transform duration-200 group-hover:translate-x-1.5"
        >
          →
        </span>
      </motion.span>
    </>
  )

  const shell =
    'group block w-full border-t border-[#F7F4EE]/10 pt-8 pb-14 text-left focus-visible:outline-2 focus-visible:outline-[#E8542A] focus-visible:outline-offset-4'

  if (project.video) {
    return (
      <button
        ref={ref}
        onClick={() => onVideoPlay(project.video!)}
        aria-label={`Watch the ${project.title} demo`}
        className={shell}
      >
        {body}
      </button>
    )
  }

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title}`}
        className={shell}
      >
        {body}
      </a>
    )
  }

  return (
    <div ref={ref} className={mergeClassNames(shell, 'cursor-default')}>
      {body}
    </div>
  )
}

const webProjects = projects.filter((p) => !p.liveOnMobile)

export default function SelectedWorksSection() {
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null)

  return (
    <section id="projects" className="w-full scroll-mt-20 bg-[#0C0A08] py-24 sm:py-32">
      <AnimatePresence>
        {activeVideo && (
          <VideoModal
            src={activeVideo.src}
            title={activeVideo.title}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </AnimatePresence>

      <div className={PAGE_CONTAINER}>
        <SectionHeader
          title="Selected Works"
          description="Platforms and collaborations shipped to production."
          onDark
        />

        <div className="grid grid-cols-1 gap-x-16 sm:grid-cols-2">
          {webProjects.map((project, index) => (
            <WorkCard
              key={project.title}
              project={project}
              index={index}
              onVideoPlay={(src) => setActiveVideo({ src, title: project.title })}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
