import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import NextSection from './NextSection'

const skillGroups = [
  {
    category: 'Product & Strategy',
    skills: [
      'Product Strategy & User-Centered Problem Solving',
      'MVP Prototyping & AI-Assisted Development',
      'Usability Testing, Research & Insight Analysis',
      'Cross-Functional Collaboration & Workflow Optimization',
    ]
  },
  {
    category: 'Communication & Experience',
    skills: [
      'Technical Communication & Customer Experience',
      'Entrepreneurial & Builder Mindset',
    ]
  },
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'Java', 'C++', 'SQL', 'HTML/CSS']
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'APIs', 'Figma', 'AI/LLM Tools']
  }
]

export default function Skills({ playClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 sm:py-32 px-4 sm:px-6" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--text-secondary)' }}>
            Skills
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            What I bring
          </h2>
          <p className="text-sm sm:text-base mb-10 sm:mb-16 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Here's how I think, build, communicate, and solve problems.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl glass"
              >
                <p className="text-xs tracking-widest uppercase mb-3 sm:mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{
                        background: 'var(--bg)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border)'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <NextSection targetId="projects" playClick={playClick} />
      </div>
    </section>
  )
}
