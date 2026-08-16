import React, { useState } from 'react'

const Appliement = () => {
  const [val,setVal] = useState('')
  const [valTel,setValTel] = useState('+994')
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <h2 className='text-[#141414] text-[48px] font-bold text-center my-14'>Elə indi müraciət et</h2>
      <div className="flex flex-col items-start justify-start w-1/4 rounded-4xl bg-white px-6 py-10 gap-6">
        <div className="flex flex-col gap-2 w-full">
          <span className='text-[18px] text-[#141414] font-medium'>FIN kod</span>
          <input value={val} onChange={(e)=>setVal(e.target.value.toUpperCase())} type="text" placeholder='000000' name="text" id="text" className='w-full py-4 placeholder:text-[18px] placeholder:font-normal text-[18px] font-normal rounded-full border-none indent-4 opacity-100 transition duration-100 focus:outline-none bg-[#F3F3F3] hover:bg-[#e9e8e8]' />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <span className='text-[18px] text-[#141414] font-medium'>Telefon nömrəsi</span>
          <input value={valTel} onChange={(e)=> setValTel(e.target.value)} type="text" placeholder='+994' name="text" id="text" className='w-full py-4 placeholder:text-[18px] placeholder:font-normal text-[18px] font-normal rounded-full border-none indent-4 opacity-100 transition duration-100 focus:outline-none bg-[#F3F3F3]  hover:bg-[#e9e8e8]' />
        </div>
        <button className=' rounded-[64px] px-6 py-4 transition w-full duration-200 cursor-pointer bg-[#141414] text-white text-[18px] font-semibold hover:outline-3 opacity-100 hover:opacity-90'>Müraciət etmək</button>

      </div>

    </div>
  )
}

export default Appliement
