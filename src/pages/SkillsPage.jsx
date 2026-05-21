import { motion } from 'framer-motion'
import Footer from '../components/Footer'

const skillGroups = [
  {
    category: 'Product & Strategy',
    skills: ['Product Strategy', 'MVP Prototyping', 'Usability Testing', 'User Research', 'Insight Analysis', 'Cross-Functional Collaboration', 'Workflow Optimization'],
  },
  {
    category: 'Communication',
    skills: ['Technical Communication', 'Customer Experience', 'Entrepreneurial Mindset', 'AI-Assisted Development'],
  },
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'Java', 'C++', 'SQL', 'HTML/CSS'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'APIs', 'Figma', 'ChatGPT', 'LLM Tools', 'Gainsight'],
  },
  {
    category: 'Research',
    skills: ['Usability Testing', 'User Interviews', 'Desk Research', 'Survey Design', 'Insight Documentation'],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--text-secondary)' }}>
            Skills
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            What I bring
          </h1>
          <p className="text-sm sm:text-base mb-16 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
            Here's how I think, build, communicate, and solve problems.
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {skillGroups.map((group) => (
              <motion.div
                key={group.category}
                variants={item}
                className="p-6 rounded-2xl glass"
              >
                <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--text-secondary)' }}>
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
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
