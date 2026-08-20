import React from 'react'
import { Link } from 'react-router-dom'
const FooterMicroCredit = () => {
  return (
    <>
      <div className='flex flex-col  items-center justify-center w-full rounded-t-4xl bg-[#141414] mt-10'>
        <div className="flex flex-col items-center justify-center w-[85%] py-22.5 gap-5 selection:bg-[#6A6A6A] selection:text-[#323232]">
          <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e552156990cad67ece7ebf_Bills.svg" />
          <h2 className='text-[48px] text-white font-bold w-full text-center leading-18'>Biznesinizin ən etibarlı təməli sizsiniz</h2>
        </div>
        <div className="flex items-center justify-between  w-full  py-10 px-30 border-t border-t-[#2c2b2b]">
          <div className="flex items-center  justify-center">
            <Link to='/business' className='flex items-end justify-end align-end gap-2 transition duration-200 hover:opacity-80' reloadDocument>
              <img src='https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dcfd5a6635eec1a74d2c2c_m10-white.svg' alt="m10 logo" className='w-12' />
              <p className='text-white font-semibold text-[16px] flex items-end justify-end self-end -mb-1'>business</p>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6">
            <Link className='flex items-center justify-center gap-1 transition duration-200 hover:opacity-80'>
              <span className='text-white font-semibold text-[16px]'>Privacy policy</span>
            </Link>
            <Link className='flex items-center justify-center gap-1 transition duration-200 hover:opacity-80'>
              <span className='text-white font-semibold text-[16px]'>
                Terms of use
              </span>
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}

export default FooterMicroCredit
