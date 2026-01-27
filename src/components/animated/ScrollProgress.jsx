import { motion } from 'framer-motion'
import { useScrollProgress } from '../../hooks/useScrollProgress'

const ScrollProgress = () => {
  const progress = useScrollProgress()

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div
        className="h-full bg-gradient-to-r from-electric via-cyan-400 to-electric"
        style={{
          width: `${progress}%`,
          transition: 'width 0.1s ease',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </motion.div>
  )
}

export default ScrollProgress