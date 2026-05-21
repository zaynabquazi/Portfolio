import { motion } from 'framer-motion'
import Footer from '../components/Footer'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function ArtMusicPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--text-secondary)' }}>
            Creative
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            Art & Music
          </h1>
          <p className="text-sm sm:text-base mb-16 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            I'm just getting started here — this space will grow as I do.
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 gap-4 sm:gap-6"
          >
            <motion.div
              variants={item}
              className="p-10 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center min-h-[260px]"
              style={{ borderColor: 'var(--border)' }}
            >
              <p className="text-4xl mb-4">🎨</p>
              <p className="text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Art</p>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Work in progress — check back soon</p>
            </motion.div>

            <motion.div
              variants={item}
              className="p-10 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center min-h-[260px]"
              style={{ borderColor: 'var(--border)' }}
            >
              <p className="text-4xl mb-4">🎵</p>
              <p className="text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Music</p>
              <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>Coming soon</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
