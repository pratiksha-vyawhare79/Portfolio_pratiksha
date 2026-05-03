import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiHackerrank } from 'react-icons/si'
import { HiDownload, HiArrowDown, HiMail } from 'react-icons/hi'
import { MdRocketLaunch } from 'react-icons/md'
import { useThemeContext } from '../App'
import { PERSONAL_INFO, TYPING_TITLES } from '../utils/constants'
// Replace profile.jpg with your actual photo in src/assets/
import profilePhoto from '../assets/profile.jpg'

export default function Hero() {
  const { isDark } = useThemeContext()
  const [typedText, setTypedText] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentTitle = TYPING_TITLES[titleIndex]
    let timeout

    if (!isDeleting && charIndex < currentTitle.length) {
      timeout = setTimeout(() => {
        setTypedText(currentTitle.slice(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
      }, 80)
    } else if (!isDeleting && charIndex === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setTypedText(currentTitle.slice(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      }, 40)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTitleIndex(prev => (prev + 1) % TYPING_TITLES.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, titleIndex])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: FaGithub, href: PERSONAL_INFO.github, label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: FaLinkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: SiHackerrank, href: PERSONAL_INFO.hackerrank, label: 'HackerRank', color: 'hover:text-green-400' },
    { icon: HiMail, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email', color: 'hover:text-purple-400' },
  ]

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

  return (
    <div className={`relative min-h-screen flex items-center justify-center overflow-hidden ${isDark ? 'bg-[#0a0a0f]' : 'bg-[#f8f9ff]'}`}>
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #9333ea, transparent)' }}
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }}
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 20, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #22d3ee, transparent)' }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, #ec4899, transparent)' }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting Badge */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-6">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
                isDark
                  ? 'bg-purple-500/10 border-purple-500/30 text-purple-300'
                  : 'bg-purple-50 border-purple-200 text-purple-700'
              }`}>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className={`text-lg sm:text-xl font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight"
            >
              <span className="gradient-text">Pratiksha </span>
              <span className={isDark ? 'text-white' : 'text-gray-900'}>Vyawhare</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 mb-6 h-10">
              <span className={`text-xl sm:text-2xl font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm a{' '}
              </span>
              <span className="text-xl sm:text-2xl font-bold gradient-text-static min-w-[200px] text-left">
                {typedText}
                <span className="animate-pulse text-purple-400">|</span>
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className={`text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            >
              Full Stack Developer skilled in{' '}
              <span className="text-purple-400 font-semibold">Java</span>,{' '}
              <span className="text-blue-400 font-semibold">Spring Boot</span>,{' '}
              <span className="text-cyan-400 font-semibold">React.js</span>,{' '}
              <span className="text-green-400 font-semibold">Node.js</span>,{' '}
              <span className="text-yellow-400 font-semibold">SQL</span>, and{' '}
              <span className="text-blue-300 font-semibold">PostgreSQL</span>, with hands-on experience building
              real-world web applications and REST APIs. Passionate about creating scalable, user-friendly
              solutions and continuously learning new technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient flex items-center gap-2 text-base"
              >
                <span>View Projects</span>
                <MdRocketLaunch size={18} />
              </motion.button>

              <motion.a
                href="/src/assets/pratiksha Mar Resume.pdf"
                download="Pratiksha_Vyawhare_Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`btn-outline flex items-center gap-2 text-base ${isDark ? 'text-white' : 'text-gray-700'}`}
              >
                <HiDownload size={18} />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-3 mb-10"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 ${
                    isDark
                      ? `bg-white/10 hover:bg-white/20 text-gray-400 ${social.color}`
                      : `bg-gray-100 hover:bg-gray-200 text-gray-500 ${social.color}`
                  }`}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0"
            >
              {[
               
                { label: 'Projects', value: '5+', suffix: '' },
                { label: 'MCA CGPA', value: '9.6', suffix: '' },
                { label: 'Certifications', value: '4+', suffix: '' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-2xl p-3 text-center ${
                    isDark
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-white/80 border border-gray-200 shadow-sm'
                  }`}
                >
                  <div className="text-xl font-black gradient-text-static">
                    {stat.value}<span className="text-base">{stat.suffix}</span>
                  </div>
                  <div className={`text-xs font-medium mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 flex flex-col items-center gap-6"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 blur-2xl opacity-30 scale-110" />
              {/* Spinning border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-1 rounded-3xl opacity-60"
                style={{ background: 'conic-gradient(from 0deg, #9333ea, #3b82f6, #22d3ee, #ec4899, #9333ea)' }}
              />
              {/* Photo container */}
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
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
                  <span className="text-6xl font-black text-white">PV</span>
                </div>
              </div>

              {/* Floating tech badges removed */}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div className="flex justify-center mt-12">
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className={`flex flex-col items-center gap-2 mx-auto transition-colors duration-200 ${
              isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
            }`}
            aria-label="Scroll down"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <HiArrowDown size={20} />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
