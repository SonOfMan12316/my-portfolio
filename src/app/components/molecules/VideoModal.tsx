'use client'

import { useEffect } from 'react'
import { motion } from 'motion/react'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function VideoModal({
  src,
  title,
  onClose,
}: {
  src: string
  title: string
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0C0A08]/92 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.3, ease: EASE }}
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-10 right-0 text-sm tracking-wider text-[#9B9490] transition-colors duration-200 hover:text-[#F7F4EE]"
        >
          Close ✕
        </button>

        <video
          src={src}
          controls
          autoPlay
          className="aspect-video w-full bg-[#141210]"
          aria-label={title}
        />

        <p className="mt-3 font-serif text-sm text-[#F7F4EE]/60">{title}</p>
      </motion.div>
    </motion.div>
  )
}
