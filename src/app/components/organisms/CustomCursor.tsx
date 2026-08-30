'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, summary'

/**
 * Dot + trailing ring cursor. Only mounts for fine pointers that have not asked
 * for reduced motion, so touch devices and OS-level motion settings are respected.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 320, damping: 30, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 320, damping: 30, mass: 0.5 })

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reducedMotion) return

    setEnabled(true)
    document.body.classList.add('has-custom-cursor')

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      const target = e.target as Element | null
      setActive(Boolean(target?.closest?.(INTERACTIVE)))
    }
    const onLeave = () => setVisible(false)

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)

    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      {/* Precise dot — tracks the pointer exactly */}
      <motion.div
        aria-hidden
        style={{ x, y }}
        animate={{ opacity: visible ? 1 : 0, scale: active ? 0 : 1 }}
        transition={{ duration: 0.18 }}
        className="pointer-events-none fixed left-0 top-0 z-[95] -ml-[3px] -mt-[3px] h-[6px] w-[6px] rounded-full bg-[#E8542A] mix-blend-normal"
      />

      {/* Trailing ring — lags behind and swells over interactive targets */}
      <motion.div
        aria-hidden
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: active ? 1.9 : 1,
        }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
        className="pointer-events-none fixed left-0 top-0 z-[94] -ml-[16px] -mt-[16px] h-8 w-8 rounded-full border border-[#E8542A]/50"
      />
    </>
  )
}
