'use client'

import { motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import { mergeClassNames } from '@/utils/classNames'
import { useTabs } from '@/contexts/TabsContext'
import { useEffect, useMemo, useRef, useState } from 'react'

export const NAVIGATION_TAB_INDEX: Record<string, string> = {
  HOME: 'home',
  WORK: 'projects',
  EXPERIENCE: 'experiences',
  CONTACT: 'contact',
}

export const scrollIntoSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const tabsList = [
  { id: NAVIGATION_TAB_INDEX.HOME, label: 'Home' },
  { id: NAVIGATION_TAB_INDEX.WORK, label: 'Work' },
  { id: NAVIGATION_TAB_INDEX.EXPERIENCE, label: 'Experience' },
  { id: NAVIGATION_TAB_INDEX.CONTACT, label: 'Contact' },
]

interface NavigationTabsProps {
  className?: string
  isWithinMenu?: boolean
  dark?: boolean
}

export default function NavigationTabs({
  className,
  isWithinMenu = false,
  dark = false,
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

  const baseText = dark
    ? 'text-[#9B9490] hover:text-[#F7F4EE]'
    : 'text-[#6B6560] hover:text-[#0C0A08]'
  const activeText = dark ? 'text-[#F7F4EE]' : 'text-[#0C0A08]'

  return (
    <nav
      className={mergeClassNames(
        'flex relative',
        isWithinMenu ? 'flex-col items-end gap-3' : 'flex-row gap-7',
        className
      )}
    >
      {tabs.map((tab, idx) => (
        <button
          key={tab.id}
          ref={(el) => { tabsRefs.current[idx] = el }}
          onClick={() => handleClick(tab.id)}
          className={mergeClassNames(
            'relative pb-0.5 text-sm tracking-wide transition-colors duration-200',
            activeTab === tab.id ? activeText : baseText,
            isWithinMenu ? 'text-2xl font-serif font-light' : ''
          )}
        >
          {tab.label}
        </button>
      ))}

      {!isWithinMenu && (
        <motion.div
          className="absolute -bottom-0.5 h-[1px] bg-[#E8542A]"
          animate={{ left: underlineProps.left, width: underlineProps.width }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </nav>
  )
}
