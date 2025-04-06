import Navbar from "./components/Navbar"
import { Hero } from "./components/Hero"
import Tecnos from "./components/Tecnos"
import { Projects } from "./components/Projects"
import Expirience from "./components/Expirience"
import { Contact } from "./components/Contact"
import CustomCursor from "./components/CursorCustom"

// import { Skills } from "./components/Skills"
const App = () => {
  
  return (
    
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#1d0d00_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          </div>
          <div className="absolute left-0 right-0 top-[-10%] h-[700px] w-[700px] bg-[radial-gradient(circle_400px_at_50%_300px,#1d0d00,#000)] hidden lg:block">
          </div>
          <div className="absolute left-100 right-0 top-[55%] h-[700px] w-[700px] bg-[radial-gradient(circle_400px_at_50%_300px,#1d0d00,#000)] hidden lg:block">
          </div>
        </div>
      </div>
      <CustomCursor />
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Tecnos />
        <Expirience />
        <Projects />
        {/* <Skills/> */}
        <Contact />
      </div>
    </div>
  )
}

export default App