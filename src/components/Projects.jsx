import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCalendar, FiChevronDown, FiChevronUp, FiLayers } from 'react-icons/fi'
import { MdRocketLaunch } from 'react-icons/md'
import { useThemeContext } from '../App'
import { PROJECTS } from '../utils/constants'

// Map gradient string to a solid accent color for the left border / header bar
const gradientToAccent = {
  'from-purple-600 via-blue-600 to-cyan-500': { bar: '#9333ea', light: 'rgba(147,51,234,0.12)', border: 'rgba(147,51,234,0.35)' },
  'from-violet-500 via-purple-500 to-blue-500': { bar: '#7c3aed', light: 'rgba(124,58,237,0.12)', border: 'rgba(124,58,237,0.35)' },
  'from-pink-500 via-rose-500 to-orange-400': { bar: '#ec4899', light: 'rgba(236,72,153,0.12)', border: 'rgba(236,72,153,0.35)' },
}

function getAccent(gradient) {
  return gradientToAccent[gradient] || { bar: '#9333ea', light: 'rgba(147,51,234,0.12)', border: 'rgba(147,51,234,0.35)' }
}

function ProjectCard({ project, index }) {
  const { isDark } = useThemeContext()
  const [showDetails, setShowDetails] = useState(false)
  const accent = getAccent(project.gradient)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <motion.div
        whileHover={{ y: -5 }}
        className={`rounded-2xl overflow-hidden h-full transition-all duration-300 ${
          isDark
            ? 'bg-[#0f0f1a] border border-white/10 hover:border-purple-500/40'
            : 'bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-purple-200'
        }`}
        style={{
          boxShadow: isDark ? `0 0 0 0 transparent` : undefined,
        }}
      >
        {/* Colored top accent bar */}
        <div
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, ${accent.bar}, transparent)` }}
        />

        {/* Card Header */}
        <div
          className="px-6 pt-5 pb-4 flex items-start justify-between gap-4"
          style={{ background: isDark ? accent.light : `${accent.bar}08` }}
        >
          <div className="flex-1 min-w-0">
            {/* Category + Duration row */}
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-bold"
                style={{ background: accent.light, color: accent.bar, border: `1px solid ${accent.border}` }}
              >
                {project.category}
              </span>
              <div className={`flex items-center gap-1 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                <FiCalendar size={10} />
                <span>{project.duration}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className={`text-xl font-black mb-0.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {project.title}
            </h3>
            <p className="text-sm font-semibold" style={{ color: accent.bar }}>
              {project.subtitle}
            </p>
          </div>

          {/* Icon box */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: accent.light, border: `1px solid ${accent.border}` }}
          >
            <FiLayers size={20} style={{ color: accent.bar }} />
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px mx-6 ${isDark ? 'bg-white/8' : 'bg-gray-100'}`} />

        {/* Card Body */}
        <div className="p-6 pt-5">
          {/* Description */}
          <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  isDark
                    ? 'bg-white/6 border border-white/10 text-gray-300 hover:bg-white/12'
                    : 'bg-gray-50 border border-gray-200 text-gray-700 hover:bg-purple-50 hover:border-purple-200'
                }`}
                style={{ borderLeftColor: project.techColors[tech], borderLeftWidth: '2px' }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer row: links + expand */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
              style={{ color: accent.bar }}
            >
              {showDetails ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
              {showDetails ? 'Hide details' : 'View details'}
            </button>

            <div className="flex gap-2">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                    isDark ? 'bg-white/8 hover:bg-white/15 text-gray-400 hover:text-white border border-white/10' : 'bg-gray-100 hover:bg-gray-200 text-gray-500 border border-gray-200'
                  }`}
                  aria-label="GitHub"
                >
                  <FiGithub size={14} />
                </motion.a>
              )}
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                    isDark ? 'bg-white/8 hover:bg-white/15 text-gray-400 hover:text-white border border-white/10' : 'bg-gray-100 hover:bg-gray-200 text-gray-500 border border-gray-200'
                  }`}
                  aria-label="Live Demo"
                >
                  <FiExternalLink size={14} />
                </motion.a>
              )}
            </div>
          </div>

          {/* Expandable Details */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className={`mt-4 pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                  <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    Key Features
                  </p>
                  <ul className="flex flex-col gap-2">
                    {project.longDescription.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className={`flex items-start gap-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent.bar }} />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const { isDark } = useThemeContext()

  return (
    <div className={`section-padding ${isDark ? 'bg-[#080810]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
            What I've built
          </p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto mt-4 mb-6" />
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Real-world applications built with modern technologies, solving actual problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More Projects Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-12 text-center p-8 rounded-2xl ${
            isDark
              ? 'bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20'
              : 'bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100'
          }`}
        >
          <p className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            More projects in progress
          </p>
          <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Currently working on NGO Website and Vispera at Codeverge IT Solutions
          </p>
          <motion.a
            href="https://github.com/pratikshavyawhare"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 btn-gradient text-sm"
          >
            <FiGithub size={16} />
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}
