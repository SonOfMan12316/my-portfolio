'use client'

import { motion, useScroll, useSpring } from 'motion/react'

/** Thin scroll-progress rail pinned to the right edge of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    restDelta: 0.001,
  })

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-0 top-0 z-[90] h-screen w-[3px] bg-[#0C0A08]/[0.06]"
    >
      <motion.div
        style={{ scaleY, originY: 0 }}
        className="h-full w-full bg-gradient-to-b from-[#E8542A] via-[#F08A2E] to-[#F5C542]"
      />
    </div>
  )
}
