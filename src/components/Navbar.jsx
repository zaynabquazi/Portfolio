import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Art & Music', 'Contact']

export default function Navbar({ darkMode, setDarkMode, soundEnabled, setSoundEnabled, playClick, playDing }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (link) => {
    playClick()
    setMenuOpen(false)
    const el = document.getElementById(link.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-'))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { playClick(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="text-lg font-semibold tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          ZQ
        </motion.button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link}
              whileHover={{ opacity: 1 }}
              onClick={() => handleNav(link)}
              className="text-sm font-medium transition-opacity duration-200"
              style={{ color: 'var(--text-secondary)', opacity: 0.8 }}
              onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              {link}
            </motion.button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => { setSoundEnabled(!soundEnabled); playDing() }}
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-sm"
            style={{ color: 'var(--text-secondary)' }}
            title={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
          >
            {soundEnabled ? '🔊' : '🔇'}
          </motion.button>

          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => { setDarkMode(!darkMode); playDing(!darkMode ? 260 : 1100) }}
            className="w-9 h-9 rounded-full glass flex items-center justify-center text-sm"
            style={{ color: 'var(--text-secondary)' }}
            title={darkMode ? 'Light mode' : 'Dark mode'}
          >
            {darkMode ? '☀️' : '🌙'}
          </motion.button>

          {/* Mobile Menu */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => { setMenuOpen(!menuOpen); playClick() }}
            className="md:hidden w-9 h-9 rounded-full glass flex items-center justify-center"
            style={{ color: 'var(--text-primary)' }}
          >
            <div className="flex flex-col gap-1">
              <span className={`block w-4 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} style={{ background: 'var(--text-primary)' }} />
              <span className={`block w-4 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: 'var(--text-primary)' }} />
              <span className={`block w-4 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} style={{ background: 'var(--text-primary)' }} />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-main"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNav(link)}
                  className="text-left text-sm font-medium py-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
