import React from 'react'
import Arrow from './common/Arrow'

const HeroSection = () => {
  return (
    <div className=" px-5 py-9 md:px-9 md:py-18 bg-[url(https://images.unsplash.com/photo-1696696697606-74ef78122952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center h-100 md:h-132 w-full my-6 rounded-2xl flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between justify-end md:items-end">

      {/* left */}
      <div className="">
        {/* top */}
        <h2 className='text-3xl sm:text-6xl md:text-8xl font-light'>DESIGN</h2>

        {/* bottom */}
        <div className="ps-7 md:ps-15">
          <h2 className='text-3xl sm:text-6xl md:text-8xl font-light'>& FREEDOM</h2>
          <p className='opacity-70 text-sm mt-4'>Explore Independent Style by Embracing Uniueness</p>
          <p className='opacity-70 text-sm'>with our Exclusive Desiger Apparel</p>
        </div>
      </div>

      {/* right */}
      <div className="flex items-center cursor-pointer self-end gap-2">
        <Arrow />
        <p className='text-primary'>  LEARN MORE</p>
      </div>
      {/* <p className='text-primary self-end cursor-pointer'> <i className='ri-arrow-down-long-line p-3 bg-black/30 rounded-full'></i>  LEARN MORE</p> */}
    </div>
  )
}

export default HeroSection