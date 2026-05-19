import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import NextSection from './NextSection'

export default function ArtMusic({ playClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="art-&-music" className="py-20 sm:py-32 px-4 sm:px-6" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--text-secondary)' }}>
            Creative
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            Art & Music
          </h2>
          <p className="text-sm sm:text-base mb-10 sm:mb-16 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            I'm just getting started here — this space will grow as I do.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center min-h-[200px] sm:min-h-[260px]"
              style={{ borderColor: 'var(--border)' }}
            >
              <p className="text-4xl mb-4">🎨</p>
              <p className="text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Art</p>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Work in progress — check back soon</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center min-h-[200px] sm:min-h-[260px]"
              style={{ borderColor: 'var(--border)' }}
            >
              <p className="text-4xl mb-4">🎵</p>
              <p className="text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Music</p>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Coming soon</p>
            </motion.div>
          </div>
        </motion.div>
        <NextSection targetId="contact" playClick={playClick} />
      </div>
    </section>
  )
}
