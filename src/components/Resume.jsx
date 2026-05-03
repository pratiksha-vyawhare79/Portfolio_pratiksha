import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiEye, FiCode, FiLayers, FiDatabase, FiTool } from 'react-icons/fi'
import { MdWork, MdSchool, MdRocketLaunch } from 'react-icons/md'
import { useThemeContext } from '../App'

export default function Resume() {
  const { isDark } = useThemeContext()

  const highlights = [
    {
      icon: FiCode,
      title: 'Full Stack Development',
      items: ['Java, Spring Boot, Spring MVC', 'React.js, Node.js, Express.js', 'RESTful APIs & Microservices'],
      color: 'from-purple-500 to-blue-500',
      bg: isDark ? 'from-purple-500/10 to-blue-500/10' : 'from-purple-50 to-blue-50',
      border: isDark ? 'border-purple-500/20' : 'border-purple-200',
    },
    {
      icon: FiLayers,
      title: 'Frontend Skills',
      items: ['React.js, HTML5, CSS3', 'Tailwind CSS, Bootstrap', 'Responsive & Accessible UI'],
      color: 'from-blue-500 to-cyan-500',
      bg: isDark ? 'from-blue-500/10 to-cyan-500/10' : 'from-blue-50 to-cyan-50',
      border: isDark ? 'border-blue-500/20' : 'border-blue-200',
    },
    {
      icon: FiDatabase,
      title: 'Database & Backend',
      items: ['MySQL, PostgreSQL', 'Hibernate/JPA, JDBC', 'Spring Security, Auth'],
      color: 'from-cyan-500 to-teal-500',
      bg: isDark ? 'from-cyan-500/10 to-teal-500/10' : 'from-cyan-50 to-teal-50',
      border: isDark ? 'border-cyan-500/20' : 'border-cyan-200',
    },
    {
      icon: FiTool,
      title: 'Tools & Practices',
      items: ['Git, GitHub, Maven', 'Postman, VS Code, Eclipse', 'Agile/Scrum, SDLC'],
      color: 'from-teal-500 to-green-500',
      bg: isDark ? 'from-teal-500/10 to-green-500/10' : 'from-teal-50 to-green-50',
      border: isDark ? 'border-teal-500/20' : 'border-teal-200',
    },
  ]

  return (
    <div className={`section-padding ${isDark ? 'bg-[#080810]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
            My credentials
          </p>
          <h2 className="section-title">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto mt-4 mb-6" />
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A comprehensive overview of my skills, experience, and achievements.
          </p>
        </motion.div>

        {/* Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`rounded-3xl overflow-hidden mb-12 ${
            isDark
              ? 'bg-white/5 border border-white/10'
              : 'bg-white border border-gray-200 shadow-lg'
          }`}
        >
          {/* Preview Header */}
          <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 p-8 sm:p-12">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Avatar */}
              <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-2xl">PV</span>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-1">
                  Pratiksha Vyawhare
                </h3>
                <p className="text-white/80 text-lg font-medium mb-3">Full Stack Developer</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {['Java', 'Spring Boot', 'React.js', 'Node.js', 'MySQL'].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Preview Body */}
          <div className="p-6 sm:p-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { label: 'Experience', value: '1+ Year', Icon: MdWork },
                { label: 'MCA CGPA', value: '9.6 / 10', Icon: MdSchool },
                { label: 'Projects', value: '5+ Built', Icon: MdRocketLaunch },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-xl p-4 text-center ${
                    isDark
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className="flex justify-center mb-2">
                    <stat.Icon size={24} className={isDark ? 'text-purple-400' : 'text-purple-600'} />
                  </div>
                  <div className="font-black text-lg gradient-text-static">{stat.value}</div>
                  <div className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/src/assets/pratiksha Mar Resume.pdf"
                download="Pratiksha_Vyawhare_Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient flex items-center justify-center gap-2 text-base"
              >
                <FiDownload size={18} />
                Download Resume (PDF)
              </motion.a>
              <motion.a
                href="/src/assets/pratiksha Mar Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`btn-outline flex items-center justify-center gap-2 text-base ${isDark ? 'text-white' : 'text-gray-700'}`}
              >
                <FiEye size={18} />
                View Online
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Skills Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className={`text-xl font-bold text-center mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Resume <span className="gradient-text-static">Highlights</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl p-5 bg-gradient-to-br ${item.bg} border ${item.border} transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-md`}>
                  <item.icon className="text-white" size={18} />
                </div>
                <h4 className={`font-bold text-sm mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h4>
                <ul className="flex flex-col gap-1.5">
                  {item.items.map((point) => (
                    <li key={point} className={`text-xs flex items-start gap-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className="text-purple-400 mt-0.5">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
