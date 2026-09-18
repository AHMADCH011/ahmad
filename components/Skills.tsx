'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiCode,
  FiDatabase,
  FiCpu,
  FiGlobe,
  FiTool,
  FiLayers,
} from 'react-icons/fi'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'AI & ML',
      icon: FiCpu,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        'Generative AI',
        'Machine Learning',
        'Deep Learning',
        'NLP',
        'Computer Vision',
        'LLMs',
      ],
    },
    {
      title: 'Frameworks & Tools',
      icon: FiTool,
      color: 'from-purple-500 to-pink-500',
      skills: [
        'LangChain',
        'FastAPI',
        'Hugging Face',
        'Streamlit',
        'Gradio',
        'Smolagents',
      ],
    },
    {
      title: 'Languages',
      icon: FiCode,
      color: 'from-green-500 to-emerald-500',
      skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      title: 'Specializations',
      icon: FiLayers,
      color: 'from-orange-500 to-red-500',
      skills: [
        'RAG',
        'Prompt Engineering',
        'AI Agents',
        'Vector Databases',
        'Embeddings',
        'Data Structures & Algorithms',
      ],
    },
    {
      title: 'Data Science',
      icon: FiDatabase,
      color: 'from-indigo-500 to-violet-500',
      skills: ['Data Analysis', 'Data Visualization', 'Statistical Modeling', 'Feature Engineering'],
    },
    {
      title: 'Web & APIs',
      icon: FiGlobe,
      color: 'from-pink-500 to-rose-500',
      skills: ['REST APIs', 'React', 'HTML/CSS', 'Git', 'Linux'],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="glass-card rounded-2xl p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}
                />

                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 bg-gradient-to-br ${category.color} rounded-lg`}
                  >
                    <category.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className={`tech-badge px-3 py-1.5 bg-gradient-to-r ${category.color} bg-opacity-20 rounded-full text-sm text-white font-medium cursor-default`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        delay: 0.4 + index * 0.1 + skillIndex * 0.05,
                        duration: 0.4,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages Section */}
          <motion.div
            className="mt-12 glass-card rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Language Skills</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white">
                  UR
                </div>
                <p className="text-white font-medium">Urdu</p>
                <p className="text-gray-400 text-sm">Native</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center text-2xl font-bold text-white">
                  PA
                </div>
                <p className="text-white font-medium">Punjabi</p>
                <p className="text-gray-400 text-sm">Native</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-2xl font-bold text-white">
                  EN
                </div>
                <p className="text-white font-medium">English</p>
                <p className="text-gray-400 text-sm">Professional</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
