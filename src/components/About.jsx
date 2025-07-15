import { motion } from 'framer-motion';
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline'


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
        
        </motion.div>
      </div>
    </section>
  );
};

export default About;
