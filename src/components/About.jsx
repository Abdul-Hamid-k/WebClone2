import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row gap-3  '>
      {/* top */}
      <div className="bg-zinc-900 p-4 md:p-8 rounded-lg md:w-1/2">
        <h5 className='text-primary'>ABOUT</h5>
        <h3 className='mt-12 text-3xl md:text-4xl '>WHERE FASHION MEETS FREEDOM</h3>

        <div className="mt-8 flex text-sm gap-1 md:gap-3 text-gray-500">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi tempore animi cumque quia cupiditate eos nobis qui, quidem optio enim excepturi sit voluptatum nihil magni nam earum, dolor velit similique amet. Nam!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi tempore animi cumque quia cupiditate eos nobis qui, quidem optio enim excepturi sit voluptatum nihil magni nam earum, dolor velit similique amet. Nam!</p>
        </div>
      </div>

      <img
        className='rounded-lg md:w-1/2 object-cover object-center'
        src={'https://images.unsplash.com/photo-1545758516-0b61a751b57e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="about image" />

      {/* bottom */}
    </div>
  )
}

export default About