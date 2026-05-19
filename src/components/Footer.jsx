import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 border-t text-center"
      style={{ borderColor: 'var(--border)' }}
    >
      <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
        © {new Date().getFullYear()} Zaynab Quazi · Built with intention
      </p>
    </footer>
  )
}
