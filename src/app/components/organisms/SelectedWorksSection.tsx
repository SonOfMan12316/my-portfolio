'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'motion/react'
import Image from 'next/image'
import { projects, ProjectInterface } from '@/data/project'
import { mergeClassNames, PAGE_CONTAINER } from '@/utils/classNames'
import AnimatedComponent from '../molecules/AnimatedComponent'

function VideoModal({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0C0A08]/92 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-10 right-0 text-[#9B9490] hover:text-[#F7F4EE] transition-colors duration-200 text-sm tracking-wider"
        >
          Close ✕
        </button>

        <video
          src={src}
          controls
          autoPlay
          className="w-full aspect-video bg-[#141210]"
          aria-label={title}
        />

        <p className="mt-3 font-serif text-[#F7F4EE]/60 text-sm">{title}</p>
      </motion.div>
    </motion.div>
  )
}

function useRowAnimation() {
  const rowRef = useRef(null)
  const isInView = useInView(rowRef, { once: true, margin: '-60px 0px' })
  const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]
  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    transition: { duration: 0.5, delay: i * 0.07, ease },
  })
  return { rowRef, stagger }
}

function ProjectRow({
  project,
  index,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onVideoPlay,
}: {
  project: ProjectInterface
  index: number
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onVideoPlay: (src: string) => void
}) {
  const linkHref = !project.video ? (project.link || project.github || undefined) : undefined
  const { rowRef, stagger } = useRowAnimation()

  const inner = (
    <div
      ref={rowRef}
      className={mergeClassNames(
        'group relative border-b border-[#F7F4EE]/10 py-6 sm:py-8 transition-all duration-200',
        isHovered ? 'bg-[#F7F4EE]/5' : ''
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-start gap-4 sm:gap-6">
        <motion.span
          {...stagger(0)}
          className={mergeClassNames(
            'shrink-0 pt-1 text-[11px] tabular-nums font-mono transition-colors duration-300',
            isHovered ? 'text-[#E8542A]' : 'text-[#F7F4EE]/30'
          )}
        >
          {String(index + 1).padStart(2, '0')}
        </motion.span>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <motion.h3
              {...stagger(1)}
              className={mergeClassNames(
                'font-serif font-medium leading-tight tracking-tight transition-all duration-300',
                'text-[clamp(1.25rem,3vw,1.75rem)] text-[#F7F4EE]',
                isHovered ? 'translate-x-1' : ''
              )}
            >
              {project.title}
            </motion.h3>
            <motion.span
              {...stagger(1)}
              className={mergeClassNames(
                'mt-1 shrink-0 transition-all duration-300',
                project.video
                  ? mergeClassNames(
                      'flex h-7 w-7 items-center justify-center border',
                      isHovered
                        ? 'border-[#E8542A] bg-[#E8542A] text-[#F7F4EE]'
                        : 'border-[#F7F4EE]/20 text-[#F7F4EE]/40'
                    )
                  : mergeClassNames(
                      'text-base',
                      isHovered ? 'translate-x-2 text-[#E8542A]' : 'text-[#F7F4EE]/25'
                    )
              )}
              aria-hidden
            >
              {project.video ? (
                <svg width="9" height="10" viewBox="0 0 9 10" fill="currentColor">
                  <path d="M0 0.5L9 5L0 9.5V0.5Z" />
                </svg>
              ) : '→'}
            </motion.span>
          </div>

          <motion.p {...stagger(2)} className="mt-2 text-sm leading-6 text-[#F7F4EE]/50 max-w-lg">
            {project.about.length > 130 ? project.about.slice(0, 130) + '…' : project.about}
          </motion.p>

          <motion.div {...stagger(3)} className="mt-3 flex flex-wrap items-center gap-2">
            {project.technologies.slice(0, 6).map((tech) => (
              <span key={tech} className="text-[10px] sm:text-[11px] tracking-wide text-[#F7F4EE]/50 border border-[#F7F4EE]/15 px-2 py-0.5">
                {tech}
              </span>
            ))}
            {project.video && (
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] tracking-wide text-[#F7F4EE]/50 border border-[#F7F4EE]/15 px-2 py-0.5">
                <svg width="8" height="9" viewBox="0 0 8 9" fill="currentColor" aria-hidden>
                  <path d="M0 0.5L8 4.5L0 8.5V0.5Z" />
                </svg>
                Video
              </span>
            )}
            {project.categories?.includes('Featured') && (
              <span className="text-[10px] sm:text-[11px] tracking-wide text-[#E8542A] border border-[#E8542A]/25 bg-[#E8542A]/5 px-2 py-0.5">
                Featured
              </span>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )

  if (project.video) {
    return (
      <button
        onClick={() => onVideoPlay(project.video!)}
        aria-label={`Play ${project.title} video`}
        className="block w-full text-left focus-visible:outline-2 focus-visible:outline-[#E8542A] focus-visible:outline-offset-2"
      >
        {inner}
      </button>
    )
  }

  if (linkHref) {
    return (
      <a href={linkHref} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}
        className="block focus-visible:outline-2 focus-visible:outline-[#E8542A] focus-visible:outline-offset-2"
      >
        {inner}
      </a>
    )
  }

  return <div>{inner}</div>
}

function MobileAppRow({
  project,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onVideoPlay,
}: {
  project: ProjectInterface
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
  onVideoPlay: (src: string) => void
}) {
  const { rowRef, stagger } = useRowAnimation()

  return (
    <div
      ref={rowRef}
      className={mergeClassNames(
        'group relative transition-all duration-200 py-8 sm:py-10',
        isHovered ? 'bg-[#F7F4EE]/5' : ''
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
        {/* Left: image thumbnail + play button */}
        <motion.div {...stagger(0)} className="shrink-0 w-full sm:w-48 lg:w-56">
          <button
            onClick={() => project.video && onVideoPlay(project.video)}
            aria-label={`Play ${project.title} demo`}
            className="relative block w-full aspect-[9/16] sm:aspect-[3/4] overflow-hidden bg-[#ECEAE3] group/thumb"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-top"
                sizes="224px"
              />
            )}
            {project.video && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#0C0A08]/20 group-hover/thumb:bg-[#0C0A08]/40 transition-colors duration-200">
                <div className="flex h-12 w-12 items-center justify-center border border-[#F7F4EE]/50 bg-[#0C0A08]/40 backdrop-blur-sm group-hover/thumb:scale-110 transition-transform duration-200">
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="#F7F4EE" aria-hidden>
                    <path d="M0 0L14 8L0 16V0Z" />
                  </svg>
                </div>
              </div>
            )}
          </button>
        </motion.div>

        {/* Right: content */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <motion.h3
              {...stagger(1)}
              className="font-serif font-medium leading-tight tracking-tight text-[clamp(1.25rem,3vw,1.75rem)] text-[#F7F4EE] mb-3"
            >
              {project.title}
            </motion.h3>

            <motion.p {...stagger(2)} className="text-sm leading-6 text-[#F7F4EE]/50 max-w-lg mb-4">
              {project.about}
            </motion.p>

            <motion.div {...stagger(3)} className="flex flex-wrap items-center gap-2 mb-6">
              {project.technologies.slice(0, 6).map((tech) => (
                <span key={tech} className="text-[10px] sm:text-[11px] tracking-wide text-[#F7F4EE]/50 border border-[#F7F4EE]/15 px-2 py-0.5">
                  {tech}
                </span>
              ))}
              {project.video && (
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] tracking-wide text-[#F7F4EE]/50 border border-[#F7F4EE]/15 px-2 py-0.5">
                  <svg width="8" height="9" viewBox="0 0 8 9" fill="currentColor" aria-hidden>
                    <path d="M0 0.5L8 4.5L0 8.5V0.5Z" />
                  </svg>
                  Video
                </span>
              )}
              {project.categories?.includes('Featured') && (
                <span className="text-[10px] sm:text-[11px] tracking-wide text-[#E8542A] border border-[#E8542A]/25 bg-[#E8542A]/5 px-2 py-0.5">
                  Featured
                </span>
              )}
            </motion.div>
          </div>

          {/* Store badges */}
          <motion.div {...stagger(4)} className="flex flex-wrap gap-3">
            {project.appStore ? (
              <a
                href={project.appStore}
                target="_blank"
                rel="noreferrer"
                aria-label="Download on the App Store"
                className="inline-flex items-center gap-2.5 border border-[#0C0A08] bg-[#0C0A08] text-[#F7F4EE] px-4 py-2.5 hover:bg-[#1a1714] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.84M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-xs font-medium tracking-wide">App Store</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2.5 border border-[#F7F4EE]/20 text-[#F7F4EE]/40 px-4 py-2.5 cursor-not-allowed">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.84M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-xs tracking-wide">App Store</span>
                <span className="text-[10px] text-[#F7F4EE]/30">Coming soon</span>
              </span>
            )}

            {project.playStore ? (
              <a
                href={project.playStore}
                target="_blank"
                rel="noreferrer"
                aria-label="Get it on Google Play"
                className="inline-flex items-center gap-2.5 border border-[#0C0A08] bg-[#0C0A08] text-[#F7F4EE] px-4 py-2.5 hover:bg-[#1a1714] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.79-2.79-10.8 9.86zm-1.5-20.7A1.5 1.5 0 0 0 1.5 4.2v15.6c0 .45.2.85.52 1.12l.09.07 8.74-8.74v-.21L1.68 3.06zM20.4 10.8l-2.52-1.46-3.1 3.1 3.1 3.1 2.55-1.47c.73-.42.73-1.1 0-1.53l-.03-.74zM4.17.48l12.6 7.27-2.79 2.79L3.18.68A1.27 1.27 0 0 1 4.17.48z"/>
                </svg>
                <span className="text-xs font-medium tracking-wide">Google Play</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2.5 border border-[#F7F4EE]/20 text-[#F7F4EE]/40 px-4 py-2.5 cursor-not-allowed">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.79-2.79-10.8 9.86zm-1.5-20.7A1.5 1.5 0 0 0 1.5 4.2v15.6c0 .45.2.85.52 1.12l.09.07 8.74-8.74v-.21L1.68 3.06zM20.4 10.8l-2.52-1.46-3.1 3.1 3.1 3.1 2.55-1.47c.73-.42.73-1.1 0-1.53l-.03-.74zM4.17.48l12.6 7.27-2.79 2.79L3.18.68A1.27 1.27 0 0 1 4.17.48z"/>
                </svg>
                <span className="text-xs tracking-wide">Google Play</span>
                <span className="text-[10px] text-[#F7F4EE]/30">Coming soon</span>
              </span>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const webProjects = projects.filter((p) => !p.liveOnMobile)
const mobileProjects = projects.filter((p) => p.liveOnMobile)

export default function SelectedWorksSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeVideo, setActiveVideo] = useState<{ src: string; title: string } | null>(null)

  return (
    <section
      id="projects"
      className="w-full bg-[#0C0A08] py-24 sm:py-32 scroll-mt-20"
    >
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
        {/* Section header */}
        <AnimatedComponent HTMLtag="div" className="flex items-end justify-between mb-12 sm:mb-16">
          <div>
            <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#E8542A] mb-3">
              Selected Works
            </p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.25rem)] font-light text-[#F7F4EE] leading-tight">
							A collection of platforms and collaborations.
            </h2>
          </div>
          <span className="hidden sm:block text-sm text-[#F7F4EE]/40 tabular-nums font-mono mb-1">
            01 — {String(projects.length).padStart(2, '0')}
          </span>
        </AnimatedComponent>

        {/* ── Web projects ── */}
        <div className="border-t border-[#F7F4EE]/10">
          {webProjects.map((project, index) => (
            <ProjectRow
              key={project.title}
              project={project}
              index={index}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onVideoPlay={(src) => setActiveVideo({ src, title: project.title })}
            />
          ))}
        </div>

        {/* ── Mobile apps ── */}
        {mobileProjects.length > 0 && (
          <div className="mt-16 sm:mt-20">
            <AnimatedComponent HTMLtag="div" className="mb-6">
              <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#F7F4EE]/40">
                Mobile Applications
              </p>
            </AnimatedComponent>
            <div className="border-t border-[#F7F4EE]/10">
              {mobileProjects.map((project, index) => (
                <AnimatedComponent key={project.title} HTMLtag="div" delay={index * 0.05} className="border-b border-[#F7F4EE]/10">
                  <MobileAppRow
                    project={project}
                    isHovered={false}
                    onMouseEnter={() => {}}
                    onMouseLeave={() => {}}
                    onVideoPlay={(src) => setActiveVideo({ src, title: project.title })}
                  />
                </AnimatedComponent>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
