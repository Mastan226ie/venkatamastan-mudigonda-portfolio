import { motion } from 'framer-motion'
import GlassCard from '../ui/GlassCard'
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      type: 'education',
      title: 'B.Tech in Computer Science and Engineering',
      institution: 'Andhra University College Of Engineering, Visakhapatnam',
      period: '2024 - Present',
      duration: '3rd Year',
      icon: <GraduationCap />,
      description: 'Currently pursuing Bachelor of Technology in Computer Science',
      achievements: ['Specializing in Data Science & ML', 'Active in coding competitions']
    },
    {
      type: 'education',
      title: 'Diploma in Computer Science',
      institution: 'AANM & VVRSR Polytechnic, Gudlavalleru',
      period: '2021 - 2024',
      duration: '96%',
      icon: <Award />,
      description: 'Completed Diploma with distinction',
      achievements: ['Scored 96% aggregate', 'Graduated with honors']
    },
    {
      type: 'internship',
      title: 'Data Science Intern',
      company: 'Code Technologies',
      period: 'May 2025 - July 2025',
      duration: '3 months',
      icon: <Briefcase />,
      description: 'Worked on data analysis, preprocessing, and visualization',
      achievements: [
        'Built predictive models for business insights',
        'Optimized data pipelines',
        'Collaborated with cross-functional teams'
      ],
      technologies: ['Pandas', 'NumPy', 'Matplotlib', 'ML']
    }
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-electric">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A cinematic timeline of my academic and professional journey
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-electric via-electric/50 to-electric hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-electric border-4 border-space z-10 hidden md:block" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <GlassCard>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${exp.type === 'internship' ? 'bg-blue-500/20' : 'bg-green-500/20'}`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                            <p className="text-gray-300 mb-2">
                              {exp.institution || exp.company}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs ${exp.type === 'internship' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'}`}>
                            {exp.type === 'internship' ? 'INTERNSHIP' : 'EDUCATION'}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{exp.duration}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4">{exp.description}</p>

                        {exp.achievements && (
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-electric">Key Achievements</h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                                  <div className="w-1.5 h-1.5 rounded-full bg-electric mt-1.5 flex-shrink-0" />
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {exp.technologies && (
                          <div className="mt-4">
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 text-xs rounded-full bg-electric/10 text-electric font-mono"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-2/12" />

                {/* Date for mobile */}
                <div className="md:hidden mt-4 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/10 text-electric">
                    <Calendar size={14} />
                    <span className="font-mono">{exp.period}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience