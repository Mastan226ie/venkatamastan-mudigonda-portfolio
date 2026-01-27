import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue, useVelocity, useTransform, AnimatePresence } from 'framer-motion'
import { Terminal, Link, Code, Maximize2 } from 'lucide-react'

const AnimatedCursor = () => {
  const [cursorType, setCursorType] = useState('default')
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  // Raw Mouse Position (Motion Values)
  const mX = useMotionValue(0)
  const mY = useMotionValue(0)

  // Icon position (slightly offset)
  const iconX = useMotionValue(0)
  const iconY = useMotionValue(0)

  // Spring configuration (HIGH PERFORMANCE: Snappy but stable)
  // Higher stiffness = less lag, Higher damping = more stability
  const springConfig = { damping: 50, stiffness: 800 }
  const mouseX = useSpring(mX, springConfig)
  const mouseY = useSpring(mY, springConfig)

  // Velocity tracking for movement effects
  const velX = useVelocity(mX)
  const velY = useVelocity(mY)

  // Calculate speed for scale and stretch effects
  const speed = useTransform([velX, velY], ([vx, vy]) => {
    return Math.sqrt(vx * vx + vy * vy)
  })

  // Dot dynamic scale and stretch
  const dotScale = useTransform(speed, [0, 2000], [1, 1.8])
  const dotSkewX = useTransform(velX, [-2000, 2000], [-30, 30])
  const dotSkewY = useTransform(velY, [-2000, 2000], [-30, 30])

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Direct updates bypass React re-renders for movement
      mX.set(e.clientX)
      mY.set(e.clientY)
      iconX.set(e.clientX + 32)
      iconY.set(e.clientY + 32)

      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e) => {
      const target = e.target
      if (target.tagName === 'A' || target.closest('a')) {
        setCursorType('link')
      } else if (target.tagName === 'BUTTON' || target.closest('button')) {
        setCursorType('button')
      } else if (target.tagName === 'CODE' || target.closest('code') || target.closest('.font-mono')) {
        setCursorType('code')
      } else if (target.tagName === 'IMG' || target.closest('img')) {
        setCursorType('image')
      } else {
        setCursorType('default')
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseOver)

    // Show cursor after a short delay
    const timer = setTimeout(() => setIsVisible(true), 300)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseOver)
    }
  }, [isVisible])

  const cursorIcons = {
    default: null,
    link: <Link size={16} />,
    button: <Terminal size={16} />,
    code: <Code size={16} />,
    image: <Maximize2 size={16} />,
  }

  if (!isVisible) return null

  return (
    <>
      {/* Precision Trailing Ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.85 : 1,
        }}
      >
        <motion.div
          animate={{
            width: cursorType === 'default' ? 40 : 64,
            height: cursorType === 'default' ? 40 : 64,
          }}
          className="rounded-full border border-electric absolute"
          style={{
            borderColor: cursorType === 'default' ? 'rgba(99, 102, 241, 0.8)' : 'rgba(99, 102, 241, 1)',
            borderWidth: '1.5px',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
        />

        {/* Dynamic Inner Dot */}
        <motion.div
          className="rounded-full bg-electric absolute"
          style={{
            width: '6px',
            height: '6px',
            scale: dotScale,
            skewX: dotSkewX,
            skewY: dotSkewY,
          }}
          animate={{
            scale: isClicking ? 2 : 1,
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 600 }}
        />

        {/* Glow Pulse */}
        <motion.div
          className="rounded-full border border-electric absolute"
          animate={{
            scale: [1, 1.8],
            opacity: [0.2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
          style={{
            width: '12px',
            height: '12px',
            borderWidth: '1px',
            borderColor: 'rgba(99, 102, 241, 0.5)'
          }}
        />
      </motion.div>

      {/* High-Response Icon */}
      <AnimatePresence>
        {cursorType !== 'default' && (
          <motion.div
            className="fixed pointer-events-none z-[9999] text-electric"
            style={{
              x: iconX,
              y: iconY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 45 }}
            transition={{ type: 'spring', damping: 15, stiffness: 400 }}
          >
            {cursorIcons[cursorType]}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        a, button, [role="button"], input, textarea, select {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}

export default AnimatedCursor
