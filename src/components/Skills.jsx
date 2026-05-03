import React from 'react'
import { motion } from 'framer-motion'
import { useThemeContext } from '../App'
import { SKILL_CATEGORIES } from '../utils/constants'

export default function Skills() {
  const { isDark } = useThemeContext()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const getIconComponent = (iconName) => {
    return (
      <div className="w-6 h-6 flex items-center justify-center text-xs font-bold">
        {iconName.charAt(0).toUpperCase()}
      </div>
    )
  }

  return (
    <div className={`section-padding ${isDark ? 'bg-[#0a0a0f]' : 'bg-[#f8f9ff]'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
            Technical Expertise
          </p>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto mt-4" />
          <p className={`section-subtitle ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A comprehensive overview of my technical skills and technologies I work with
          </p>
        </motion.div>

        {/* Skills Showcase */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {SKILL_CATEGORIES.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center shadow-lg`}
                >
                  <span className="text-white text-lg font-bold">
                    {category.icon.charAt(0).toUpperCase()}
                  </span>
                </motion.div>
                <div>
                  <h3 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {category.skills.length} technologies mastered
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -4,
                      boxShadow: isDark 
                        ? `0 10px 30px rgba(147, 51, 234, 0.3)` 
                        : `0 10px 30px rgba(147, 51, 234, 0.2)`
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`glass-card p-4 text-center cursor-pointer card-hover ${
                      isDark 
                        ? 'bg-[#0a0a0f]/50 border border-white/10' 
                        : 'bg-white/80 border border-gray-200'
                    }`}
                    style={{ 
                      backgroundColor: isDark 
                        ? `${skill.color}10` 
                        : `${skill.color}08`,
                      borderColor: `${skill.color}30`
                    }}
                  >
                    {/* Skill Icon */}
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 ${
                        isDark ? 'bg-white/10' : 'bg-white/60'
                      }`}
                      style={{ 
                        backgroundColor: isDark ? `${skill.color}20` : `${skill.color}15`,
                        color: skill.color
                      }}
                    >
                      {getIconComponent(skill.icon)}
                    </div>
                    
                    {/* Skill Name */}
                    <h4 className={`text-sm font-semibold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {skill.name}
                    </h4>
                    
                    {/* Proficiency Indicator */}
                    <div className="flex justify-center gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${
                            i < 2 
                              ? isDark ? 'bg-purple-400' : 'bg-purple-600'
                              : isDark ? 'bg-gray-600' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-16 relative overflow-hidden rounded-2xl ${
            isDark ? 'bg-[#0a0a0f]/50' : 'bg-white/60'
          }`}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-2xl" />
          
          <div className="relative z-10 p-8 sm:p-10 text-center">
            {/* Icon */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 flex items-center justify-center shadow-xl"
            >
              <span className="text-white text-2xl font-bold">∞</span>
            </motion.div>
            
            <h3 className={`text-3xl sm:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Always <span className="gradient-text-static">Learning</span>
            </h3>
            
            <p className={`text-lg leading-relaxed max-w-3xl mx-auto mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm continuously expanding my skill set and staying up-to-date with the latest technologies. 
              My focus is on building robust, scalable applications with modern best practices and clean architecture.
            </p>
            
            {/* Tags Grid */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, staggerChildren: 0.1 }}
            >
              {['Problem Solving', 'Clean Code', 'Team Collaboration', 'Agile/Scrum', 'Code Review', 'Innovation', 'Best Practices'].map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: isDark 
                      ? '0 10px 30px rgba(147, 51, 234, 0.3)' 
                      : '0 10px 30px rgba(147, 51, 234, 0.2)'
                  }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 ${
                    isDark
                      ? 'bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:border-purple-500/40'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-purple-50 hover:border-purple-300'
                  }`}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            
            {/* Bottom Accent */}
            <div className="mt-8 flex justify-center">
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}