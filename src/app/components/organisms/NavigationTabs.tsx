'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { mergeClassNames } from '@/utils/classNames'
import { useTabs } from '@/contexts/TabsContext'
import { useEffect, useMemo, useRef, useState } from 'react'

export const NAVIGATION_TAB_INDEX: Record<string, string> = {
  HOME: 'home',
  PROJECTS: 'projects',
  EXPERIENCES: 'experiences',
  CERTIFICATION: 'certification',
  CONTACT: 'contact',
}

export const scrollIntoSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const tabsList = [
  { id: NAVIGATION_TAB_INDEX.HOME, label: 'Home' },
  { id: NAVIGATION_TAB_INDEX.PROJECTS, label: 'Projects' },
  { id: NAVIGATION_TAB_INDEX.EXPERIENCES, label: 'Experiences' },
  { id: NAVIGATION_TAB_INDEX.CERTIFICATION, label: 'Certifications' },
  { id: NAVIGATION_TAB_INDEX.CONTACT, label: 'Contact' },
]

interface NavigationTabsProps {
  className?: string
  isWithinMenu?: boolean
}

export default function NavigationTabs({
  className,
  isWithinMenu = false,
}: NavigationTabsProps) {
  const { activeTab, setActiveTab, setIsOnClickScrolling } = useTabs()
  const tabsRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 })

  const pathname = usePathname()
  const tabs = useMemo(() => {
    return isWithinMenu ? tabsList.slice(1) : tabsList
  }, [isWithinMenu])

  useEffect(() => {
    const index = tabs.findIndex((t) => t.id === activeTab)
    const currentButton = tabsRefs.current[index]
    if (currentButton) {
      setUnderlineProps({
        left: currentButton.offsetLeft,
        width: currentButton.offsetWidth,
      })
    }
  }, [activeTab, tabs])

  if (pathname !== '/') return null

  const handleClick = (id: string) => {
    setActiveTab(id)
    setIsOnClickScrolling(true)
    scrollIntoSection(id)

    setTimeout(() => setIsOnClickScrolling(false), 1200)
  }

  return (
    <nav
      className={mergeClassNames(
        'flex space-x-6 relative',
        isWithinMenu ? 'flex-col items-end gap-2' : 'flex-row',
        className
      )}
    >
      {tabs.map((tab, idx) => (
        <button
          key={tab.id}
          ref={(el) => {
            tabsRefs.current[idx] = el
          }}
          onClick={(e) => {
            e.preventDefault()
            handleClick(tab.id)
          }}
          className={mergeClassNames(
            'relative pb-1 transition-colors hover:text-white',
            activeTab === tab.id
              ? 'text-[var(--color-foreground)]'
              : 'text-[var(--color-foreground)]/40',
            isWithinMenu
              ? 'text-xl mr-6 hover:text-[var(--color-foreground)]/40'
              : ''
          )}
        >
          {tab.label}
        </button>
      ))}
      {!isWithinMenu && (
        <motion.div
          className="absolute -bottom-0.5 h-[2px] bg-[var(--action)] rounded"
          animate={{ left: underlineProps.left, width: underlineProps.width }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </nav>
  )
}
