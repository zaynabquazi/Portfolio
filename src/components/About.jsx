import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import zaynabPhoto from '../assets/zaynab.jpg'
import NextSection from './NextSection'

export default function About({ playClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p
            className="text-xs font-medium tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--text-secondary)' }}
          >
            About
          </p>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Photo — shows above text on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-sm mx-auto md:max-w-none"
            >
              <div
                className="absolute inset-0 rounded-3xl opacity-20 blur-2xl"
                style={{ background: 'var(--text-primary)', transform: 'scale(0.85)' }}
              />
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ border: '1px solid var(--border)' }}
              >
                <img
                  src={zaynabPhoto}
                  alt="Zaynab Quazi"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: '420px' }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-20"
                  style={{
                    background: 'linear-gradient(to top, var(--bg) 0%, transparent 100%)'
                  }}
                />
              </div>
            </motion.div>

            {/* Text */}
            <div>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6"
                style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
              >
                Hi, I'm Zaynab.
              </h2>

              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: '60px' } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="h-px mb-6 sm:mb-8"
                style={{ background: 'var(--text-secondary)' }}
              />

              <p
                className="text-sm sm:text-base leading-relaxed mb-8 sm:mb-10"
                style={{ color: 'var(--text-secondary)' }}
              >
                I'm a developer aspiring to become a technical product manager. I care about creating
                products that people can genuinely connect with and benefit from. I'm passionate about
                building technology that feels intuitive, useful, and genuinely helpful.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { label: 'Focus', value: 'Product + Tech' },
                  { label: 'Based in', value: 'Santa Barbara, CA' },
                  { label: 'Currently', value: 'UC Davis' },
                  { label: 'Building', value: 'Things that matter' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="p-4 sm:p-5 rounded-2xl glass"
                  >
                    <p className="text-xs tracking-widest uppercase mb-1 sm:mb-2" style={{ color: 'var(--text-secondary)' }}>
                      {stat.label}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {stat.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        <NextSection targetId="skills" playClick={playClick} />
      </div>
    </section>
  )
}
