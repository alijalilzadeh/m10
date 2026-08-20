import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../src/App.css'
import '../src/index.css'
const Navbar = ({ textColor, DropdownUrl, m10Logo }) => {
  const [dropDown, setDropDown] = useState('')
  const [responsiveNavbar, setResponsiveNavbar] = useState(false)
  return (
    <>
      <div onMouseDown={() => setDropDown('')} className={`hidden items-center justify-center z-10 w-[86%]  lg:flex`}>
        <div className="flex items-center justify-between w-full bg-transparent py-4  px-2">
          <Link to='/' className='transition duration-200 hover:opacity-80' reloadDocument>
            <img src={m10Logo} alt="m10 logo" className='w-12' />
          </Link>
          <div className="flex items-center justify-center gap-8 relative">
            <div onMouseEnter={() => setDropDown('finance')} onMouseLeave={() => setDropDown('')} className="relative flex flex-col items-center justify-between w-full">
              <NavLink className={`text-[16px] ${textColor} opacity-95 font-semibold transition duration-200 hover:opacity-80`}>
                Maliyyə
              </NavLink>

              <div className={`absolute top-full left-0 w-full min-w-57 pt-4 z-20 transition-all duration-300 ${dropDown === 'finance' ? "opacity-100 translate-y-0  visible" : "opacity-0 translate-y-2  invisible"}`}>
                <div className="flex flex-col items-start justify-center gap-1 rounded-3xl p-5 bg-white shadow-lg">
                  <NavLink to='/transfers' onClick={() => setDropDown('')} className='text-[14px] text-[#5e5e5e] font-medium transition duration-200 hover:text-[#141414]' reloadDocument>
                    Pul köçürmələri
                  </NavLink>

                  <NavLink to='/international-transfers' onClick={() => setDropDown('')} className='text-[14px] text-[#5e5e5e] font-medium transition duration-200 hover:text-[#141414]' reloadDocument>
                    Beynalxalq köçürmələr
                  </NavLink>

                  <NavLink to='/credit' onClick={() => setDropDown('')} className='text-[14px] text-[#5e5e5e] font-medium transition duration-200 hover:text-[#141414]' reloadDocument>
                    Kredit
                  </NavLink>
                </div>
              </div>
            </div>

            <div onMouseEnter={() => setDropDown('services')} onMouseLeave={() => setDropDown('')} className="relative flex flex-col items-center justify-between w-full">
              <NavLink className={`text-[16px] opacity-90 ${textColor} font-semibold transition duration-200 hover:opacity-80`}>
                Xidmətlər
              </NavLink>

              <div className={`absolute top-full left-0 w-full min-w-57 pt-4 z-20 transition-all duration-300 ${dropDown === 'services' ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2  invisible"}`}>
                <div className="flex flex-col items-start justify-center gap-1 rounded-3xl p-5 bg-white shadow-lg">
                  <NavLink to='/bakikart' onClick={() => setDropDown('')} className='text-[14px] text-[#5e5e5e] font-medium transition duration-200 hover:text-[#141414]' reloadDocument>
                    BakıKart telefonda
                  </NavLink>

                  <NavLink to='/qr-pay' onClick={() => setDropDown('')} className='text-[14px] text-[#5e5e5e] font-medium transition duration-200 hover:text-[#141414]' reloadDocument>
                    QR ilə ödə
                  </NavLink>

                  <NavLink to='/bills' onClick={() => setDropDown('')} className='text-[14px] text-[#5e5e5e] font-medium transition duration-200 hover:text-[#141414]' reloadDocument>
                    Ödənişlər
                  </NavLink>
                </div>
              </div>
            </div>

            <NavLink to='/security' onMouseEnter={() => setDropDown('')} className={`text-[16px] ${textColor} font-semibold opacity-95 transition duration-200 hover:opacity-80`} reloadDocument>
              Təhlükəsizlik
            </NavLink>

          </div>
          <div onMouseEnter={() => setDropDown('lang')} onMouseLeave={() => setDropDown('')} className="flex flex-col items-center justify-center z-13 relative">
            <div onMouseEnter={() => setDropDown('lang')} onMouseLeave={() => setDropDown('')} className="group flex items-center justify-center gap-2 cursor-pointer">
              <span className={`text-[16px] ${textColor}  font-semibold transition duration-200 group-hover:opacity-80 group`}>Az</span>
              <img src={DropdownUrl} className='transition duration-200 group-hover:opacity-80 flex object-cover  items-center justify-center' />
            </div>
            <div className={`flex flex-col absolute top-full bg-white left-0 w-full min-w-20 rounded-3xl px-4 py-6 mt-2 shadow-lg z-20 transition-all duration-300 ${dropDown === 'lang' ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2  invisible"}`}>
              <span className='cursor-pointer text-[16px] text-[#141414] font-semibold opacity-100 transition-all duration-200 hover:opacity-70'>En</span>
              <span className='cursor-pointer text-[16px] text-[#141414] font-semibold opacity-100 transition-all duration-200 hover:opacity-70'>Ru</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full  fixed top-0  right-0 left-0 z-15 lg:hidden">
        <div className="flex items-center justify-between w-full bg-white py-2 px-4  z-20">
          <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dae2efcee6be6906b71ebc_m10.svg" className='w-12 flex items-center justify-center ' />
          <img onClick={() => setResponsiveNavbar(!responsiveNavbar)} src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687f70adeddada30438b5e76_burger%20menu.svg" className=' cursor-pointer' />
        </div>
        <div className={` flex-col items-center fixed h-screen -z-1 justify-center w-full  transition-all duration-200 ${responsiveNavbar ? "translate-y-0" : "-translate-y-full -top-full"} bg-white`}>
          adsgagag
        </div>
      </div>
    </>
  )
}

export default Navbar