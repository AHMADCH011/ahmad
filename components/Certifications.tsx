'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiExternalLink, FiCheckCircle } from 'react-icons/fi'

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      title: 'The LLM Course',
      issuer: 'Hugging Face',
      date: 'Jun 2026',
      type: 'Project-based',
      link: null,
    },
    {
      title: 'Agents And Workflows',
      issuer: 'OpenAI Academy',
      date: 'Jun 2026',
      type: 'Online',
      link: null,
    },
    {
      title: 'Applied AI Foundations',
      issuer: 'OpenAI Academy',
      date: 'Jun 2026',
      type: 'Online',
      link: null,
    },
    {
      title: 'Model Context Protocol: Advanced Topics',
      issuer: 'Anthropic Academy',
      date: 'Jun 2026',
      type: 'Work-based',
      link: 'https://verify.skilljar.com/c/hk4y5hmkgu4e',
    },
    {
      title: 'AI Fluency: Framework & Foundations',
      issuer: 'Anthropic Academy',
      date: 'Jun 2026',
      type: 'Online',
      link: 'https://verify.skilljar.com/c/6x5avo2yrn99',
    },
    {
      title: 'GenAI Powered Data Analytics Job Simulation',
      issuer: 'Forage',
      date: 'Jul 2026',
      type: 'Online',
      link: null,
    },
    {
      title: 'Introduction to Cyber Security',
      issuer: 'Cisco Networking Academy',
      date: 'Sep 2026',
      type: 'Work-based',
      link: null,
    },
    {
      title: 'Student Voice Leader',
      issuer: 'Superior University',
      date: 'Apr 2025',
      type: 'Work-based',
      link: null,
    },
  ]

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Continuous learning and professional development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="glass-card rounded-2xl p-6 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />

                <div className="relative">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg">
                      <FiAward className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                      <p className="text-accent text-sm">{cert.issuer}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <span>{cert.date}</span>
                    <span className="px-2 py-1 bg-white/5 rounded-full text-xs">
                      {cert.type}
                    </span>
                  </div>

                  {cert.link && (
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      <FiCheckCircle size={14} />
                      <span>Verify Certificate</span>
                      <FiExternalLink size={12} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
