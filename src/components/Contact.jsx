import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const links = [
  {
    label: 'LinkedIn',
    handle: '@zaynabquazi',
    href: 'https://www.linkedin.com/in/zaynabquazi/',
    icon: '💼',
  },
  {
    label: 'GitHub',
    handle: '@zaynabquazi',
    href: 'https://github.com/zaynabquazi',
    icon: '🐙',
  },
  {
    label: 'Email',
    handle: 'zaynabquazi@gmail.com',
    href: 'mailto:zaynabquazi@gmail.com',
    icon: '✉️',
  },
]

export default function Contact({ playClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--text-secondary)' }}>
            Contact
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 sm:mb-6"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            Let's connect
          </h2>
          <p className="text-sm sm:text-base mb-10 sm:mb-16 max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Whether it's a project, an idea, or just a conversation — I'm always open.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                onClick={playClick}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 px-6 py-4 rounded-2xl glass transition-all duration-200"
                style={{ textDecoration: 'none' }}
              >
                <span className="text-2xl">{link.icon}</span>
                <div className="text-left">
                  <p className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-secondary)' }}>
                    {link.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                    {link.handle}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
