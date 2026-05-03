import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiUser, FiMessageSquare } from 'react-icons/fi'
import { SiHackerrank } from 'react-icons/si'
import { useThemeContext } from '../App'
import { PERSONAL_INFO } from '../utils/constants'

export default function Contact() {
  const { isDark } = useThemeContext()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    else if (formData.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters'

    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email'

    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters'

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: `+91 ${PERSONAL_INFO.phone}`,
      href: `tel:${PERSONAL_INFO.phone}`,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: PERSONAL_INFO.location,
      href: null,
      color: 'from-cyan-500 to-teal-500',
    },
  ]

  const socialLinks = [
    { icon: FiGithub, href: PERSONAL_INFO.github, label: 'GitHub', color: 'hover:text-gray-300 hover:border-gray-400' },
    { icon: FiLinkedin, href: PERSONAL_INFO.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400' },
    { icon: SiHackerrank, href: PERSONAL_INFO.hackerrank, label: 'HackerRank', color: 'hover:text-green-400 hover:border-green-400' },
    { icon: FiMail, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email', color: 'hover:text-purple-400 hover:border-purple-400' },
  ]

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
            Let's connect
          </p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mx-auto mt-4 mb-6" />
          <p className={`max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Let's work together
              </h3>
              <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm currently open to new opportunities and collaborations. Whether it's a full-time role,
                freelance project, or just a chat about tech — reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col gap-3">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    isDark
                      ? 'bg-white/5 border border-white/10 hover:border-purple-500/30'
                      : 'bg-white border border-gray-200 shadow-sm hover:border-purple-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <item.icon className="text-white" size={16} />
                  </div>
                  <div>
                    <p className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={`text-sm font-semibold hover:underline ${isDark ? 'text-gray-200' : 'text-gray-800'}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className={`text-sm font-semibold mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 border ${
                      isDark
                        ? `bg-white/10 border-white/20 text-gray-400 ${social.color}`
                        : `bg-white border-gray-200 text-gray-500 ${social.color} shadow-sm`
                    }`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`rounded-2xl p-5 ${
                isDark
                  ? 'bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20'
                  : 'bg-gradient-to-r from-green-50 to-teal-50 border border-green-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <p className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Available for opportunities
                  </p>
                  <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Open to full-time roles, internships & freelance projects
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl ${
                  isDark
                    ? 'bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/20'
                    : 'bg-gradient-to-br from-green-50 to-teal-50 border border-green-200'
                }`}
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Message Sent!
                </h3>
                <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Thank you for reaching out! I'll get back to you within 24 hours.
                </p>
                <motion.button
                  onClick={() => setSubmitted(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-gradient"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={`rounded-2xl p-6 sm:p-8 ${
                  isDark
                    ? 'bg-white/5 border border-white/10'
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}
              >
                <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Send a Message
                </h3>

                <div className="flex flex-col gap-5">
                  {/* Name */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Your Name *
                    </label>
                    <div className="relative">
                      <FiUser className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} size={16} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`form-input pl-10 ${errors.name ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email Address *
                    </label>
                    <div className="relative">
                      <FiMail className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} size={16} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`form-input pl-10 ${errors.email ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration, Job opportunity..."
                      className="form-input"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Message *
                    </label>
                    <div className="relative">
                      <FiMessageSquare className={`absolute left-3 top-3.5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} size={16} />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or opportunity..."
                        rows={5}
                        className={`form-input pl-10 resize-none ${errors.message ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: submitting ? 1 : 1.02, y: submitting ? 0 : -2 }}
                    whileTap={{ scale: submitting ? 1 : 0.98 }}
                    className={`btn-gradient flex items-center justify-center gap-2 w-full ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
