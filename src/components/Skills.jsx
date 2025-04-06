import { motion } from 'framer-motion';
import { skills } from '../constants';

export const Skills = () => {


  return (
    <div className="skills-section">
      <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card bg-gray-800 p-4 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <p className="text-xl text-white">{skill}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
