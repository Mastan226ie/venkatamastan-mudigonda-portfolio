import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Server, Cpu, GitBranch, Shield } from 'lucide-react'

const SkillCloud = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skills = [
    { name: 'Python', category: 'language', level: 90, icon: <Code /> },
    { name: 'Flask', category: 'framework', level: 85, icon: <Server /> },
    { name: 'FastAPI', category: 'framework', level: 80, icon: <Cpu /> },
    { name: 'Pandas', category: 'library', level: 90, icon: <Database /> },
    { name: 'SQL', category: 'language', level: 85, icon: <Database /> },
    { name: 'Git', category: 'tool', level: 85, icon: <GitBranch /> },
    { name: 'Java', category: 'language', level: 80, icon: <Code /> },
    { name: 'NumPy', category: 'library', level: 85, icon: <Cpu /> },
    { name: 'Matplotlib', category: 'library', level: 80, icon: <Shield /> },
  ]

  const getPosition = (index, total) => {
    const angle = (index / total) * Math.PI * 2
    const radius = 150
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    }
  }

  return (
    <div className="relative h-96 flex items-center justify-center">
      {skills.map((skill, index) => {
        const position = getPosition(index, skills.length)
        
        return (
          <motion.div
            key={skill.name}
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={{ 
              scale: 1, 
              x: position.x, 
              y: position.y,
              rotate: hoveredSkill === skill.name ? [0, 10, -10, 0] : 0
            }}
            whileHover={{ 
              scale: 1.3,
              transition: { type: 'spring', stiffness: 300 }
            }}
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
            className={`absolute cursor-pointer ${
              hoveredSkill === skill.name 
                ? 'z-10 shadow-2xl' 
                : hoveredSkill 
                ? 'opacity-50' 
                : ''
            }`}
            style={{
              filter: hoveredSkill && hoveredSkill !== skill.name ? 'blur(2px)' : 'none',
              transition: 'filter 0.3s ease'
            }}
          >
            <div className={`
              p-4 rounded-2xl backdrop-blur-sm border flex flex-col items-center justify-center
              ${skill.category === 'language' ? 'bg-blue-500/10 border-blue-500/20' : ''}
              ${skill.category === 'framework' ? 'bg-purple-500/10 border-purple-500/20' : ''}
              ${skill.category === 'library' ? 'bg-green-500/10 border-green-500/20' : ''}
              ${skill.category === 'tool' ? 'bg-orange-500/10 border-orange-500/20' : ''}
            `}>
              <div className="text-2xl mb-2">
                {skill.icon}
              </div>
              <div className="text-sm font-mono font-semibold">{skill.name}</div>
              <div className="text-xs text-gray-400 mt-1">{skill.level}%</div>
              
              {/* Progress ring */}
              <div className="relative w-16 h-16 mt-2">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="text-white/10"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="30"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={188.4}
                    strokeDashoffset={188.4 - (188.4 * skill.level) / 100}
                    className="text-electric"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        )
      })}

      {/* Center connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {skills.map((skill, index) => {
          const position = getPosition(index, skills.length)
          return (
            <line
              key={`line-${index}`}
              x1="50%"
              y1="50%"
              x2={`${50 + position.x / 3}%`}
              y2={`${50 + position.y / 3}%`}
              stroke="rgba(0, 247, 255, 0.1)"
              strokeWidth="1"
            />
          )
        })}
      </svg>

      {/* Skill connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {skills.map((skill, index) => {
          if (index >= skills.length - 1) return null
          const pos1 = getPosition(index, skills.length)
          const pos2 = getPosition(index + 1, skills.length)
          
          return (
            <line
              key={`conn-${index}`}
              x1={`${50 + pos1.x / 1.5}%`}
              y1={`${50 + pos1.y / 1.5}%`}
              x2={`${50 + pos2.x / 1.5}%`}
              y2={`${50 + pos2.y / 1.5}%`}
              stroke="rgba(0, 247, 255, 0.05)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          )
        })}
      </svg>
    </div>
  )
}

export default SkillCloud