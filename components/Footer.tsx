'use client'

import { motion } from 'framer-motion'
import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            className="flex items-center gap-2 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart className="text-red-500" size={16} />
            </motion.span>
            <span>by Muhammad Ahmad</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="https://github.com/AHMADCH011"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-gray-400 hover:text-white"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ahmad-652986362"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link text-gray-400 hover:text-white"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:mahmad.bsai.0017@gmail.com"
              className="social-link text-gray-400 hover:text-white"
            >
              <FiMail size={20} />
            </a>
          </motion.div>

          <motion.p
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            &copy; {currentYear} All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
