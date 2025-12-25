import React from 'react'
import Arrow from './common/Arrow'

const Offers = () => {

  const offers1 = [
    { title: "INDEPENDENCY", desc: "Explore the creativity of independent designers from around the globe." },
    { title: "UNIQUITY", desc: "Discover the charm of unique pieces that stand out effortlessly." },
    { title: "QUALITY", desc: "Experience unparallel craftmanship and attention to detail." },
    { title: "SUSTAINABILTY", desc: "Embrace eco-consious fashion choices without compromising on style." }]

  const offers2 = [
    { title: "DESIGNERS", value: "150" },
    { title: "CLIENTS", value: "500" },
    { title: "MASTERPICES", value: "20k" },
    { title: "EVENTS", value: "50" },
  ]

  return (
    <div>
      {/* top */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {offers1.map(offer => (
          <div className="bg-zinc-900 rounded-lg p-8 flex flex-col justify-between">
            <div>
              <h2 className='text-primary'>{offer.title}</h2>
              <p className='mt-2 text-gray-500 text-sm'>{offer.desc}</p>
            </div>


            <div className="mt-8 flex items-center cursor-pointer gap-2">
              <Arrow additionalClass={"-rotate-135"} />
              <p className='text-primary text-gray-400 font-medium'>  LEARN MORE</p>
            </div>
            {/* <p className='text-primary mt-8 text-gray-400 font-medium text-sm'>LEARN MORE</p> */}
          </div>
        ))}
      </div>


      {/* bottom */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-15 justify-items-center">
        {offers2.map(offer => (
          <div className=''>
            <h2 className='text-primary text-gray-500 font-medium'>{offer.title}</h2>
            <p className=' text-5xl'>{offer.value}+</p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Offers