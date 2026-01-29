import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, Star, GitBranch, Calendar } from 'lucide-react'

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-2 sm:inset-4 md:inset-8 lg:inset-20 bg-gradient-to-br from-space to-deep-space border border-electric/30 rounded-2xl z-50 overflow-hidden shadow-2xl"
          >
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-electric/30 scrollbar-track-transparent">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-b from-space to-space/80 backdrop-blur-sm border-b border-white/10 p-4 sm:p-6 z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                    <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-electric/20 to-electric/5 flex-shrink-0">
                      {project.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl sm:text-2xl font-bold mb-1">{project.title}</h2>
                      <p className="text-sm sm:text-base text-gray-400 line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={onClose}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0"
                  >
                    <X size={24} />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                  {/* Left Column - Details */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Features */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-4 text-electric">Key Features</h3>
                      <ul className="space-y-3">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-electric mt-2 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-4 text-electric">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-electric/10 text-electric font-mono text-xs sm:text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-4 text-electric">Project Overview</h3>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {project.id === 1
                          ? 'A comprehensive sales forecasting system that leverages historical data to predict future trends. Built with Python and FastAPI, this project demonstrates end-to-end data science workflow from preprocessing to deployment.'
                          : 'A full-featured blog application with user authentication, CRUD operations, and responsive design. Built with Flask and SQL, this project showcases backend development skills and full-stack capabilities.'
                        }
                      </p>
                    </div>
                  </div>

                  {/* Right Column - Stats & Actions */}
                  <div className="space-y-6">
                    {/* Stats */}
                    <div className="bg-gradient-to-br from-white/5 to-transparent rounded-xl p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-bold mb-4 text-electric">GitHub Stats</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Star size={18} className="text-yellow-400" />
                            <span className="text-sm sm:text-base text-gray-300">Stars</span>
                          </div>
                          <span className="text-electric font-mono text-sm sm:text-base">{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <GitBranch size={18} className="text-green-400" />
                            <span className="text-sm sm:text-base text-gray-300">Forks</span>
                          </div>
                          <span className="text-electric font-mono text-sm sm:text-base">{project.stats.forks}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-blue-400" />
                            <span className="text-sm sm:text-base text-gray-300">Last Updated</span>
                          </div>
                          <span className="text-electric font-mono text-xs sm:text-sm">{project.stats.lastUpdated}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 rounded-lg bg-electric/10 hover:bg-electric/20 border border-electric/20 text-electric transition-all text-sm sm:text-base"
                      >
                        <Github size={20} />
                        View Source Code
                      </motion.a>

                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 rounded-lg bg-electric hover:bg-electric/90 text-space font-semibold transition-all text-sm sm:text-base"
                        >
                          <ExternalLink size={20} />
                          View Live Demo
                        </motion.a>
                      )}
                    </div>

                    {/* Note */}
                    <div className="text-xs sm:text-sm text-gray-400 italic p-3 sm:p-4 bg-white/5 rounded-lg">
                      💡 This is a detailed view of the project. You can interact with the live version through the GitHub repository.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal