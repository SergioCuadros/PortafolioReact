import heroPic from "../assets/hero.jpg";
import { ABOUT_TEXT, HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src={heroPic}
              alt=""
              className="border border-stone-900 rounded-s-3xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Sergio Cuadros
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Frontend Developer
            </span>
            <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {HERO_CONTENT}
            </p>
            {/* <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 hover:bg-stone-800 hover:text-white transition-colors duration-300 ease-in-out"
            >
              Descargar CV
            </a> */}

            {/* <a href="/resume.pdf" target="_blank" download className="group relative w-32 h-12 text-neutral-50 bg-neutral-800 p-2 overflow-hidden ">
              <p className="absolute  font-bold z-10  duration-500"> Descargar CV</p>
              <div className="">
                <div className="absolute duration-500 bg-neutral-600 w-4 h-16  bottom-12 group-hover:-bottom-1 delay-500 right-0"></div>
                <div className="absolute duration-500 bg-neutral-600 w-4 h-16  -bottom-16 group-hover:-bottom-1 right-4"></div>
                <div className="absolute duration-500 bg-neutral-600 w-4 h-16  bottom-12 group-hover:-bottom-1 delay-500 right-12"></div>
                <div className="absolute duration-500 bg-neutral-600 w-4 h-16  -bottom-16 group-hover:-bottom-1 right-12"></div>
                <div className="absolute duration-500 bg-neutral-600 w-4 h-16  bottom-12 group-hover:-bottom-1 delay-500 right-18"></div>
                <div className="absolute duration-500 bg-neutral-600 w-4 h-16  -bottom-16 group-hover:-bottom-1 right-20"></div>
                <div className="absolute duration-500 bg-neutral-600 w-4 h-16  bottom-12 group-hover:-bottom-1 delay-500 right-26"></div>
              </div>
            </a> */}

<a
  href="/resume.pdf"
  target="_blank"
  download
  className="cursor-pointer uppercase bg-neutral-800 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#4B4B4B,-0.5rem_-0.5rem_#3E2723] transition"
>
  Descargar CV
</a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
