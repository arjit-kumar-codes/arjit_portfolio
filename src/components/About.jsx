import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-white mb-6">About Me</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I am a passionate Software Developer with 2 years of experience specializing in modern web technologies.
            My tech stack includes JavaScript, React.js, Next.js, Redux, and TypeScript. I am also well-versed in
            styling libraries like Bootstrap, Material-UI, Tailwind CSS, and Chakra-UI, along with expertise in state
            management and API integrations.
          </p>

          <div className="mt-20">
            <h3 className="text-2xl font-semibold text-white mb-8">Education</h3>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {[
                {
                  title: 'Bachelor in Technology',
                  institute: 'B.K Group of Institution, Mathura',
                  year: 'Pursuing',
                },
                {
                  title: 'Diploma in CSE (3 Years)',
                  institute: 'M.G Polytechnic Hathras',
                  year: '2019 - 2022',
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <h4 className="text-lg font-semibold text-indigo-400 mb-2">{edu.title}</h4>
                  <p className="text-gray-200">{edu.institute}</p>
                  <p className="text-gray-400 text-sm">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
