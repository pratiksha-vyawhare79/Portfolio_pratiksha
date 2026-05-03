import React from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { MdCode, MdRocketLaunch, MdSchool } from 'react-icons/md'
import { useThemeContext } from '../App'
import { PERSONAL_INFO, STATS } from '../utils/constants'
// Replace profile.jpg with your actual photo in src/assets/
import profilePhoto from '../assets/profile.jpg'

export default function About() {
  const { isDark } = useThemeContext()

  const highlights = [
    {
      icon: MdCode,
      title: 'Full Stack',
      desc: 'Java + React.js',
      color: 'from-purple-500 to-blue-500',
      bg: isDark ? 'bg-purple-500/10' : 'bg-purple-50',
    },
    {
      icon: MdRocketLaunch,
      title: '5+ Projects',
      desc: 'Built & Deployed',
      color: 'from-blue-500 to-cyan-500',
      bg: isDark ? 'bg-blue-500/10' : 'bg-blue-50',
    },
    {
      icon: MdSchool,
      title: 'CGPA 9.6',
      desc: 'MCA Graduate',
      color: 'from-cyan-500 to-teal-500',
      bg: isDark ? 'bg-cyan-500/10' : 'bg-cyan-50',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
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
          className="text-center mb-10"
        >
          <p className={`text-sm font-semibold tracking-widest uppercase mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
            Get to know me
          </p>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar + Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Avatar */}
            <motion.div variants={itemVariants} className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 blur-xl opacity-40 scale-110" />
              {/* Rotating gradient border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-1 rounded-2xl opacity-70"
                style={{
                  background: 'conic-gradient(from 0deg, #9333ea, #3b82f6, #22d3ee, #9333ea)',
                  borderRadius: '1rem',
                }}
              />
              {/* Photo */}
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Pratiksha Vyawhare"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback */}
                <div className="hidden w-full h-full bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-black text-white">PV</div>
                    <div className="text-xs font-medium mt-1 text-white/70">Full Stack Dev</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -right-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/20"
              >
                ✦ Open to Work
              </motion.div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3 w-full max-w-sm">
              {[
                { icon: FiMapPin, text: PERSONAL_INFO.location, color: 'text-purple-400' },
                { icon: FiMail, text: PERSONAL_INFO.email, color: 'text-blue-400', href: `mailto:${PERSONAL_INFO.email}` },
                { icon: FiPhone, text: PERSONAL_INFO.phone, color: 'text-cyan-400', href: `tel:${PERSONAL_INFO.phone}` },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
                    isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-sm'
                  }`}
                >
                  <item.icon className={`${item.color} flex-shrink-0`} size={16} />
                  {item.href ? (
                    <a href={item.href} className={`text-sm font-medium hover:underline ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {item.text}
                    </a>
                  ) : (
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.text}</span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Bio + Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Bio */}
            <motion.div variants={itemVariants}>
              <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Passionate Developer &{' '}
                <span className="gradient-text-static">Problem Solver</span>
              </h3>
              <p className={`text-base leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm a Full Stack Developer with a strong foundation in Java ecosystem and modern frontend technologies.
                Currently working at <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Codeverge IT Solutions</span>,
                I build end-to-end web applications that are scalable, performant, and user-friendly.
              </p>
              <p className={`text-base leading-relaxed mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                With an MCA degree from <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>G.H. Raisoni College of Engineering</span> (CGPA: 9.6)
                and hands-on experience with Spring Boot, React.js, and microservices, I bring both academic excellence
                and practical expertise to every project.
              </p>
              <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm passionate about clean code, modern architecture, and creating seamless user experiences.
                When I'm not coding, I'm exploring new technologies and contributing to innovative solutions.
              </p>
            </motion.div>

            {/* Highlight Cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`rounded-2xl p-4 text-center ${
                    isDark
                      ? 'bg-white/5 border border-white/10 hover:border-purple-500/30'
                      : 'bg-white border border-gray-200 shadow-sm hover:border-purple-300'
                  } transition-all duration-300`}
                >
                  <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mx-auto mb-3`}>
                    <item.icon className={`bg-gradient-to-r ${item.color} bg-clip-text`} size={20}
                      style={{ color: i === 0 ? '#9333ea' : i === 1 ? '#3b82f6' : '#22d3ee' }}
                    />
                  </div>
                  <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{item.title}</div>
                  <div className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{item.desc}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Passion Tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {['Spring Boot', 'React.js', 'Microservices', 'REST APIs', 'Clean Code', 'Agile'].map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                    isDark
                      ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300'
                      : 'bg-purple-50 border border-purple-200 text-purple-700'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
