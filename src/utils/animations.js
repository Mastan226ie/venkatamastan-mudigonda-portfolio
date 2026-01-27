import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}

export const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export const glowAnimation = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(0, 247, 255, 0.3)',
      '0 0 40px rgba(0, 247, 255, 0.6)',
      '0 0 20px rgba(0, 247, 255, 0.3)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}

// Scroll animations
export const setupScrollAnimations = () => {
  if (typeof window === 'undefined') return

  // Animate sections on scroll
  gsap.utils.toArray('.animate-on-scroll').forEach((section) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    )
  })

  // Parallax effect for background elements
  gsap.to('.parallax-bg', {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  })
}

// Text reveal animation
export const textReveal = (element) => {
  if (!element) return

  gsap.fromTo(
    element,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'play none none reverse'
      }
    }
  )
}