import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {

  return (
    <>
      <div className="flex items-center justify-center w-full fixed top-0">
        <div className="flex items-center justify-between w-[85%] bg-transparent py-4 z-3 px-2">
          <Link className='transition duration-200 hover:opacity-80'>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dcfd5a6635eec1a74d2c2c_m10-white.svg" alt="m10 logo" />
          </Link>
          <div className="flex items-center justify-center gap-6">
            <NavLink className='text-[16px] text-white font-bold transition duration-200 hover:opacity-80'>Maliyyə</NavLink>
            <NavLink className='text-[16px] text-white font-bold transition duration-200 hover:opacity-80'>Xidmətlər</NavLink>
            <NavLink className='text-[16px] text-white font-bold transition duration-200 hover:opacity-80'>Təhlükəsizlik</NavLink>
          </div>
          <div className="group flex items-center justify-center gap-2 cursor-pointer">
            <span className='text-[16px] text-white font-semibold transition duration-200 group-hover:opacity-80'>Az</span>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dcfd53a67fd07c7146c8b5_16_icon_chevron_down_stroke_white.svg" className='transition duration-200 group-hover:opacity-80 flex object-cover  items-center justify-center' />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Navbar
