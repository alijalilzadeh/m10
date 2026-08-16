import React from 'react'
import { Link } from 'react-router-dom'
const NavbarMicroCredit = () => {
  return (
    <>
      <div onMouseDown={() => setDropDown('')} className={`flex items-center justify-center z-10 w-[86%] `}>
        <div className="flex items-center justify-between w-full bg-transparent px-2">
          <Link to='/' className='flex items-end justify-end align-end gap-2 transition duration-200 hover:opacity-80' reloadDocument>
            <img src='https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e0999e6e266a21c09fd8c_Group%202085663067.svg' alt="m10 logo" className='w-12' />
            <p className='text-[#141414] font-semibold text-[16px] flex items-end justify-end self-end -mb-1'>business</p>
          </Link>
          <div className="flex items-center justify-center gap-4 relative">
            <Link to='mailto:partners@pashapay.az' className="flex items-center justify-center gap-2 opacity-100 transition duration-200 hover:opacity-85">
              <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68eba94827cf6bfeff5bb223_24_icon_letter_stroke.svg"/>
              <p className='text-[#141414] font-semibold text-[16px] pr-4 py-5'>partners@pashapay.az</p>
            </Link>

            <Link to='tel:+994502040942' className="flex items-center justify-center gap-2 opacity-100 transition duration-200 hover:opacity-85">
              <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68eba948fde695e2a420321b_24_icon_phone_stroke.svg"/>
              <p className='text-[#141414] font-semibold text-[16px] pr-4 py-5'>+994 50 204 09 42</p>
            </Link>
          </div>
          
        </div>
      </div>
    </>
  )
}
export default NavbarMicroCredit
