import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Contact Me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-3">
                <FiMail className="text-indigo-600 text-2xl" />
                <h3 className="text-lg font-semibold text-gray-700">Email</h3>
              </div>
              <a
                href="mailto:arjitrajput1509@gmail.com"
                className="text-gray-600 hover:text-indigo-600 transition"
              >
                arjitrajput1509@gmail.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-3">
                <FiPhone className="text-indigo-600 text-2xl" />
                <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
              </div>
              <p className="text-gray-600">+91 7906155045</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all col-span-1 sm:col-span-2">
              <div className="flex items-center gap-4 mb-4 justify-center">
                <h3 className="text-lg font-semibold text-gray-700">Social Links</h3>
              </div>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/arji-kumar-490b1a24b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-indigo-600 text-xl transition"
                >
                  <FiLinkedin />
                </a>
                <a
                  href="https://github.com/arjit-kumar-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-indigo-600 text-xl transition"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
