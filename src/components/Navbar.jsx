import { useContext } from 'react'
import NavElem from './common/NavElem'
import { MainContext } from '../context/AppContext'

const Navbar = () => {
  const { isMobileNavVisible, setIsMobileNavVisible } = useContext(MainContext)

  return (
    <div className='relative'>
      <div className='flex items-center justify-between sticky'>
        {/* logo */}
        <h2 className='text-lg text-primary font-medium'>DVSY</h2>

        {/* desktop-view */}
        {/* nav-menu */}
        <div className="gap-2 hidden md:flex">
          <NavElem text={"Designers"} />
          <NavElem text={"collabs"} />
          <NavElem text={"events"} />
          <NavElem text={"blog"} />
          <NavElem text={"card"} />
          <NavElem text={"get in touch"} additionalClass={"bg-orange-500 text-black"} />
        </div>

        {/* hamburger-icon */}
        <i onClick={() => setIsMobileNavVisible(true)} className="cursor-pointer md:hidden ri-menu-4-fill"></i>
      </div>

      {/* mobile-view */}
      <div className={`${isMobileNavVisible ? 'translate-x-[0%] bg-black/40 backdrop-blur-lg' : '-translate-x-full'} fixed z-10 w-screen h-screen top-0 left-0 flex  transition `}>

        {isMobileNavVisible && (
          <>
            <i onClick={() => setIsMobileNavVisible(false)} className="absolute md:hidden right-10 font-medium text-red-500 top-10 ri-close-large-line"></i>

            <div className="w-full gap-2 flex flex-col justify-center items-center ">
              <NavElem text={"Designers"} additionalClass={"w-[80%]"} />
              <NavElem text={"collabs"} additionalClass={"w-[80%]"} />
              <NavElem text={"events"} additionalClass={"w-[80%]"} />
              <NavElem text={"blog"} additionalClass={"w-[80%]"} />
              <NavElem text={"card"} additionalClass={"w-[80%]"} />
              <NavElem text={"get in touch"} additionalClass={"bg-orange-500 text-black w-[80%]"} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar