import { motion } from 'framer-motion';
import { MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline'


const Education = () => {
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
          <div className="">
            <h3 className="text-4xl font-extrabold text-white mb-6">Certifications & Training</h3>
            <div className="grid md:grid-cols-1 gap-10 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 * 0.2, duration: 0.5 }}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-400 flex items-center gap-2">
                      MERN Stack Development Training
                    </h3>
                    <p className="text-gray-300 flex items-center gap-2 mt-1">
                      <MapPinIcon className="w-4 h-4 text-gray-400" />
                      Ducat IT Training School, Sector 63, Noida
                    </p>
                  </div>
                  <p className="text-gray-400 flex items-center gap-2 mt-4 sm:mt-0">
                    <CalendarIcon className="w-4 h-4 text-gray-400" />
                    Aug 2022 - Feb 2023
                  </p>
                </div>
                <div className="flex flex-col ">
                  <div className="text-gray-400 text-sm text-left max-w-md">
                    <ul className="list-disc list-inside text-gray-300 space-y-3 pl-2">
                      <li>
                        Covered MongoDB, Express.js, React.js, and Node.js.
                      </li>
                      <li>
                        Hands-on experience with full-stack project development.
                      </li>
                      <li>
                        Focused on building REST APIs, frontend integration, and deployment.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="mt-20">
            <h3 className="text-4xl font-semibold text-white mb-8">Education</h3>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {[
                {
                  title: 'Bachelor in Technology',
                  institute: 'B.K Group of Institution, Mathura',
                  year: '2023 - 2026',
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

export default Education;
