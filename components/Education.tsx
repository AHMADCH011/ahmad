'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar, FiMapPin } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: 'Bachelor of Science in Artificial Intelligence',
      institution: 'Superior University Lahore (FSD Campus)',
      location: 'Faisalabad, Pakistan',
      period: 'Sep 2023 – Current',
      gpa: '3.48/4.0',
      courses: [
        'Generative AI',
        'Large Language Models (LLMs)',
        'Retrieval-Augmented Generation (RAG)',
        'Prompt Engineering',
        'AI Agents',
        'LangChain',
        'Machine Learning',
        'Deep Learning',
        'Natural Language Processing (NLP)',
        'Computer Vision',
        'Data Science',
        'Python Programming',
        'FastAPI',
        'Vector Databases & Embeddings',
      ],
    },
  ]

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            My academic journey in Artificial Intelligence
          </p>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="glass-card rounded-2xl p-8 relative overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
                
                <div className="relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
                      <FiGraduationCap className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-accent text-lg">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <FiCalendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                      GPA: {edu.gpa}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Key Courses</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="tech-badge px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-primary/20 hover:border-primary/30 transition-all cursor-default"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
