import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TypewriterText from '../animated/TypewriterText'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const roles = ['Data Science Enthusiast', 'Backend Developer', 'React Developer', 'ML Enthusiast']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 pt-20">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-electric/30 bg-electric/10 backdrop-blur-sm">
            <span className="text-electric font-mono text-sm tracking-wider">
              &lt;Hello_World /&gt;
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            <span className="block text-white mb-2">Venkata Mastan</span>
            <span className="text-electric">Mudigonda</span>
          </h1>

          <div className="h-16 mb-10 flex items-center justify-center">
            <span className="text-xl md:text-3xl text-gray-400 font-light mr-3">I am a</span>
            <TypewriterText
              key={currentRoleIndex} // Key forces re-render for clean typing effect
              text={roles[currentRoleIndex]}
              className="text-xl md:text-3xl text-electric font-semibold"
              speed={50}
              delay={500}
            />
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting scalable data systems and intuitive web experiences.
            Passionate about bridging the gap between <span className="text-white font-medium">complex data</span> and <span className="text-white font-medium">user impact</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-electric text-white font-medium hover:bg-electric-accent transition-all shadow-lg shadow-electric/25 hover:shadow-electric-accent/40"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full border border-white/10 hover:border-electric/50 hover:bg-electric/5 transition-all text-gray-300 hover:text-white backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <SocialLink href="https://github.com/Mastan226ie" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/venkatamastan-mudigonda1326" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="mailto:venkatamastan.mudigonda@gmail.com" icon={<Mail size={20} />} label="Email" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-gray-500"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-electric transition-all border border-white/5 hover:border-electric/30"
    aria-label={label}
  >
    {icon}
  </a>
)

export default Hero