import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../src/App.css'
import '../src/index.css'
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropDown, setDropDown] = useState('')
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }, []);
  return (
    <>
      <div onMouseDown={() => setDropDown('')} className={`flex items-center justify-center z-10 w-[90%] `}>
        <div className="flex items-center justify-between w-full bg-transparent py-4  px-2">
          <Link className='transition duration-200 hover:opacity-80'>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dcfd5a6635eec1a74d2c2c_m10-white.svg" alt="m10 logo" />
          </Link>
          <div className="flex items-center justify-center gap-6 relative">
            <div onMouseEnter={() => setDropDown('finance')} className="flex flex-col gap-2 items-center justify-between relative w-full">
              <NavLink onMouseEnter={() => setDropDown('finance')} className={`text-[16px] text-white opacity-95 font-bold group transition duration-200 hover:opacity-80`}>Maliyyə</NavLink>
              <div onMouseEnter={() => setDropDown('finance')} onMouseLeave={() => setDropDown('')} className={` flex-col items-start justify-center gap-1 z-13 rounded-3xl p-5 bg-white absolute top-full left-0 w-full  transition-all duration-400 min-w-57 ${dropDown === 'finance' ? "flex opacity-100 translate-y-4 " : "opacity-0 "}  `}>
                <NavLink to='/transfers' className={'text-[14px] text-[#5e5e5e] font-medium transition duration-200 hover:text-[#141414]'} reloadDocument >Pul köçürmələri</NavLink>
                <NavLink className={'text-[14px] text-[#5e5e5e] font-medium transition duration-200 hover:text-[#141414]'}  >Beynalxalq köçürmələr</NavLink>
                <NavLink className={'text-[14px] text-[#5e5e5e] font-medium transition duration-200 hover:text-[#141414]'}  >Kredit</NavLink>
              </div>
            </div>

            <div onMouseEnter={() => setDropDown('services')} className="flex flex-col gap-2 items-center justify-between relative w-full ">
              <NavLink onMouseEnter={() => setDropDown('services')} className={`text-[16px] opacity-90 text-white font-bold group transition duration-200 hover:opacity-80`}>Xidmətlər</NavLink>
              <div onMouseEnter={() => setDropDown('services')} onMouseLeave={() => setDropDown('')} className={` flex-col items-start justify-center gap-1 z-13 rounded-3xl p-5 bg-white absolute top-full left-0 w-full transition-all duration-200 min-w-57  ${dropDown === 'services' ? "flex opacity-100 translate-y-4 " : " opacity-0"}  `}>
                <NavLink className={'text-[14px] text-[#5e5e5e] font-medium transition duration-200 hover:text-[#141414]'}  >BakıKart telefonda</NavLink>
                <NavLink className={'text-[14px] text-[#5e5e5e] font-medium transition duration-200 hover:text-[#141414]'}  >QR ilə ödə</NavLink>
                <NavLink className={'text-[14px] text-[#5e5e5e] font-medium transition duration-200 hover:text-[#141414]'}  >Ödənişlər</NavLink>
              </div>
            </div>
            <NavLink className={`text-[16px] text-white font-bold opacity-95 transition duration-200 hover:opacity-80`}>Təhlükəsizlik</NavLink>
          </div>
          <div className="flex flex-col items-center justify-center z-13 relative">
            <div className="group flex items-center justify-center gap-2 cursor-pointer">
              <span className='text-[16px] text-white font-semibold transition duration-200 group-hover:opacity-80 group'>Az</span>
              <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dcfd53a67fd07c7146c8b5_16_icon_chevron_down_stroke_white.svg" className='transition duration-200 group-hover:opacity-80 flex object-cover  items-center justify-center' />
            </div>
            <div className="flex opacity-0  flex-col absolute top-full left-0 items-center justify-center w-full rounded-3xl transition-all duration-300 bg-white p-5 group-hover:opacity-100 group-hover:-translate-y-4">
              <span>En</span>
              <span>Ru</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
