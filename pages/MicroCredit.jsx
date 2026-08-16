import React from 'react'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet-async'
import NavbarMicroCredit from '../components/NavbarMicroCredit'
const MicroCredit = () => {
  const textColor = 'text-[#141414]'
  const serviceTitle = 'Lazım olan bütün xidmətlər – bir tətbiqdə'
  const DropdownUrl = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e33df3874b267affd6acb_16_icon_chevron_down_stroke.svg'
  const m10Logo = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e0999e6e266a21c09fd8c_Group%202085663067.svg'
  const imgUrls = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ebe4bf99849199e26a84c8_arch%20l.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ebe4bf39523c756fcba8bb_arch%20c.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ebe4bff95cca6f5f9e75eb_arch%20r.svg' }
  ]
  return (
    <div className='w-full flex flex-col items-start justify-center min-h-screen overflow-x-hidden'>
      <Helmet>
        <title>Mikrokreditlər</title>
        <meta name="description" content="transfers" />
      </Helmet>
      <div className='flex flex-col items-center  justify-center w-full h-full '>
        <div className=" flex flex-col items-center h-full justify-center w-full rounded-4xl bg-white relative">
          <NavbarMicroCredit textColor={textColor} DropdownUrl={DropdownUrl} m10Logo={m10Logo} />
          <div className="flex flex-col items-center justify-center gap-6 py-5 mb-8">
            <h2 className='text-[58px] text-[#141414] font-bold w-[60%] text-center leading-18'>Yerli kiçik və orta bizneslər üçün 100 000 AZN-dək mikrokreditlər</h2>
            <span className={`text-[18px]  text-white  bg-[#141414] rounded-4xl cursor-pointer py-4 px-6 transition duration-200 hover:opacity-90 font-bold `}>Müraciət et</span>
          </div>
          <div className="flex items-center justify-center w-full gap-2 mb-6">
              <p className='text-[#979797] font-normal text-[16px]'>Krediti təqdim edir</p>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ebaa7057ab063f76518b48_Birbank_business_web.svg" />
          </div>
          <div className="flex items-center justify-center  pb-10">
            {
              imgUrls.map((item, id) => (
                <img src={item.url} alt='arche' className={`${id === 1 ? "w-101" : "w-81"}  h-113`} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MicroCredit
