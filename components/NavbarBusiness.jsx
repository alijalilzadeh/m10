import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const NavbarBusiness = ({m10Logo, textColor, DropdownUrl}) => {
  const [dropdown, setDropDown] = useState(false)

  return (
    <>
      <div onMouseDown={() => setDropDown('')} className={`flex items-center justify-center z-10 w-[86%]  `}>
        <div className="flex items-center justify-between w-full bg-transparent px-2">
          <Link to='/business' className='flex items-end justify-end align-end gap-2 transition duration-200 hover:opacity-80' reloadDocument>
            <img src={m10Logo} alt="m10 logo" className='w-12' />
            <p className='text-white font-semibold text-[16px] flex items-end justify-end self-end -mb-1'>business</p>
          </Link>
          <div className="flex items-center justify-center gap-4 relative">
            <Link to='mailto:partners@pashapay.az' className="flex items-center justify-center gap-2 opacity-100 transition duration-200 hover:opacity-85">
              <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e24d27409eaadf51c2f58_24_icon_letter_stroke.svg" />
              <p className={`${textColor} font-semibold text-[16px] pr-4 py-5`}>partners@pashapay.az</p>
            </Link>

            <Link to='tel:+994502040942' className="flex items-center justify-center gap-2 opacity-100 transition duration-200 hover:opacity-85">
              <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e549c5ca917d58eb7dfafe_a0f5cfd335650fba5c6d0f901ef56c50_24_icon_phone_stroke.svg" />
              <p className={`${textColor} font-semibold text-[16px] pr-4 py-5`}>+994 50 204 09 42</p>
            </Link>

            <div onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)} className="flex flex-col items-center justify-center z-13 relative">
              <div onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)} className="group flex items-center justify-center gap-2 cursor-pointer">
                <span className={`text-[16px]  text-white  font-semibold transition duration-200 group-hover:opacity-80 group`}>Az</span>
                <img src='https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dcfd53a67fd07c7146c8b5_16_icon_chevron_down_stroke_white.svg' className='transition  duration-200 group-hover:opacity-80 flex object-cover  items-center justify-center' />
              </div>
              <div className={`flex flex-col absolute top-full bg-white left-0 w-full min-w-20 rounded-3xl px-4 py-6 mt-2 shadow-lg z-20 transition-all duration-300 ${dropdown ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2  invisible"}`}>
                <span className='cursor-pointer text-[16px] text-[#141414] font-semibold opacity-100 transition-all duration-200 hover:opacity-70'>En</span>
                <span className='cursor-pointer text-[16px] text-[#141414] font-semibold opacity-100 transition-all duration-200 hover:opacity-70'>Ru</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
export default NavbarBusiness;
