import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-6 backdrop-blur-sm">
      <div className="flex flex-shrink-0 items-center ml-4 md:ml-8">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="mx-2" width={100} height={33} />
        </a>
      </div>
      <div className="mr-4 md:mr-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sergio-cuadros-benitez-5199581bb/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-white hover:text-yellow-950 transition-colors duration-300"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/SergioCuadros"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-white hover:text-yellow-950 transition-colors duration-300"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
