import React from 'react'
import Arrow from './common/Arrow'

const Advantages = () => {
  return (
    <div className='my-16'>
      <h2 className='text-3xl md:text-4xl'>OUR ADVANTAGES</h2>

      {/* top-1 */}
      <div className='flex flex-col md:flex-row gap-3 mt-8 '>

        {/* left */}
        <img
          className='rounded-lg md:w-1/2 object-cover object-center'
          src={'https://images.unsplash.com/photo-1545758516-0b61a751b57e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="about image" />

        {/* right */}
        <div className="flex flex-col gap-3 md:w-1/2">
          {/* 1 */}
          <div className="bg-zinc-900 p-8 rounded-lg ">
            <h3 className='text-lg text-primary'>INDEPENDENT DESIGNERS</h3>

            <div className="mt-4 flex text-sm gap-1 md:gap-3 text-gray-500">
              {/* left */}
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi tempore animi cumque quia cupiditate eos nobis qui, quidem optio enim excepturi sit voluptatum nihil magni nam earum, dolor velit similique amet. Nam!</p>

              {/* right */}
              <div className="flex items-center cursor-pointer self-end pb-4 gap-3">
                <Arrow additionalClass={"-rotate-135"} />
                <p className='text-primary font-medium text-nowrap'>  EXPLORE</p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-zinc-900 p-8 rounded-lg ">
            <h3 className='text-lg text-primary'>EXCLUSIVE & UNIQUETY</h3>

            <div className="mt-4 flex text-sm gap-1 md:gap-3 text-gray-500">
              {/* left */}
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi tempore animi cumque quia cupiditate eos nobis qui, quidem optio enim excepturi sit voluptatum nihil magni nam earum, dolor velit similique amet. Nam!</p>

              {/* right */}
              <div className="flex items-center cursor-pointer self-end pb-4 gap-3">
                <Arrow additionalClass={"-rotate-135"} />
                <p className='text-primary font-medium text-nowrap'>  EXPLORE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom-2 */}
      <div className='flex flex-col md:flex-row mt-8 gap-3'>
        {/* left */}
        <div className="flex flex-col gap-3 md:w-1/2">
          {/* 1 */}
          <div className="bg-zinc-900 p-8 rounded-lg ">
            <h3 className='text-lg text-primary'>INDEPENDENT DESIGNERS</h3>

            <div className="mt-4 flex text-sm gap-1 md:gap-3 text-gray-500">
              {/* left */}
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi tempore animi cumque quia cupiditate eos nobis qui, quidem optio enim excepturi sit voluptatum nihil magni nam earum, dolor velit similique amet. Nam!</p>

              {/* right */}
              <div className="flex items-center cursor-pointer self-end pb-4 gap-3">
                <Arrow additionalClass={"-rotate-135"} />
                <p className='text-primary font-medium text-nowrap'>  EXPLORE</p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-zinc-900 p-8 rounded-lg ">
            <h3 className='text-lg text-primary'>EXCLUSIVE & UNIQUETY</h3>

            <div className="mt-4 flex text-sm gap-1 md:gap-3 text-gray-500">
              {/* left */}
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi tempore animi cumque quia cupiditate eos nobis qui, quidem optio enim excepturi sit voluptatum nihil magni nam earum, dolor velit similique amet. Nam!</p>

              {/* right */}
              <div className="flex items-center cursor-pointer self-end pb-4 gap-3">
                <Arrow additionalClass={"-rotate-135"} />
                <p className='text-primary font-medium text-nowrap'>  EXPLORE</p>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <img
          className='rounded-lg overflow-hidden md:w-1/2  object-cover object-center'
          src={'https://images.unsplash.com/photo-1627917942684-111cb9d75705?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="about image" />
      </div>
    </div>
  )
}

export default Advantages