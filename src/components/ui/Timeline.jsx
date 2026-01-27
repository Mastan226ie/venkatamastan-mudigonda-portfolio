import { motion } from 'framer-motion'
import { Calendar, MapPin, Award } from 'lucide-react'

const Timeline = ({ items }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-electric via-electric/50 to-electric" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
          >
            {/* Timeline node */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-electric border-4 border-space z-10 hidden md:block" />
            
            {/* Content */}
            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-electric/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.organization}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    item.type === 'education' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {item.type === 'education' ? 'EDUCATION' : 'EXPERIENCE'}
                  </span>
                </div>
                
                <p className="text-gray-400 mb-4">{item.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                  )}
                  {item.achievement && (
                    <div className="flex items-center gap-1">
                      <Award size={14} />
                      <span>{item.achievement}</span>
                    </div>
                  )}
                </div>
                
                {item.technologies && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs rounded-full bg-electric/10 text-electric font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Spacer for desktop */}
            <div className="hidden md:block w-2/12" />
            
            {/* Date for mobile */}
            <div className="md:hidden mt-4 text-center w-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 text-electric">
                <Calendar size={14} />
                <span className="font-mono">{item.period}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Timeline