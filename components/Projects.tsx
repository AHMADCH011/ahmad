'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub, FiCalendar, FiLayers } from 'react-icons/fi'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'DeepScout AI',
      subtitle: 'Autonomous Multi-Agent Research Assistant',
      period: 'Jan 2026 – Apr 2026',
      description:
        'Developed an autonomous AI research agent that independently searches the web, analyzes information, and generates structured research reports with PDF export. Built using a multi-agent architecture with dedicated search and writer agents powered by LLM orchestration.',
      features: [
        'Real-time web search through Tavily API with fallback mechanisms',
        'Session memory for research tracking',
        'Transparent agent reasoning',
        'Professional PDF reports with executive summaries',
      ],
      technologies: ['Python', 'LLMs', 'Smolagents', 'Tavily API', 'Gradio', 'Hugging Face Spaces'],
      gradient: 'from-blue-500 to-cyan-500',
      icon: '🔬',
    },
    {
      title: 'AI Interview Platform',
      subtitle: 'Generative AI Project',
      period: 'Jul 2026 – Aug 2026',
      description:
        'Developed a Generative AI-powered interview platform using LLMs to conduct interactive and personalized technical interviews. Integrated real-time web search and AI-driven feedback systems.',
      features: [
        'LLM-powered question generation',
        'Real-time web search via Tavily API',
        'RESTful backend with FastAPI',
        'Interactive React frontend',
        'Personalized candidate feedback',
      ],
      technologies: ['Python', 'FastAPI', 'React', 'LLMs', 'Tavily API', 'Prompt Engineering'],
      gradient: 'from-purple-500 to-pink-500',
      icon: '🎤',
    },
    {
      title: 'Notes Gene AI',
      subtitle: 'AI-Powered Note Generation System',
      period: 'Sep 2025 – Dec 2025',
      description:
        'An AI-powered note generation system that automatically creates structured and meaningful notes from input text or topics. Helps users convert raw content into well-organized study or reference material.',
      features: [
        'Automatic note generation from text input',
        'Content structuring and summarization',
        'NLP-based text understanding',
      ],
      technologies: ['Python', 'NLP', 'LLMs'],
      gradient: 'from-green-500 to-emerald-500',
      icon: '📝',
    },
    {
      title: 'Hand Sign Recognition',
      subtitle: 'For Disabled Children',
      period: 'Mar 2025 – May 2025',
      description:
        'A computer vision-based system designed to recognize hand signs and gestures to assist communication for disabled children. Built using Python and OpenCV for real-time gesture detection.',
      features: [
        'Real-time hand gesture detection',
        'Image processing and classification',
        'Accessibility-focused design',
      ],
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'Deep Learning'],
      gradient: 'from-orange-500 to-red-500',
      icon: '🤟',
    },
    {
      title: 'Text Summarization using T5',
      subtitle: 'NLP Project',
      period: '',
      description:
        'Implemented a transformer-based NLP model (T5) to generate concise and meaningful summaries from long text documents using abstractive summarization techniques.',
      features: [
        'Abstractive text summarization',
        'Transformer-based deep learning model',
        'Improved readability of long documents',
      ],
      technologies: ['Python', 'Hugging Face Transformers', 'T5'],
      gradient: 'from-indigo-500 to-violet-500',
      icon: '📄',
    },
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 text-lg">
            Innovative AI solutions I&apos;ve built
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card glass-card rounded-2xl p-8 relative overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              >
                {/* Gradient Accent */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{project.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <p className="text-accent">{project.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {project.period && (
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <FiCalendar size={14} />
                      <span>{project.period}</span>
                    </div>
                  )}

                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                      <FiLayers size={14} />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`tech-badge px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 rounded-full text-xs text-white font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
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
