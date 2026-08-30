'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { press } from '@/data/press'
import { PAGE_CONTAINER } from '@/utils/classNames'
import SectionHeader from '../molecules/SectionHeader'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

function formatYear(date?: string) {
  if (!date) return null
  const parsed = new Date(date)
  return Number.isNaN(parsed.getTime()) ? null : String(parsed.getFullYear())
}

export default function PressSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-70px 0px' })

  // Renders only once there is something real to show — see src/data/press.ts
  if (press.length === 0) return null

  return (
    <section id="press" className="w-full scroll-mt-20 bg-[#F7F4EE] py-24 sm:py-32">
      <div className={PAGE_CONTAINER}>
        <SectionHeader
          title="In the Press"
          description="Features, interviews, and mentions."
        />

        <div ref={ref}>
          {press.map((item, index) => {
            const year = formatYear(item.date)
            return (
              <motion.a
                key={item.link}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: EASE }}
                className="group flex items-start justify-between gap-6 border-b border-[#0C0A08]/10 py-7 focus-visible:outline-2 focus-visible:outline-[#E8542A] focus-visible:outline-offset-2"
              >
                <div className="min-w-0 flex-1">
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#E8542A]">
                    {item.outlet}
                    {year && <span className="ml-3 text-[#B5B0AB]">{year}</span>}
                  </p>
                  <h3 className="max-w-2xl font-serif text-lg leading-snug font-medium text-[#0C0A08] transition-colors duration-200 group-hover:text-[#E8542A] sm:text-xl">
                    {item.title}
                  </h3>
                </div>
                <span
                  aria-hidden
                  className="mt-1 shrink-0 text-[#0C0A08]/30 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#E8542A]"
                >
                  ↗
                </span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
