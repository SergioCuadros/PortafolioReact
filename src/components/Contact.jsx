
import { motion } from "framer-motion";
// import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Contact = () => {

  return (
    <div className="border-t border-stone-700 pb-20 mt-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="footer p-6 flex flex-col md:flex-row justify-between items-center text-stone-400"
      >
        <div className="flex flex-col space-y-2 mb-5">
          <div className="flex items-center space-x-4">
            <span className="text-sm">© {new Date().getFullYear()} Sergio Cuadros</span>
            <span className="text-sm">All rights reserved</span>
            <span className="text-sm">Built with <span className="text-white">Vite</span> </span>
            <span className="text-sm">Styled with <span className="text-white">TailwindCSS</span></span>
            <span className="text-sm">Deployed on <span className="text-white">Netlify</span></span>
          </div>
        </div>
        
        {/* <nav className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/sergio-cuadros-benitez-5199581bb/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-stone-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://github.com/SergioCuadros"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-stone-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={18} />
          </a>
        </nav> */}
        <div className="mt-10">
          <p className="text-sm mb-5">Un poco de lo que me gusta :)</p>
          <iframe
          title="Spotify Embed: Recommendation Playlist "
          src={`https://open.spotify.com/embed/playlist/1KFCZJqpTUjFnhk4vEoUql?utm_source=generator&theme=0`}
          width="100%"
          style={{ minHeight: '200px' }}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        </div>
        
        
      </motion.div>
    </div>
  );
};