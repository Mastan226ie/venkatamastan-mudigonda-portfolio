import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TypewriterText = ({
  text,
  speed = 50,
  delay = 0,
  className = '',
  cursor = true,
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isStarted, setIsStarted] = useState(false)

  useEffect(() => {
    // Reset state when text changes
    setDisplayedText('')
    setCurrentIndex(0)
    setIsStarted(false)
  }, [text])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStarted(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay, text]) // Added text dependency to restart delay

  useEffect(() => {
    if (!isStarted || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete) {
        onComplete()
      }
      return
    }

    const timeout = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex])
      setCurrentIndex(prev => prev + 1)
    }, speed)

    return () => clearTimeout(timeout)
  }, [currentIndex, isStarted, speed, text, onComplete])

  return (
    <span className={`font-mono ${className}`}>
      {displayedText}
      {cursor && (
        <motion.span
          className="ml-1 text-electric"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          █
        </motion.span>
      )}
    </span>
  )
}

export default TypewriterText