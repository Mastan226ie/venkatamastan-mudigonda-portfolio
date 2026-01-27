import { motion } from 'framer-motion'

const GlassCard = ({ children, className = '', onClick, hoverEffect = true }) => {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-glass/50 to-glass/20
        backdrop-blur-xl
        border border-white/10
        ${hoverEffect ? 'hover:border-electric/30 transition-all duration-300' : ''}
        ${className}
      `}
      onClick={onClick}
      whileHover={hoverEffect ? { y: -5 } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric/5 via-transparent to-cyan-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  )
}

export default GlassCard