import { motion } from 'framer-motion'
import { BriefcaseIcon, MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline'

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-14"
        >
          Work Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:border-indigo-500 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-indigo-400 flex items-center gap-2">
                <BriefcaseIcon className="w-5 h-5 text-indigo-400" />
                Frontend Developer
              </h3>
              <p className="text-gray-300 flex items-center gap-2 mt-1">
                <MapPinIcon className="w-4 h-4 text-gray-400" />
                Excellence Technology, Sector-8 Noida
              </p>
            </div>
            <p className="text-gray-400 flex items-center gap-2 mt-4 sm:mt-0">
              <CalendarIcon className="w-4 h-4 text-gray-400" />
              May 2023 - April 2025
            </p>
          </div>

          <ul className="list-disc list-inside text-gray-300 space-y-3 pl-2">
            <li>
              Built responsive and scalable web applications using HTML, CSS, JavaScript, and React.js
            </li>
            <li>
              Collaborated with UI/UX designers to implement modern, pixel-perfect interfaces
            </li>
            <li>
              Optimized website performance and ensured cross-browser compatibility
            </li>
            <li>
              Integrated RESTful APIs and managed application state using React hooks and Redux
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience;
