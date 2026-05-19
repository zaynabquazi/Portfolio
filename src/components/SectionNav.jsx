import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = ['about', 'skills', 'projects', 'experience', 'art-&-music', 'contact']

export default function SectionNav({ playClick }) {
  const [currentIndex, setCurrentIndex] = useState(-1)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.indexOf(entry.target.id)
            if (idx !== -1) setCurrentIndex(idx)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToNext = () => {
    const nextIndex = currentIndex + 1
    if (nextIndex >= sections.length) return
    playClick()
    const el = document.getElementById(sections[nextIndex])
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPrev = () => {
    if (currentIndex <= 0) return
    playClick()
    const el = document.getElementById(sections[currentIndex - 1])
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const atEnd = currentIndex === sections.length - 1
  const atStart = currentIndex <= 0

  return (
    <AnimatePresence>
      {currentIndex >= 0 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed right-6 bottom-8 z-40 flex flex-col gap-2"
        >
          {/* Up arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToPrev}
            disabled={atStart}
            className="w-9 h-9 rounded-full glass flex items-center justify-center transition-all duration-200"
            style={{
              color: atStart ? 'var(--border)' : 'var(--text-secondary)',
              opacity: atStart ? 0.3 : 1,
            }}
            title="Previous section"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 9L1 4h10L6 9z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" transform="rotate(180 6 6)" />
            </svg>
          </motion.button>

          {/* Section dots */}
          <div className="flex flex-col items-center gap-1.5 py-1">
            {sections.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  playClick()
                  document.getElementById(sections[i])?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === currentIndex ? '6px' : '4px',
                  height: i === currentIndex ? '6px' : '4px',
                  background: i === currentIndex ? 'var(--text-primary)' : 'var(--border)',
                }}
                title={sections[i]}
              />
            ))}
          </div>

          {/* Down arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToNext}
            disabled={atEnd}
            className="w-9 h-9 rounded-full glass flex items-center justify-center transition-all duration-200"
            style={{
              color: atEnd ? 'var(--border)' : 'var(--text-secondary)',
              opacity: atEnd ? 0.3 : 1,
            }}
            title="Next section"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 3L1 8h10L6 3z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" transform="rotate(180 6 6)" />
            </svg>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
