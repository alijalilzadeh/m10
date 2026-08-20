import React from 'react'
import { Link } from 'react-router-dom'
const BirBonus = () => {
  return (
    <div className='flex items-center justify-center w-full '>
      <Link to='https://birbonus.az/' target='_blank' style={{
        backgroundImage: `url("https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68db95603e42283f1378b129_2d286771f2fe1d7cac5f8c0ff7f4e210_bonus%20banner.png")`
      }} className="flex flex-col items-center justify-center gap-4  rounded-4xl p-8 min-h-80 bg-no-repeat bg-cover w-[95%] sm:w-[90%] md:w-[95%] lg:w-[55%]">
        <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dae07a06890dd32eee8679_Badge%20container.svg" alt="birbonus" />
        <h2 className='text-[36px] text-[#141414] font-bold md:text-[48px]'>Hər alışda bonuslar qazan!</h2>
        <Link className='text-[#007dec] text-[16px] font-semibold underline transition duration-200 hover:text-[#2793F0]'>Ətraflı</Link>
      </Link>
    </div>
  )
}

export default BirBonus
