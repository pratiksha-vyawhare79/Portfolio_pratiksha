import React from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiAward, FiBook } from 'react-icons/fi'
import { MdSchool, MdMenuBook, MdWorkspacePremium, MdEmojiEvents } from 'react-icons/md'
import { HiAcademicCap } from 'react-icons/hi'
import { useThemeContext } from '../App'
import { EDUCATION, TRAINING, CERTIFICATIONS } from '../utils/constants'

function EducationCard({ edu, index }) {
  const { isDark } = useThemeContext()

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-12"
    >
      {/* Timeline dot */}
      <div className={`absolute left-0 top-5 w-8 h-8 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg z-10`}>
        {edu.scoreType === 'cgpa'
          ? <HiAcademicCap size={14} className="text-white" />
          : <MdMenuBook size={14} className="text-white" />
        }
      </div>

      <motion.div
        whileHover={{ y: -3 }}
        className={`rounded-2xl p-5 transition-all duration-300 ${
          isDark
            ? `bg-white/5 border ${edu.highlight ? 'border-purple-500/40' : 'border-white/10'} hover:border-purple-500/30`
            : `bg-white border ${edu.highlight ? 'border-purple-200' : 'border-gray-200'} shadow-sm hover:shadow-md`
        }`}
      >
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex-1">
            <h3 className={`font-bold text-base mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {edu.degree}
            </h3>
            <p className={`font-semibold text-sm gradient-text-static mb-2`}>
              {edu.institution}
            </p>
            <div className="flex flex-wrap gap-3">
              <div className={`flex items-center gap-1.5 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <FiCalendar size={11} />
                <span>{edu.duration}</span>
              </div>
              <div className={`flex items-center gap-1.5 text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <FiMapPin size={11} />
                <span>{edu.location}</span>
              </div>
            </div>
          </div>
          <div className={`px-3 py-1.5 rounded-xl text-sm font-bold ${
            edu.highlight
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-glow-purple'
              : isDark
              ? 'bg-white/10 text-gray-300'
              : 'bg-gray-100 text-gray-700'
          }`}>
            {edu.score}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function CertCard({ cert, index }) {
  const { isDark } = useThemeContext()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.03, y: -3 }}
      className={`rounded-xl p-4 flex items-start gap-3 transition-all duration-300 ${
        isDark
          ? 'bg-white/5 border border-white/10 hover:border-purple-500/30'
          : 'bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-200'
      }`}
    >
      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
        <MdWorkspacePremium size={18} className="text-white" />
      </div>
      <div>
        <h4 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {cert.title}
        </h4>
        <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {cert.issuer}
        </p>
        <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${
          isDark ? 'bg-white/10 text-gray-400' : 'bg-gray-100 text-gray-500'
        }`}>
          {cert.type}
        </span>
      </div>
    </motion.div>
  )
}

export default function Education() {
  const { isDark } = useThemeContext()

  return (
    <div className={`section-padding ${isDark ? 'bg-[#0a0a0f]' : 'bg-[#f8f9ff]'}`}>
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
            Academic background
          </p>
          <h2 className="section-title">
            Education & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto mt-4 mb-6" />
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Strong academic foundation combined with practical training and industry certifications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Education Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <FiBook className="text-white" size={18} />
              </div>              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Academic Education
              </h3>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-5 bottom-5 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-teal-500 rounded-full" />
              <div className="flex flex-col gap-5">
                {EDUCATION.map((edu, index) => (
                  <EducationCard key={edu.id} edu={edu} index={index} />
                ))}
              </div>
            </div>

            {/* Professional Training */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                  <MdSchool size={18} className="text-white" />
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Professional Training
                </h3>
              </div>

              {TRAINING.map((training) => (
                <motion.div
                  key={training.id}
                  whileHover={{ y: -3 }}
                  className={`rounded-2xl p-5 transition-all duration-300 ${
                    isDark
                      ? 'bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20'
                      : 'bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                    <div>
                      <h4 className={`font-bold text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {training.title}
                      </h4>
                      <p className="text-sm font-semibold gradient-text-static">{training.organization}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        isDark ? 'bg-orange-500/20 text-orange-300' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {training.type}
                      </span>
                      <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {training.duration}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {training.topics.map((topic) => (
                      <span
                        key={topic}
                        className={`text-xs px-2 py-1 rounded-full ${
                          isDark ? 'bg-white/10 text-gray-300' : 'bg-white text-gray-700 border border-gray-200'
                        }`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Certifications & Awards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                <FiAward className="text-white" size={18} />
              </div>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Certifications & Awards
              </h3>
            </motion.div>

            <div className="flex flex-col gap-3">
              {CERTIFICATIONS.map((cert, index) => (
                <CertCard key={cert.id} cert={cert} index={index} />
              ))}
            </div>

            {/* Achievement Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`mt-8 rounded-2xl p-6 text-center ${
                isDark
                  ? 'bg-gradient-to-br from-purple-500/15 to-blue-500/15 border border-purple-500/25'
                  : 'bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200'
              }`}
            >
              <div className="flex justify-center mb-3">
                <MdEmojiEvents size={40} className="text-yellow-400" />
              </div>
              <h4 className={`font-bold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                State-Level Achievement
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Won <span className="font-semibold text-yellow-400">Third Prize</span> at State-Level PPT & Seminar Competition,
                demonstrating strong presentation and technical communication skills.
              </p>
            </motion.div>

            {/* GPA Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`mt-4 rounded-2xl p-6 ${
                isDark
                  ? 'bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20'
                  : 'bg-gradient-to-br from-green-50 to-teal-50 border border-green-200'
              }`}
            >
              <div className="flex items-center gap-4">
                <HiAcademicCap size={40} className="text-purple-400 flex-shrink-0" />
                <div>
                  <div className="text-3xl font-black gradient-text-static">9.6 CGPA</div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    MCA — G.H. Raisoni College of Engineering, Pune
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
