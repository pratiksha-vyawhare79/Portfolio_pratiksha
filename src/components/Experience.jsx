import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useThemeContext } from '../App'
import { EXPERIENCE } from '../utils/constants'

function ExperienceCard({ exp, index }) {
  const { isDark } = useThemeContext()
  const [expanded, setExpanded] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-12"
    >
      {/* Timeline dot */}
      <div className={`absolute left-0 top-6 w-8 h-8 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg z-10`}>
        <FiBriefcase size={14} className="text-white" />
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -2 }}
        className={`rounded-2xl overflow-hidden transition-all duration-300 ${
          isDark
            ? 'bg-white/5 border border-white/10 hover:border-purple-500/30'
            : 'bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-200'
        }`}
      >
        {/* Card Header */}
        <div
          className={`p-6 cursor-pointer`}
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              {/* Role */}
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {exp.role}
                </h3>
                {exp.current && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/30">
                    Current
                  </span>
                )}
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  isDark ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'bg-purple-50 text-purple-700 border border-purple-200'
                }`}>
                  {exp.type}
                </span>
              </div>

              {/* Company */}
              <p className={`text-base font-semibold gradient-text-static mb-3`}>
                {exp.company}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-4">
                <div className={`flex items-center gap-1.5 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <FiCalendar size={13} />
                  <span>{exp.duration}</span>
                </div>
                <div className={`flex items-center gap-1.5 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <FiMapPin size={13} />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Expand toggle */}
            <button
              className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-200 ${
                isDark ? 'bg-white/10 hover:bg-white/20 text-gray-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-500'
              }`}
            >
              {expanded ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
            </button>
          </div>
        </div>

        {/* Expandable Content */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className={`px-6 pb-6 border-t ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
            <div className="pt-5 flex flex-col gap-4">
              {exp.highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-xl p-4 ${
                    isDark
                      ? 'bg-white/5 border border-white/8'
                      : 'bg-gray-50 border border-gray-100'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gradient-to-r ${exp.color}`} />
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {item.project}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-50 text-blue-700'
                        }`}>
                          {item.tech}
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function Experience() {
  const { isDark } = useThemeContext()

  return (
    <div className={`section-padding ${isDark ? 'bg-[#0a0a0f]' : 'bg-[#f8f9ff]'}`}>
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
            My journey
          </p>
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto mt-4 mb-6" />
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Building real-world solutions and growing through hands-on experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400 rounded-full" />

          <div className="flex flex-col gap-8">
            {EXPERIENCE.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            Want to know more about my work?
          </p>
          <motion.a
            href="/src/assets/pratiksha Mar Resume.pdf"
            download="Pratiksha_Vyawhare_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 mt-3 btn-gradient text-sm"
          >
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}
