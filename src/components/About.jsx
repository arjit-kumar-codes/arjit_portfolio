import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I am a passionate Software Developer with 2 years of experience specializing in modern web technologies.
            My tech stack includes JavaScript, React.js, Next.js, Redux, and TypeScript. I am also well-versed in
            styling libraries like Bootstrap, Material-UI, Tailwind CSS, and Chakra-UI, along with expertise in state
            management and API integrations.
          </p>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Education</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition duration-300">
                <h4 className="text-lg font-medium text-blue-600 mb-1">Bachelor in Technology</h4>
                <p className="text-gray-700">B.K Group of Institution, Mathura</p>
                <p className="text-gray-500">Pursuing</p>
              </div>
              <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 hover:shadow-lg transition duration-300">
                <h4 className="text-lg font-medium text-blue-600 mb-1">Diploma in CSE (3 Years)</h4>
                <p className="text-gray-700">M.G Polytechnic Hathras</p>
                <p className="text-gray-500">2019 - 2022</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
