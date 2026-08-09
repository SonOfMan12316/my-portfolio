'use client'

import { motion } from 'motion/react'
import { mergeClassNames, PAGE_CONTAINER } from '@/utils/classNames'

/* Reveal each character of the display name from bottom (clip-path mask) */
function HeroName({ line, delay = 0 }: { line: string; delay?: number }) {
  return (
    <span className="block overflow-hidden leading-[0.92] pb-[0.15em]" aria-hidden>
      <motion.span
        className="block"
        initial={{ y: '105%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {line}
      </motion.span>
    </span>
  )
}

export default function CoverSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center min-h-screen overflow-hidden pt-20 pb-16 bg-[#F7F4EE]"
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#0C0A08 1px, transparent 1px), linear-gradient(90deg, #0C0A08 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Floating decorative glyph */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[5%] top-1/3 select-none opacity-[0.04] animate-float-gentle"
      >
        <span className="font-serif text-[clamp(120px,18vw,240px)] text-[#0C0A08] leading-none">
          ◈
        </span>
      </div>

      <div className={mergeClassNames('relative z-10', PAGE_CONTAINER)}>
        {/* Role label */}

        {/* Main display name */}
        <h1
          className="font-serif font-bold tracking-tight text-[#0C0A08] mb-10 sm:mb-14"
          style={{ fontSize: 'clamp(3.8rem, 12.5vw, 9.5rem)' }}
        >
          <HeroName line="Emanyo" delay={0.3} />
          <HeroName line="Charles." delay={0.45} />
        </h1>

        {/* Divider */}

        {/* Title + Specialization */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: 'easeOut' }}
        >
          <p className="text-base sm:text-2xl font-normal text-[#0C0A08] mb-2">
            Engineering Lead &amp; Full Stack Engineer.
          </p>
          <p className="max-w-lg text-base sm:text-lg font-normal leading-7 text-[#0C0A08]/50">
            Specializing in healthcare platforms, AI-powered products, and
            startup environments,
          </p>
        </motion.div>
      </div>

      {/* Scroll pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }}
          className="h-10 w-px origin-top bg-gradient-to-b from-[#0C0A08]/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}
