import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import NextSection from './NextSection'

const experiences = [
  {
    company: 'Apple',
    role: 'Specialist',
    period: 'Aug 2024 – Present',
    location: 'Santa Barbara, CA',
    bullets: [
      'Conducted 20+ daily user need assessments by listening, probing, and adapting communication style to uncover pain points.',
      'Translated complex technical concepts into clear, user-centered guidance for diverse customers, improving first-use confidence.',
      'Documented recurring user challenges and behavioral patterns, surfacing insights that informed team-level service improvements.',
    ]
  },
  {
    company: 'Aseva',
    role: 'Software & Administrative Intern',
    period: 'May – Sep 2025',
    location: 'Santa Barbara, CA',
    bullets: [
      'Managed CRM data and produced structured reports, improving information accessibility for the team by ~20%.',
      'Coordinated workflow documentation across 3+ concurrent projects, reducing overhead by roughly 15%.',
      'Evaluated and onboarded 2–3 digital tools, synthesizing findings into recommendations that saved 3+ hours per week.',
    ]
  },
  {
    company: 'Rocket & Aerospace Club',
    role: 'Vice President',
    period: '2023 – 2025',
    location: 'Santa Barbara, CA',
    link: 'https://sbccaerospaceclub.weebly.com/',
    bullets: [
      'Coordinated club activities, engineering-focused initiatives, and student collaboration within a hands-on aerospace and technology environment.',
      'Contributed to team organization, communication, and outreach efforts supporting STEM engagement.',
    ]
  },
]

export default function Experience({ playClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--text-secondary)' }}>
            Experience
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-12 sm:mb-16"
            style={{ color: 'var(--text-primary)', letterSpacing: '-0.02em' }}
          >
            Where I've been
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-px"
              style={{ background: 'var(--border)' }}
            />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="pl-8 sm:pl-10 pb-12 sm:pb-14 relative"
              >
                {/* Dot */}
                <div
                  className="absolute left-[-5px] w-3 h-3 rounded-full border-2"
                  style={{
                    background: 'var(--bg)',
                    borderColor: 'var(--text-primary)',
                    top: '4px'
                  }}
                />

                {/* Header — stacks on mobile */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-2 mb-1">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                      {exp.link ? (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-70" style={{ color: 'var(--text-primary)', textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: 'var(--text-secondary)' }}>
                          {exp.company} ↗
                        </a>
                      ) : exp.company}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {exp.role}
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                      {exp.period}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {exp.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-3 sm:mt-4 space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--text-secondary)' }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <NextSection targetId="art-music" playClick={playClick} />
      </div>
    </section>
  )
}
