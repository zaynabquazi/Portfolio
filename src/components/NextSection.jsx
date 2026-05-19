import { motion } from 'framer-motion'

export default function NextSection({ targetId, playClick }) {
  const handleClick = () => {
    playClick()
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex justify-center pt-12 pb-4">
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center rounded-full glass"
        style={{
          width: '44px',
          height: '44px',
          color: 'var(--text-secondary)',
          border: '1px solid var(--border)',
        }}
        aria-label={`Go to next section`}
      >
        <motion.svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          animate={{ y: [0, 3, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <path
            d="M2 4L7 10L12 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.button>
    </div>
  )
}
