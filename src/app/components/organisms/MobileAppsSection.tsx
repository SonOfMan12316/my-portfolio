'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'motion/react'
import { projects, ProjectInterface } from '@/data/project'
import { PAGE_CONTAINER } from '@/utils/classNames'
import SectionHeader from '../molecules/SectionHeader'
import VideoModal from '../molecules/VideoModal'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const APP_STORE_PATH =
  'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.84M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z'

const PLAY_STORE_PATH =
  'M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.79-2.79-10.8 9.86zm-1.5-20.7A1.5 1.5 0 0 0 1.5 4.2v15.6c0 .45.2.85.52 1.12l.09.07 8.74-8.74v-.21L1.68 3.06zM20.4 10.8l-2.52-1.46-3.1 3.1 3.1 3.1 2.55-1.47c.73-.42.73-1.1 0-1.53l-.03-.74zM4.17.48l12.6 7.27-2.79 2.79L3.18.68A1.27 1.27 0 0 1 4.17.48z'

function StoreBadge({
  href,
  label,
  path,
}: {
  href?: string
  label: string
  path: string
}) {
  const icon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d={path} />
    </svg>
  )

  if (!href) {
    return (
      <span className="inline-flex cursor-not-allowed items-center gap-2.5 border border-[#F7F4EE]/20 px-4 py-2.5 text-[#F7F4EE]/40">
        {icon}
        <span className="text-xs tracking-wide">{label}</span>
        <span className="text-[10px] text-[#F7F4EE]/30">Coming soon</span>
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-2.5 border border-[#F7F4EE] bg-[#F7F4EE] px-4 py-2.5 text-[#0C0A08] transition-colors duration-200 hover:bg-[#E8542A] hover:border-[#E8542A] hover:text-[#F7F4EE]"
    >
      {icon}
      <span className="text-xs font-medium tracking-wide">{label}</span>
    </a>
  )
}

function MobileAppRow({
  project,
  onVideoPlay,
}: {
  project: ProjectInterface
  onVideoPlay: (src: string) => void
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-70px 0px' })

  const reveal = (i: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    transition: { duration: 0.55, delay: i * 0.06, ease: EASE },
  })

  return (
    <div ref={ref} className="border-t border-[#F7F4EE]/10 py-10 sm:py-12">
      <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
        {/* Thumbnail */}
        <motion.div {...reveal(0)} className="w-full shrink-0 sm:w-48 lg:w-56">
          <button
            onClick={() => project.video && onVideoPlay(project.video)}
            aria-label={`Play the ${project.title} demo`}
            disabled={!project.video}
            className="group/thumb relative block aspect-[3/4] w-full overflow-hidden bg-[#141210] disabled:cursor-default"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 224px"
              />
            )}
            {project.video && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#0C0A08]/20 transition-colors duration-200 group-hover/thumb:bg-[#0C0A08]/45">
                <div className="flex h-12 w-12 items-center justify-center border border-[#F7F4EE]/50 bg-[#0C0A08]/40 backdrop-blur-sm transition-transform duration-200 group-hover/thumb:scale-110">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="#F7F4EE" aria-hidden>
                    <path d="M0 0L14 8L0 16V0Z" />
                  </svg>
                </div>
              </div>
            )}
          </button>
        </motion.div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          <motion.h3
            {...reveal(1)}
            className="mb-3 font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-tight tracking-tight text-[#F7F4EE]"
          >
            {project.title}
          </motion.h3>

          <motion.p
            {...reveal(2)}
            className="mb-5 max-w-xl text-sm leading-7 text-[#F7F4EE]/45"
          >
            {project.about}
          </motion.p>

          <motion.div {...reveal(3)} className="mb-7 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#F7F4EE]/15 px-2.5 py-0.5 text-[10px] tracking-wide text-[#F7F4EE]/45"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div {...reveal(4)} className="flex flex-wrap gap-3">
            <StoreBadge href={project.appStore} label="App Store" path={APP_STORE_PATH} />
            <StoreBadge href={project.playStore} label="Google Play" path={PLAY_STORE_PATH} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const mobileProjects = projects.filter((p) => p.liveOnMobile)

export default function MobileAppsSection() {
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null)

  if (mobileProjects.length === 0) return null

  return (
    <section id="mobile-apps" className="w-full scroll-mt-20 bg-[#0C0A08] pb-24 sm:pb-32">
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
          title="Mobile Apps"
          description="Native experiences built for performance and scale."
          onDark
        />

        {mobileProjects.map((project) => (
          <MobileAppRow
            key={project.title}
            project={project}
            onVideoPlay={(src) => setActiveVideo({ src, title: project.title })}
          />
        ))}
      </div>
    </section>
  )
}
