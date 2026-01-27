import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'
import { Code, Database, Server, Cpu, GitBranch, Shield } from 'lucide-react'

const Skills = () => {
  const skillsData = {
    "Languages": ["Python", "JavaScript", "SQL", "Java", "C"],
    "Frameworks": ["React", "FastAPI", "Flask", "Tailwind CSS"],
    "Tools": ["Git", "Docker", "VS Code", "Postman", "Jupyter"],
    "Data Science": ["Pandas", "NumPy", "Matplotlib", "Scikit-Learn"]
  }

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-electric">/</span> Technical Arsenal
          </h2>
          <p className="text-gray-400">
            A curated list of technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-medium text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-electric/30 hover:bg-white/10 transition-colors text-sm text-gray-300 hover:text-white cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills