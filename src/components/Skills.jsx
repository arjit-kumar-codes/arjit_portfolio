import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "HTML", "CSS"]
  },
  {
    title: "UI Frameworks",
    skills: ["Material UI", "Tailwind CSS", "Bootstrap", "Chakra-UI"]
  },
  {
    title: "State Management",
    skills: ["Redux", "Redux Toolkit", "React Hooks"]
  },
  {
    title: "Tools",
    skills: ["Git & Github", "VS Code", "Figma", "Jira", "ClickUp"]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-800 mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-4 text-center border-b pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full hover:bg-indigo-100 transition"
                  >
                    {skill}
                  </span>
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
