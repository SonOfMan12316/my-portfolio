'use client'

import { motion } from 'motion/react'
import { mergeClassNames, PAGE_CONTAINER } from '@/utils/classNames'

/* Reveal each character of the display name from bottom (clip-path mask) */
function HeroName({ line, delay = 0 }: { line: string; delay?: number }) {
  return (
    <span className="block overflow-hidden leading-[0.92]" aria-hidden>
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
      className="relative flex flex-col justify-center min-h-screen overflow-hidden pt-20 pb-16 bg-[#0C0A08]"
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#F7F4EE 1px, transparent 1px), linear-gradient(90deg, #F7F4EE 1px, transparent 1px)`,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Floating decorative glyph */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[5%] top-1/3 select-none opacity-[0.04] animate-float-gentle"
      >
        <span className="font-serif text-[clamp(120px,18vw,240px)] text-[#F7F4EE] leading-none">
          ◈
        </span>
      </div>

      <div className={mergeClassNames('relative z-10', PAGE_CONTAINER)}>
        {/* Role + availability status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="flex items-center mb-14 sm:mb-20"
        >
          <p className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#9B9490]">
            Full Stack &amp; Mobile Engineer
          </p>
        </motion.div>

        {/* Main display name */}
        <h1
          className="font-serif font-light tracking-tight text-[#F7F4EE] mb-14 sm:mb-20"
          style={{ fontSize: 'clamp(3.8rem, 12.5vw, 9.5rem)' }}
        >
          <HeroName line="Emanyo" delay={0.3} />
          <HeroName line="Charles." delay={0.45} />
        </h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7, ease: 'easeOut' }}
          className="max-w-sm text-sm sm:text-base leading-7 text-[#9B9490]"
        >
          Five years across frontend development, backend systems, and
          cross-platform mobile with a track record of leading product
          delivery in healthcare and startup environments.
        </motion.p>
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
          className="h-10 w-px origin-top bg-gradient-to-b from-[#9B9490]/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
