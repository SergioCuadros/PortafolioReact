import { animate } from "framer-motion";
import { DiIllustrator } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import {
  RiBootstrapFill,
  RiCss3Fill,
  RiCss3Line,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNeteaseCloudMusicFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiAdobexd } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      reapet: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tecnos = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tecnologías
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <RiHtml5Fill className="text-7xl text-white-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <RiCss3Fill className="text-7xl text-white-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <RiJavascriptFill className="text-7xl text-white-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <RiReactjsFill className="text-7xl text-white-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4.5)}
          className="p-4"
        >
          <RiTailwindCssFill className="text-7xl text-white-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <RiBootstrapFill className="text-7xl text-white-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5.5)}
          className="p-4"
        >
          <FiFigma className="text-7xl text-white-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6)}
          className="p-4"
        >
          <SiAdobexd className="text-7xl text-white-400" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(6.5)}
          className="p-4"
        >
          <DiIllustrator className="text-7xl text-white-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tecnos;
