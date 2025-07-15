import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: "Renoon",
    description: "A marketplace for buying and selling fabrics. Implemented Redux Toolkit for state management and Material-UI for UI.",
    link: "https://dashboard.renoon.com/",
    tech: ["React", "Redux", "Material-UI"]
  },
  {
    title: " WaveX Ai",
    description: "Built with React and Tailwind CSS, this AI-powered chat app lets users enter a website URL to get real-time business insights. Users can ask questions, and the system responds with relevant, AI-generated answers, based on the site's data.",
    link: "https://www.wavexai.io/",
    tech: ["React", "Redux Toolkit", "Tailwind CSS"]
  },
  {
    title: "Co-trader",
    description: "Crypto trading platform for exchanging tokens, staking, and stock management.",
    link: "https://eth.cotrader.com/#/web3off/",
    tech: ["Next.js", "Redux", "Chakra-UI"]
  },
  {
    title: "Pratham",
    description: "College management system for tracking attendance, schedules, and teacher activities.",
    link: "https://prathampunedigital.prathampune.org/",
    tech: ["React", "Redux Toolkit", "Tailwind CSS"]
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-white mb-14"
        >
          Projects
        </motion.h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:border-indigo-500 transition-all duration-300 p-6 border border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-indigo-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-600/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-200 font-medium text-sm transition-colors"
              >
                View Project
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;
