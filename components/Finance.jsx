import React from 'react'
import { Link } from 'react-router-dom'
import '../src/App.css'
import '../src/index.css'
const Finance = ({ financeData }) => {
  return (
    <div className='flex items-center justify-center w-full mt-16 mb-22.5  h-full'>
      <div className="flex flex-col items-center justify-center  gap-10 h-full w-[90%] sm:w-[90%] md:w-[90%] lg:w-[55%]">
        <h2 className='text-[36px] text-[#141414] font-bold text-center sm:text-[48px]'>Maliyyə</h2>
        <div className="gap-6 grid  w-full flex-wrap grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

          {
            financeData.map((item, id) => (
              <Link to={item.link} reloadDocument className="flex flex-col flex-1 items-center justify-between w-full min-h-47.5 pl-5 pt-5 pr-4 pb-4 rounded-4xl bg-white cursor-pointer group gap-5">
                <div className="flex items-start justify-between w-full h-full">
                  <h2 className='text-[15px] w-[80%] font-semibold text-[#141414] sm:text-[20px]'>{item.title}</h2>
                  <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ee5d43e9e6a4e9a26ff8f7_a06411de213f44c89d1794a8cc77e62f_arrow%20right.svg" alt="arrow-right" className='object-cover  transition transform duration-200 group-hover:translate-x-1 hidden lg:flex'/>
                </div>
                <img src={item.imgUrl} alt="icon-service" className='object-cover flex self-end' />
              </Link>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Finance
