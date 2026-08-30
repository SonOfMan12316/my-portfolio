'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { openSource, OpenSourceInterface } from '@/data/open-source'
import { PAGE_CONTAINER } from '@/utils/classNames'
import SectionHeader from '../molecules/SectionHeader'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

function OpenSourceCard({ item, index }: { item: OpenSourceInterface; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-70px 0px' })

  const reveal = (i: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    transition: { duration: 0.55, delay: i * 0.06, ease: EASE },
  })

  return (
    <a
      ref={ref}
      href={item.link}
      target="_blank"
      rel="noreferrer"
      aria-label={`${item.linkLabel ?? 'View'} — ${item.name}`}
      className="group block w-full border-t border-[#F7F4EE]/10 pt-8 pb-14 focus-visible:outline-2 focus-visible:outline-[#E8542A] focus-visible:outline-offset-4"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <motion.span {...reveal(0)} className="font-mono text-xs tabular-nums text-[#E8542A]">
          {String(index + 1).padStart(2, '0')}
        </motion.span>

        <motion.div {...reveal(0)} className="flex flex-wrap justify-end gap-1.5">
          {item.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#F7F4EE]/15 px-2.5 py-0.5 text-[10px] tracking-wide text-[#F7F4EE]/45"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.h3
        {...reveal(1)}
        className="mb-3 font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-tight tracking-tight text-[#F7F4EE] transition-colors duration-300 group-hover:text-[#E8542A]"
      >
        {item.name}
      </motion.h3>

      <motion.p {...reveal(2)} className="mb-6 max-w-md text-sm leading-7 text-[#F7F4EE]/45">
        {item.description}
      </motion.p>

      <motion.span
        {...reveal(3)}
        className="inline-flex items-center gap-2 text-sm text-[#F7F4EE]/85"
      >
        {item.linkLabel ?? 'View Source'}
        <span
          aria-hidden
          className="inline-block transition-transform duration-200 group-hover:translate-x-1.5"
        >
          →
        </span>
      </motion.span>
    </a>
  )
}

export default function OpenSourceSection() {
  if (openSource.length === 0) return null

  return (
    <section id="open-source" className="w-full scroll-mt-20 bg-[#0C0A08] pb-24 sm:pb-32">
      <div className={PAGE_CONTAINER}>
        <SectionHeader
          title="Open Source"
          description="Tools and projects published for the developer community."
          onDark
        />

        <div className="grid grid-cols-1 gap-x-16 sm:grid-cols-2">
          {openSource.map((item, index) => (
            <OpenSourceCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
