import { DiIllustrator } from "react-icons/di";
import { cloneElement } from "react";
import { FiFigma } from "react-icons/fi";
import {
  RiBootstrapFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiAdobexd, SiDaisyui, SiMui } from "react-icons/si";
import { motion } from "framer-motion";
import { BiLogoTypescript } from "react-icons/bi";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const icons = [
  { key: "html", icon: <RiHtml5Fill /> },
  { key: "css", icon: <RiCss3Fill /> },
  { key: "js", icon: <RiJavascriptFill /> },
  { key: "ts", icon: <BiLogoTypescript className="text-3xl md:text-5xl lg:text-5xl" /> },
  { key: "react", icon: <RiReactjsFill /> },
  { key: "tailwind", icon: <RiTailwindCssFill /> },
  { key: "daisyui", icon: <SiDaisyui /> },
  { key: "materialui", icon: <SiMui className="text-3xl md:text-5xl lg:text-5xl" /> },
  { key: "bootstrap", icon: <RiBootstrapFill /> },
  { key: "figma", icon: <FiFigma /> },
  { key: "xd", icon: <SiAdobexd /> },
  { key: "illustrator", icon: <DiIllustrator /> },
];


const Tecnos = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-3xl md:text-4xl"
      >
        Tecnologías
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 justify-items-center items-center px-4"
      >
        {icons.map((item, i) => (
          <motion.div
            key={item.key}
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5 + i * 0.3)}
            className="p-2"
          >
            {cloneElement(item.icon, {
              className:
                item.key !== "shadcnui"
                  ? "text-4xl md:text-6xl lg:text-7xl text-white/80"
                  : item.icon.props.className,
            })}
          </motion.div>
        ))}

      </motion.div>
    </div>
  );
};

export default Tecnos;
