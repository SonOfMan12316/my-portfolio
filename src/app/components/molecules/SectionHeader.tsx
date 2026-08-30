'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { mergeClassNames } from '@/utils/classNames'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

/**
 * Editorial section header: big serif title on the left,
 * muted supporting line on the right, full-width rule underneath.
 */
export default function SectionHeader({
  title,
  description,
  onDark = false,
  className,
}: {
  title: string
  description?: string
  onDark?: boolean
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })

  const reveal = (i: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE },
  })

  return (
    <div ref={ref} className={mergeClassNames('mb-12 sm:mb-16', className)}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
        <motion.h2
          {...reveal(0)}
          className={mergeClassNames(
            'font-serif font-bold leading-[1.05] tracking-tight',
            'text-[clamp(2.25rem,5.5vw,3.75rem)]',
            onDark ? 'text-[#F7F4EE]' : 'text-[#0C0A08]'
          )}
        >
          {title}
        </motion.h2>

        {description && (
          <motion.p
            {...reveal(1)}
            className={mergeClassNames(
              'shrink-0 text-sm sm:text-base sm:pb-2 sm:text-right',
              onDark ? 'text-[#F7F4EE]/45' : 'text-[#6B6560]'
            )}
          >
            {description}
          </motion.p>
        )}
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        className={mergeClassNames(
          'mt-6 h-px w-full origin-left',
          onDark ? 'bg-[#F7F4EE]/15' : 'bg-[#0C0A08]/12'
        )}
        aria-hidden
      />
    </div>
  )
}
