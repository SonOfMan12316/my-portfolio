'use client'

import { useRef } from 'react'
import Image from 'next/image'
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

function DraggableCrown() {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.08}
      className="absolute -top-8 -left-6 md:-top-14 md:-left-10 lg:-top-20 lg:-left-14 text-[#FFA500] cursor-grab active:cursor-grabbing select-none touch-none z-20"
      style={{ rotate: -25 }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileDrag={{ scale: 1.08 }}
      aria-hidden
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="rgba(255, 165, 0, 0.2)"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 md:w-20 md:h-20 lg:w-32 lg:h-32"
      >
        <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
        <path d="M5 21h14" />
      </svg>
    </motion.div>
  )
}

export default function CoverSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
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

      {/* Floating 3D gem — top right */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[4%] top-[12%] select-none"
        animate={{ y: [0, -18, 0], rotate: [8, 14, 8] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="/gem-3d.png"
          alt=""
          width={260}
          height={260}
          className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-xl"
          priority
        />
      </motion.div>

      {/* Floating 3D gem — bottom right (smaller, offset) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[14%] bottom-[14%] select-none"
        animate={{ y: [0, 14, 0], rotate: [-6, -14, -6] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <Image
          src="/gem-3d.png"
          alt=""
          width={180}
          height={180}
          className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain opacity-70 drop-shadow-lg"
        />
      </motion.div>

      <div className={mergeClassNames('relative z-10', PAGE_CONTAINER)}>
        {/* Main display name */}
        <div className="relative inline-block">
          <DraggableCrown />
          <h1
            className="font-serif font-bold tracking-tight text-[#0C0A08] mb-10 sm:mb-14"
            style={{ fontSize: 'clamp(3.8rem, 12.5vw, 9.5rem)' }}
          >
            <HeroName line="Charles" delay={0.45} />
            <HeroName line="Emanyo." delay={0.3} />
          </h1>
        </div>

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
