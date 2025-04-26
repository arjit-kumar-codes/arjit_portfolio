import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight drop-shadow-md">
            Arjit Kumar
          </h1>
          <h2 className="text-xl sm:text-3xl font-medium text-indigo-400 mb-6">
            Front-end Developer
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Passionate Software Developer with 2+ years of experience crafting interactive, scalable web apps using <span className="text-indigo-400 font-semibold">JavaScript</span>, <span className="text-indigo-400 font-semibold">React.js</span>, <span className="text-indigo-400 font-semibold">Next.js</span>, and <span className="text-indigo-400 font-semibold">TypeScript</span>.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/arjit_kumar_react_be_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-full shadow-lg hover:bg-indigo-700 transition duration-300"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero;
