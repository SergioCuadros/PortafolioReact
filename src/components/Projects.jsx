import { BiArrowFromLeft } from "react-icons/bi";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";

export const Projects = () => {
  return (
    <div className="pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Proyectos
      </motion.h2>

      {/* Grid responsive con gap */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className=" rounded-lg shadow-lg p-5 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded mb-4 w-full h-48 object-cover object-center shadow-md"
            />

            <h3 className="mb-2 text-xl font-semibold text-white">
              {project.title}
            </h3>

            <p className="mb-4 text-sm text-stone-400">
              {project.description}
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-stone-800 text-stone-300 px-3 py-1 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded bg-gradient-to-r from-stone-800 to-stone-700 px-4 py-2 text-sm text-stone-200 shadow hover:from-stone-700 hover:to-stone-600 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#4B4B4B,-0.5rem_-0.5rem_#1d0d00] transition"
                >
                  Ver Proyecto <BiArrowFromLeft className="text-lg" />
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-stone-600 px-4 py-2 text-sm text-stone-300 shadow hover:bg-stone-800 hover:text-white active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#4B4B4B,-0.5rem_-0.5rem_#1d0d00] transition"
                >
                  Ver en GitHub <BsGithub className="text-lg" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
