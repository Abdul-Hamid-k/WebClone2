import 'remixicon/fonts/remixicon.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Offers from './components/Offers'
import About from './components/About'
import Advantages from './components/Advantages'

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className='max-w-300 mx-auto py-4 px-[3%] md:px[5%] md:py-5 '>

        <Navbar />

        <HeroSection />

        <Offers />

        <About />

        <Advantages />
      </div>
    </div>
  )
}

export default App