import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import NextSection from './NextSection'

const projects = [
  {
    title: 'Market Analyzer',
    description:
      'A beginner-friendly market insight tool that analyzes stocks and crypto using real data. Enter a ticker like AAPL or BTC and instantly see trend & momentum, RSI, risk level, and a plain-English explanation — no chart-staring required.',
    tags: ['Python', 'Market APIs', 'AI-Assisted', 'Data Analysis'],
    link: 'https://market-analyzer-omega.vercel.app/',
    status: 'LIVE',
    icon: '📈',
    id: 'MKT-001',
  },
  {
    title: 'Zaya',
    description:
      'A Chrome extension designed to boost student productivity while supporting mental health. Combines focus tools with wellness check-ins to help students stay on track without burning out.',
    tags: ['Chrome Extension', 'JavaScript', 'Productivity', 'Mental Health'],
    link: 'https://github.com/zaynabquazi/Zaya',
    status: 'IN DEV',
    icon: '🧠',
    id: 'EXT-003',
  },
  {
    title: 'Light Sculpture System',
    description:
      'An interactive light sculpture built in C++ on Arduino, integrating hardware and software across coding, physics, and CAD design. Programmed microcontroller logic for dynamic lighting with under 50ms real-time latency.',
    tags: ['C++', 'Arduino', 'Hardware', 'CAD'],
    link: 'https://github.com/zaynabquazi/Ex-5-Kivy-UI/tree/main',
    status: 'ARCHIVED',
    icon: '💡',
    id: 'HW-002',
  },
]

function TronCard({ project, index, inView, playClick }) {
  const [hovered, setHovered] = useState(false)

  const CardWrapper = motion.a

  return (
    <CardWrapper
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={playClick}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative block rounded-xl overflow-hidden cursor-pointer"
      style={{
        textDecoration: 'none',
        background: 'var(--bg)',
        border: '1px solid var(--border)',
      }}
    >
      {/* Animated glow border on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={hovered ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.15), 0 0 30px rgba(255,255,255,0.05)',
        }}
      />

      {/* Top bar — terminal/HUD style */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}
      >
        {/* Left dots */}
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full" style={{ background: 'var(--border)' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: 'var(--border)' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: 'var(--border)' }} />
        </div>
        {/* Project ID */}
        <span className="text-xs font-mono tracking-widest" style={{ color: 'var(--text-secondary)' }}>
          {project.id}
        </span>
        {/* Status badge */}
        <motion.span
          animate={hovered ? { opacity: 1 } : { opacity: 0.5 }}
          className="text-xs font-mono tracking-widest px-2 py-0.5 rounded"
          style={{
            color: project.status === 'LIVE' ? '#4ade80' : 'var(--text-secondary)',
            border: `1px solid ${project.status === 'LIVE' ? '#4ade8040' : 'var(--border)'}`,
            background: project.status === 'LIVE' ? '#4ade8010' : 'transparent',
          }}
        >
          ● {project.status}
        </motion.span>
      </div>

      {/* Main content */}
      <div className="p-6 sm:p-8">
        {/* Tron grid background */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Corner accents */}
        <div className="absolute top-10 left-0 w-4 h-px" style={{ background: 'var(--text-secondary)', opacity: 0.3 }} />
        <div className="absolute top-10 right-0 w-4 h-px" style={{ background: 'var(--text-secondary)', opacity: 0.3 }} />

        <div className="relative z-10">
          {/* Icon + title row */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
            >
              {project.icon}
            </div>
            <h3
              className="text-base sm:text-lg font-semibold font-mono tracking-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              {project.title}
            </h3>
          </div>

          {/* Divider line with glow */}
          <motion.div
            className="h-px mb-5 w-full"
            style={{
              background: hovered
                ? 'linear-gradient(90deg, transparent, var(--text-secondary), transparent)'
                : 'var(--border)',
              transition: 'background 0.3s ease',
            }}
          />

          <p className="text-xs sm:text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded font-mono"
                style={{
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                  letterSpacing: '0.05em',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono" style={{ color: 'var(--text-secondary)', opacity: 0.5 }}>
              // view source
            </span>
            <motion.div
              className="flex items-center gap-2 text-xs font-mono font-medium"
              style={{ color: 'var(--text-secondary)' }}
              animate={hovered ? { x: 4 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span>OPEN</span>
              <span>→</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom scan line animation on hover */}
      <motion.div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, var(--text-secondary), transparent)', opacity: 0.3 }}
        initial={{ top: '100%' }}
        animate={hovered ? { top: ['10%', '100%'] } : { top: '100%' }}
        transition={{ duration: 1.2, ease: 'linear', repeat: hovered ? Infinity : 0 }}
      />
    </CardWrapper>
  )
}

export default function Projects({ playClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section header — terminal style */}
          <div className="flex items-center gap-3 mb-4">
            <p className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: 'var(--text-secondary)' }}>
              ~/projects
            </p>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-10 sm:mb-16"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            Things I've built
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, i) => (
              <TronCard
                key={project.title}
                project={project}
                index={i}
                inView={inView}
                playClick={playClick}
              />
            ))}

            {/* Placeholder — Tron style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative rounded-xl overflow-hidden min-h-[220px] sm:min-h-[280px] flex flex-col items-center justify-center text-center p-8"
              style={{ border: '1px dashed var(--border)', background: 'var(--bg)' }}
            >
              <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }}
              />
              <p className="text-2xl mb-3 relative z-10">🚧</p>
              <p className="text-sm font-mono font-medium mb-1 relative z-10" style={{ color: 'var(--text-primary)' }}>
                // coming soon
              </p>
              <p className="text-xs font-mono relative z-10" style={{ color: 'var(--text-secondary)' }}>
                always building something new
              </p>
            </motion.div>
          </div>
        </motion.div>
        <NextSection targetId="experience" playClick={playClick} />
      </div>
    </section>
  )
}
