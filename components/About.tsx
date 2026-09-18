'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUser, FiMapPin, FiGlobe, FiBookOpen } from 'react-icons/fi'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    { icon: FiBookOpen, label: 'Degree', value: 'BS in Artificial Intelligence' },
    { icon: FiGlobe, label: 'Focus', value: 'Generative AI & LLMs' },
    { icon: FiMapPin, label: 'Location', value: 'Chiniot, Pakistan' },
    { icon: FiUser, label: 'GPA', value: '3.48/4.0' },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Passionate about building the future with AI
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image/Avatar */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl transform rotate-6 opacity-30 blur-xl" />
                <div className="glass-card rounded-3xl p-8 relative">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl font-bold text-white">
                    MA
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">Muhammad Ahmad</h3>
                    <p className="text-accent">AI Developer & Researcher</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Currently pursuing a degree in Artificial Intelligence with a strong focus on 
                  <span className="text-accent"> Generative AI</span>, 
                  <span className="text-accent"> Large Language Models (LLMs)</span>, 
                  <span className="text-accent"> Natural Language Processing (NLP)</span>, 
                  <span className="text-accent"> Machine Learning</span>, and 
                  <span className="text-accent"> Deep Learning</span>.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Experienced in developing AI-powered applications using Python, LLMs, RAG, 
                  LangChain, FastAPI, and prompt engineering. Built practical projects involving 
                  intelligent chatbots, document-based question answering, AI automation, and 
                  LLM-powered applications.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Passionate about building innovative, scalable Generative AI solutions that 
                  solve real-world problems and enhance user experiences.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="glass-card rounded-xl p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <item.icon className="text-accent mb-2" size={20} />
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
