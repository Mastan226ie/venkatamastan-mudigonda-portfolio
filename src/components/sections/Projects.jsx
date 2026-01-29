import { useState } from 'react'
import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'
import ProjectModal from '../ui/ProjectModal'
import { ExternalLink, Github, BarChart3, FileText, Calendar, GitBranch } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: 'Trajecta',
      description: 'An Expo-based React Native application for mobile development with modern tooling and best practices.',
      tags: ['React Native', 'Expo', 'TypeScript', 'Mobile'],
      githubUrl: 'https://github.com/Mastan226ie/Trajecta',
      liveUrl: null,
      icon: <GitBranch />,
      features: [
        'Cross-platform mobile app',
        'Expo development workflow',
        'Modern React Native setup'
      ],
      stats: {
        stars: '0',
        forks: '0',
        lastUpdated: 'Active'
      }
    },
    {
      id: 2,
      title: 'SalesSense',
      description: 'AI-powered sales forecasting tool using ARIMA models to predict future sales trends with confidence intervals and interactive visualizations.',
      tags: ['Python', 'ARIMA', 'Streamlit', 'Time Series'],
      githubUrl: 'https://github.com/Mastan226ie/Sales-Analysis-nd-Forecasting',
      liveUrl: null,
      icon: <BarChart3 />,
      features: [
        'ARIMA time series forecasting',
        'Interactive Streamlit dashboard',
        'CSV export functionality',
        'MAE evaluation metrics'
      ],
      stats: {
        stars: '0',
        forks: '0',
        lastUpdated: 'Active'
      }
    },
    {
      id: 3,
      title: 'Mapras Weather',
      description: 'Modern, responsive weather application built with React and Vite, providing real-time weather updates globally using OpenWeatherMap API.',
      tags: ['React', 'Vite', 'OpenWeatherMap API', 'CSS3'],
      githubUrl: 'https://github.com/Mastan226ie/mapras-weather-app',
      liveUrl: 'https://mapras-weather-app.vercel.app/',
      icon: <FileText />,
      features: [
        'Real-time weather data',
        'Global city coverage',
        'Dynamic weather icons',
        'Responsive design'
      ],
      stats: {
        stars: '0',
        forks: '0',
        lastUpdated: 'Active'
      }
    },
    {
      id: 4,
      title: 'Mapras Edu',
      description: 'Educational web platform built with React and Vite, featuring modern development tooling and best practices for learning management.',
      tags: ['React', 'Vite', 'Web Dev', 'Education'],
      githubUrl: 'https://github.com/Mastan226ie/mapras-edu-web',
      liveUrl: null,
      icon: <Calendar />,
      features: [
        'React + Vite setup',
        'Modern build tooling',
        'ESLint configuration',
        'Fast refresh support'
      ],
      stats: {
        stars: '0',
        forks: '0',
        lastUpdated: 'Active'
      }
    }
  ]

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-electric">/</span> Featured Projects
          </h2>
          <p className="text-gray-400">
            A selection of my work in <span className="text-white">Data Science</span> and <span className="text-gray-400">Software Development</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="glass-card h-full p-8 flex flex-col hover:border-electric/30 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="text-electric" size={20} />
                </div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-white/5 text-electric group-hover:bg-electric group-hover:text-white transition-colors">
                    {project.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-electric transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects / GitHub Button */}
        <div className="flex justify-center">
          <a
            href="https://github.com/Mastan226ie?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-electric/30 transition-all font-medium text-gray-300 hover:text-white"
          >
            <Github size={20} />
            <span>Explore More Repositories</span>
          </a>
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  )
}

export default Projects