import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
const NavbarSecurity = () => {
    const [dropDown, setDropDown] = useState('')
  return (
    <>
      <div onMouseDown={() => setDropDown('')} className={`flex items-center justify-center z-10 w-[86%] `}>
        <div className="flex items-center justify-between w-full bg-transparent py-4  px-2">
          <Link to='/' className='transition duration-200 hover:opacity-80' reloadDocument>
            <img src='https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dcfd5a6635eec1a74d2c2c_m10-white.svg' alt="m10 logo" className='w-12' />
          </Link>
          <div className="flex items-center justify-center gap-8 relative">

            <div onMouseEnter={() => setDropDown('finance')} onMouseLeave={() => setDropDown('')} className="relative flex flex-col items-center justify-between w-full">
              <NavLink className={`text-[16px] text-white opacity-95 font-semibold transition duration-200 hover:opacity-80`}>
                Maliyyə
              </NavLink>

              <div className={`absolute top-full left-0 w-full min-w-57 pt-4 z-20 transition-all duration-300 ${dropDown === 'finance' ? "opacity-100 translate-y-0  visible" : "opacity-0 translate-y-2  invisible"}`}>
                <div className="flex flex-col items-start justify-center gap-1 rounded-3xl p-5 bg-white shadow-lg">
                  <NavLink to='/transfers' onClick={() => setDropDown('')} className='text-[14px] text-[#5e5e5e] font-medium transition duration-200 hover:text-[#141414]' reloadDocument>
                    Pul köçürmələri
                  </NavLink>

                  <NavLink onClick={() => setDropDown('')} className='text-[14px] text-[#5e5e5e] font-medium transition duration-200 hover:text-[#141414]'>
                    Beynalxalq köçürmələr
                  </NavLink>

                  <NavLink to='/credit' onClick={() => setDropDown('')} className='text-[14px] text-[#5e5e5e] font-medium transition duration-200 hover:text-[#141414]' reloadDocument>
                    Kredit
                  </NavLink>
                </div>
              </div>
            </div>

            <div onMouseEnter={() => setDropDown('services')} onMouseLeave={() => setDropDown('')} className="relative flex flex-col items-center justify-between w-full">
              <NavLink className={`text-[16px] opacity-90 text-white font-semibold transition duration-200 hover:opacity-80`}>
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

            <NavLink onMouseEnter={() => setDropDown('')} className={`text-[16px] text-white font-semibold opacity-95 transition duration-200 hover:opacity-80`}>
              Təhlükəsizlik
            </NavLink>

          </div>
          <div className="flex flex-col items-center justify-center z-13 relative">
            <div className="group flex items-center justify-center gap-2 cursor-pointer">
              <span className={`text-[16px] text-white  font-semibold transition duration-200 group-hover:opacity-80 group`}>Az</span>
              <img src='https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dcfd53a67fd07c7146c8b5_16_icon_chevron_down_stroke_white.svg' className='transition duration-200 group-hover:opacity-80 flex object-cover  items-center justify-center' />
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

export default NavbarSecurity
