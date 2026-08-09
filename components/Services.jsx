import React from 'react'
import { Link } from 'react-router-dom'
import '../src/App.css'
import '../src/index.css'
const Services = ({ serviceData }) => {
  return (
    <div className='flex items-center justify-center w-full my-16'>
      <div className="flex flex-col items-center justify-center w-[55%] gap-10">
        <h2 className='text-[48px] text-[rgb(20, 20, 20)] font-bold text-center'>Xidmətlər</h2>
        <div className="flex gap-6 w-full">

          {
            serviceData.map((item, id) => (
              <Link key={id} className="flex flex-col items-center justify-between w-full min-h-47.5 flex-1 pl-5 pt-5 pr-4 pb-4 rounded-4xl bg-white cursor-pointer group gap-10">
                <div className="flex items-center justify-between w-full">
                  <h2 className='text-[20px] font-bold text-[#141414]'>{item.title}</h2>
                  <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ee5d43e9e6a4e9a26ff8f7_a06411de213f44c89d1794a8cc77e62f_arrow%20right.svg" alt="arrow-right" className='object-cover flex transition transform duration-200 group-hover:translate-x-1'/>
                </div>
                <img src={item.imgUrl} alt="icon-service" className='object-cover flex self-end ' />
              </Link>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Services
