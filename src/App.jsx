import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000000_40%,#3b2f2f_100%)]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar/>
        <Hero/>
      </div>
    </div>
  )
}

export default App