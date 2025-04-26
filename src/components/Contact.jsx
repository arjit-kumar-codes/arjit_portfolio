import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-indigo-400 mb-12">Contact Me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-700">
              <div className="flex items-center gap-4 mb-3">
                <FiMail className="text-indigo-400 text-2xl" />
                <h3 className="text-lg font-semibold text-white">Email</h3>
              </div>
              <a
                href="mailto:arjitrajput1509@gmail.com"
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                arjitrajput1509@gmail.com
              </a>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-700">
              <div className="flex items-center gap-4 mb-3">
                <FiPhone className="text-indigo-400 text-2xl" />
                <h3 className="text-lg font-semibold text-white">Phone</h3>
              </div>
              <p className="text-gray-300">+91 7906155045</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all col-span-1 sm:col-span-2 border border-gray-700">
              <div className="flex items-center gap-4 mb-4 justify-center">
                <h3 className="text-lg font-semibold text-white">Social Links</h3>
              </div>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/arji-kumar-490b1a24b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 text-xl transition"
                >
                  <FiLinkedin />
                </a>
                <a
                  href="https://github.com/arjit-kumar-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 text-xl transition"
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

export default Contact;
