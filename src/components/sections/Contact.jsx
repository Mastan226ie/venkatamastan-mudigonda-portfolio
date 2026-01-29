import { useState } from 'react'
import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'
import TerminalUI from '../ui/TerminalUI'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => setIsSubmitted(false), 3000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }



  const contactDetails = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'venkatamastan.mudigonda@gmail.com',
      id: 'email',
      href: 'mailto:venkatamastan.mudigonda@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+91 9966854181',
      id: 'phone',
      href: 'tel:+919966854181'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Visakhapatnam, Andhra Pradesh',
      id: 'location',
      href: '#hero'
    }
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-electric">Get</span> In Touch
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16 sm:mb-20">

          {/* Left Column: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactDetails.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block group"
                onClick={(e) => {
                  if (e.target.closest('button')) {
                    e.preventDefault();
                  }
                }}
              >
                <GlassCard className="p-4 sm:p-6 flex items-center gap-4 hover:border-electric/30 transition-all hover:scale-[1.02]">
                  <div className="p-3 rounded-lg bg-white/5 text-electric group-hover:bg-electric group-hover:text-space transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm text-gray-400 mb-1">{item.label}</div>
                    <div className="text-sm sm:text-base text-white font-medium truncate" title={item.value}>
                      {item.value}
                    </div>
                  </div>

                </GlassCard>
              </a>
            ))}
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-deep-space/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-deep-space/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg bg-deep-space/50 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all resize-none text-sm sm:text-base"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full sm:w-auto px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${isSubmitted
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-electric text-space hover:bg-electric/90 hover:scale-105'
                    }`}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </motion.div>
        </div>

        {/* Terminal UI - Moved to bottom */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-sm font-mono text-gray-500">TERMINAL ACCESS</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
          </div>
          <TerminalUI />
        </motion.div>
      </div>
    </section>
  )
}

export default Contact