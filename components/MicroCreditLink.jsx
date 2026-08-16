import React from 'react'
import { Link } from 'react-router-dom'
const MicroCreditLink = () => {
  return (
    <div className='flex items-center justify-center w-[55%] '>
      <Link to='/microcredit' reloadDocument className="flex flex-col items-start justify-center w-full rounded-4xl bg-[#74BEFF] relative">
        <div className="flex flex-col gap-1 items-start justify-center w-[70%] py-16 pl-8 overflow-hidden">
          <h2 className='text-[#141414] text-[36px] font-bold'>Biznes üçün 100 000 ₼-dək mikrokreditlə</h2>
          <Link to='/microcredit' reloadDocument className='text-[#141414] text-[16px] font-semibold underline transition duration-200 opacity-100 hover:opacity-75'>Müraciət et</Link>
        </div>
        <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f72f4fb4f30b87dfdf687f_3121b352e162adabc2b805bb2cd18adc_banner%20microcredit%20mob.svg" alt="microcredit-carpet"  className='flex rounded-4xl object-cover absolute right-0 bottom-0'/>
      </Link>
    </div>
  )
}

export default MicroCreditLink
