import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'
import { User, Code2, GraduationCap, Briefcase, MapPin, Sparkles, Brain } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* Left Column: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <GlassCard className="p-8 text-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-electric/20 to-transparent opacity-50" />

              <div className="relative z-10">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-deep-space border-4 border-electric/30 flex items-center justify-center overflow-hidden shadow-lg shadow-electric/20 group-hover:border-electric transition-all duration-300">
                  <User size={64} className="text-gray-400 group-hover:text-electric transition-colors" />
                  {/* Replace with actual image: <img src="/path/to/image.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Venkata Mastan</h3>
                <div className="inline-block px-4 py-1.5 rounded-full bg-electric/10 border border-electric/30 text-electric text-sm font-medium mb-6">
                  Data Science & ML Enthusiast
                </div>

                {/* Stats removed as requested */}
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Content & Status Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Header & Bio */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3"
              >
                <span className="text-electric">/</span> About Me
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-lg leading-relaxed space-y-4"
              >
                <p>
                  I am a <span className="text-white font-medium">Computer Science student</span> with a strong foundation in <span className="text-white font-medium">Data Science and Machine Learning</span>. My passion lies in uncovering patterns within complexity and transforming raw data into actionable intelligence.
                </p>
                <p>
                  Beyond algorithms and models, I am deeply invested in <span className="text-white font-medium">Web Development</span>, particularly with React. I strive to fuse these two worlds—building intelligent, data-driven applications that are not only powerful but also intuitive and engaging to use.
                </p>
              </motion.div>
            </div>

            {/* Status Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: <Briefcase size={20} />,
                  label: 'Experience',
                  value: 'Data Science Intern',
                  sub: 'Code Technologies',
                  color: 'text-blue-400',
                  bg: 'bg-blue-400/10'
                },
                {
                  icon: <GraduationCap size={20} />,
                  label: 'Education',
                  value: 'B.Tech CS',
                  sub: 'Andhra University',
                  color: 'text-purple-400',
                  bg: 'bg-purple-400/10'
                },
                {
                  icon: <Brain size={20} />, // Changed icon to Brain for ML focus
                  label: 'Focus',
                  value: 'Data Science & ML + React',
                  sub: 'Intelligent Web Solutions',
                  color: 'text-pink-400',
                  bg: 'bg-pink-400/10'
                },
                {
                  icon: <MapPin size={20} />,
                  label: 'Location',
                  value: 'Visakhapatnam',
                  sub: 'Andhra Pradesh, India',
                  color: 'text-green-400',
                  bg: 'bg-green-400/10'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <GlassCard className="p-4 flex items-center gap-4 hover:border-electric/30 transition-colors group">
                    <div className={`p-3 rounded-lg ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                      <div className="font-bold text-white">{item.value}</div>
                      <div className="text-xs text-gray-400">{item.sub}</div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>

            {/* Quote/Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-4 rounded-lg bg-electric/5 border border-electric/10 flex items-start gap-3"
            >
              <Sparkles size={20} className="text-electric mt-1 shrink-0" />
              <p className="text-sm text-gray-300 italic">
                "Architecting intelligent web solutions powered by Data Science precision and Creative Development."
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About