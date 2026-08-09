'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { mergeClassNames } from '@/utils/classNames'
import NavigationTabs from './NavigationTabs'
import Menu from '../molecules/Menu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={mergeClassNames(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#0C0A08]/90 backdrop-blur-xl border-b border-[#F7F4EE]/6'
          : 'bg-transparent'
      )}
    >
      <div className="flex items-center justify-end h-16 sm:h-18 w-full max-w-[1160px] mx-auto px-6">
        {/* Desktop nav */}
        <NavigationTabs className="hidden lg:flex" dark />

        {/* Mobile menu trigger */}
        <Menu />
      </div>
    </motion.header>
  )
}
