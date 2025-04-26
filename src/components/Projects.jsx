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
    title: "HR Management App",
    description: "HR app for salary, leaves, inventory & reports. Features automated payroll and role-based authentication.",
    link: "https://staginghr.excellencetechnologies.in/#/app/overview",
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
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-gray-800 mb-14"
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
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-200"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors"
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

export default Projects
