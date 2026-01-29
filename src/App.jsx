import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedCursor from './components/animated/AnimatedCursor'
import ParticlesBackground from './components/animated/ParticlesBackground'
import ScrollProgress from './components/animated/ScrollProgress'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import './index.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [cursorEnabled, setCursorEnabled] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setCursorEnabled(!mediaQuery.matches)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {cursorEnabled && <AnimatedCursor />}
      <ScrollProgress />
      <ParticlesBackground />

      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-space px-6"
          >
            <div className="text-center w-full">
              <div className="text-electric font-mono mb-8 px-4 text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wider break-words">
                  LOADING &gt;&gt;&gt; Mastan's Digital Experience
                </div>
              </div>
              <div className="w-full max-w-xs mx-auto h-1 bg-glass rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-electric"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen"
          >
            <Navbar />
            <main className="relative">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App