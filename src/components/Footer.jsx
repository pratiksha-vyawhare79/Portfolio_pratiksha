import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'
import { SiHackerrank } from 'react-icons/si'
import { useThemeContext } from '../App'
import { PERSONAL_INFO, NAV_LINKS } from '../utils/constants'

export default function Footer() {
  const { isDark } = useThemeContext()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: FiGithub, href: PERSONAL_INFO.github, label: 'GitHub' },
    { icon: FiLinkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
    { icon: SiHackerrank, href: PERSONAL_INFO.hackerrank, label: 'HackerRank' },
    { icon: FiMail, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
  ]

  const quickLinks = NAV_LINKS.slice(0, 5)
  const moreLinks = NAV_LINKS.slice(5)

  return (
    <footer className={`relative ${isDark ? 'bg-[#050508]' : 'bg-gray-900'}`}>
      {/* Top gradient border */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-5"
          style={{ background: 'radial-gradient(circle, #9333ea, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full blur-3xl opacity-5"
          style={{ background: 'radial-gradient(circle, #22d3ee, transparent)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 flex items-center justify-center shadow-glow-purple">
                  <span className="text-white font-bold text-lg">PV</span>
                </div>
                <div>
                  <div className="text-white font-bold text-lg">Pratiksha Vyawhare</div>
                  <div className="gradient-text-static text-sm font-medium">Full Stack Developer</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Passionate Full Stack Developer building scalable web applications with Java, Spring Boot & React.js.
                Turning ideas into elegant digital solutions.
              </p>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* More Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                More
              </h4>
              <ul className="flex flex-col gap-2">
                {moreLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-gray-400 hover:text-purple-400 text-xs transition-colors duration-200 truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-gray-400 hover:text-purple-400 text-xs transition-colors duration-200"
                >
                  +91 {PERSONAL_INFO.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm flex items-center gap-1.5 flex-wrap justify-center sm:justify-start"
          >
            © {new Date().getFullYear()} Pratiksha Vyawhare. Made with
            <FiHeart className="text-red-400 inline" size={14} />
            using React & Tailwind CSS
          </motion.p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white shadow-glow-purple hover:shadow-lg transition-all duration-200"
            aria-label="Scroll to top"
          >
            <FiArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
