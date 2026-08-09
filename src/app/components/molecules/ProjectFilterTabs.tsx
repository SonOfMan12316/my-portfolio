'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { mergeClassNames } from '@/utils/classNames'
import { PROJECT_FILTER_TABS, ProjectFilterTab } from '@/utils/projectFilters'

interface ProjectFilterTabsProps {
  active: ProjectFilterTab
  onChange: (filter: ProjectFilterTab) => void
  className?: string
}

export default function ProjectFilterTabs({
  active,
  onChange,
  className,
}: ProjectFilterTabsProps) {
  const tabsRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const index = PROJECT_FILTER_TABS.findIndex((tab) => tab === active)
    const currentButton = tabsRefs.current[index]
    if (currentButton) {
      setUnderlineProps({
        left: currentButton.offsetLeft,
        width: currentButton.offsetWidth,
      })
    }
  }, [active])

  return (
    <nav
      className={mergeClassNames(
        'relative flex flex-wrap gap-x-6 gap-y-2 border-b border-[#0C0A08]/10 pb-1 mb-8',
        className
      )}
      aria-label="Filter projects"
    >
      {PROJECT_FILTER_TABS.map((tab, idx) => (
        <button
          key={tab}
          ref={(el) => { tabsRefs.current[idx] = el }}
          type="button"
          onClick={() => onChange(tab)}
          className={mergeClassNames(
            'relative pb-2 text-sm tracking-wide transition-colors duration-200',
            active === tab
              ? 'text-[#E8542A]'
              : 'text-[#6B6560] hover:text-[#0C0A08]'
          )}
        >
          {tab}
        </button>
      ))}
      <motion.div
        className="absolute -bottom-0.5 h-[1px] bg-[#E8542A]"
        animate={{ left: underlineProps.left, width: underlineProps.width }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </nav>
  )
}
