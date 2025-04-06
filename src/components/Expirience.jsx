import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Expirience = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experiencia
      </motion.h2>
      <div>
        <ol className="relative border-l border-stone-900 dark:border-stone-700">
          {EXPERIENCES.map((experience, index) => (
            <li key={index} className="mb-10 ml-6">
              <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700"></div>
              <time className="mb-1 text-md font-normal leading-none text-stone-400 dark:text-stone-500">
                {experience.year}
              </time>
              <motion.h3
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="text-lg font-semibold text-stone-900 dark:text-white"
              >
                {experience.role} -{" "}
                <span className="text-sm text-stone-500 dark:text-stone-400">
                  {experience.company}
                </span>
              </motion.h3>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="text-base font-normal text-stone-500 dark:text-stone-400"
              >
                {experience.description}
              </motion.p>
              <div className="mt-5">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-3 mt-5 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Expirience;

