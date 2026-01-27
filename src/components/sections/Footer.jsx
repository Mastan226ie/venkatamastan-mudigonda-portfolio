import { motion } from 'framer-motion'
import { Heart, Coffee, Copyright, Orbit } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand Mark */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              {/* Personal brand mark */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-electric to-cyan-400 flex items-center justify-center">
                <span className="font-mono font-bold text-space">MM</span>
              </div>
              <div className="absolute -inset-1 bg-electric/20 blur-lg rounded-lg" />
            </div>
            <div>
              <div className="font-mono font-bold">Venkata Mastan Mudigonda</div>
              <div className="text-sm text-gray-400">Data Alchemist</div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-1 text-gray-400 text-sm"
          >
            <Copyright size={14} />
            <span>{currentYear} Venkata Mastan Mudigonda. All rights reserved.</span>
          </motion.div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 text-gray-400 text-sm"
          >
            <span>Made with</span>
            <Heart size={14} className="text-red-400 fill-red-400 animate-pulse" />
            <span>and</span>
            <Coffee size={14} className="text-amber-400" />
            <span>by Mastan</span>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-xs font-mono tracking-widest uppercase flex items-center justify-center gap-2">
            <Orbit size={14} className="text-electric animate-slow-spin" />
            "Sculpting intelligence from raw data to engineer the interactive digital worlds of tomorrow."
          </p>
        </motion.div>

        {/* Back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6"
        >
          <a
            href="#hero"
            className="inline-flex items-center gap-2 text-electric hover:text-electric/80 transition-colors text-sm"
          >
            <span>Back to top</span>
            <div className="w-5 h-5 border border-electric rounded-full flex items-center justify-center">
              ↑
            </div>
          </a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer