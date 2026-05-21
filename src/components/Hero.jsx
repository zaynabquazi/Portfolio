import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
}

export default function Hero({ playClick }) {
  const scrollToAbout = () => {
    playClick()
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.08,
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--text-primary) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center w-full max-w-4xl"
      >
        <motion.p
          variants={item}
          className="text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6"
          style={{ color: 'var(--text-secondary)' }}
        >
          Developer · Aspiring TPM
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-4 sm:mb-6 glow-text"
          style={{ color: 'var(--text-primary)', letterSpacing: '-0.03em' }}
        >
          Zaynab
          <br />
          <span style={{ color: 'var(--text-secondary)' }}>Quazi</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-8 sm:mb-12 px-2"
          style={{ color: 'var(--text-secondary)', opacity: 0.6 }}
        >
          Here's how I think, build, communicate, and solve problems.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToAbout}
            className="w-full sm:w-auto px-8 py-3 rounded-full text-sm font-medium transition-all duration-200"
            style={{ background: 'var(--text-primary)', color: 'var(--bg)' }}
          >
            Explore my work
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://www.linkedin.com/in/zaynabquazi/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            className="w-full sm:w-auto px-8 py-3 rounded-full text-sm font-medium glass transition-all duration-200 text-center"
            style={{ color: 'var(--text-primary)' }}
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--text-secondary)' }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-8"
          style={{ background: 'var(--text-secondary)' }}
        />
      </motion.div>
    </section>
  )
}
