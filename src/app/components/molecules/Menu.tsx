'use client'

import { useState, useEffect, lazy, Suspense, useMemo } from 'react'
import Button from '../atoms/Button'
import { HiMenuAlt4 } from 'react-icons/hi'
import MenuItem from './MenuItem'
import { useRouter, usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import NavigationTabs from '../organisms/NavigationTabs'

const LazyModal = lazy(() => import('./Modal'))

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [pendingPath, setPendingPath] = useState<string | null>(null)

  const router = useRouter()
  const pathname = usePathname()

  const items = useMemo(
    () => [
      {
        label: 'home',
        path: '/',
        navigation: <NavigationTabs isWithinMenu dark />,
      },
      { label: 'projects', path: '/projects' },
    ],
    []
  )

  useEffect(() => {
    items.forEach(({ path }) => router.prefetch(path))
  }, [items, router])

  const handleToggle = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setIsOpen((prev) => !prev)
  }

  const handleItemClick = (path: string) => {
    if (path !== pathname) setPendingPath(path)
    setIsOpen(false)
  }

  const handleAnimationEnd = () => {
    setIsAnimating(false)
    if (pendingPath) {
      router.push(pendingPath)
      setPendingPath(null)
    }
  }

  return (
    <>
      <Button
        onClick={handleToggle}
        disabled={isAnimating || isOpen}
        variant="secondary"
        className="lg:hidden w-12 bg-transparent text-[#E8542A] border-none"
        disableAnimation
      >
        <AnimatePresence mode="wait" initial={false}>
          {!isOpen ? (
            <motion.span
              key="menu"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'inline-block' }}
            >
              <HiMenuAlt4 size={28} />
            </motion.span>
          ) : (
            ''
          )}
        </AnimatePresence>
      </Button>

      <Suspense>
        <LazyModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onAnimationEnd={handleAnimationEnd}
          title="Menu"
          className="flex flex-col h-full justify-between pb-10 pt-16"
        >
          <div className="h-full w-full flex items-center">
            <ul className="flex flex-col items-end gap-8 w-full">
              {items.map(({ label, path, navigation }, index) => (
                <li
                  className="w-full"
                  key={index}
                  onClick={() => handleItemClick(path)}
                >
                  <MenuItem path={path} label={label} />
                  <div className="py-3">{navigation}</div>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-[#4A4540] text-right">
            © 2026 Charles Emanyo
          </p>
        </LazyModal>
      </Suspense>
    </>
  )
}
