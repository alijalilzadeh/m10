import React from 'react'
import NavbarSecurity from '../components/NavbarSecurity'
import { Helmet } from 'react-helmet-async'
import FooterSecurity from '../components/FooterSecurity'
const Security = () => {
   const imgUrls = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f15b5d81bbe86aa16a38e9_Arch.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f633a3cd7c003ca8c664c0_arch.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f15b5d81bbe86aa16a38e9_Arch.svg' }
  ]
  return (
    <div className='w-full flex flex-col items-start justify-center min-h-screen overflow-x-hidden'>
      <Helmet>
        <title>m10 səni qoruyur</title>
        <meta name="description" content="transfers" />
      </Helmet>
      <div className='flex flex-col items-center  justify-center w-full h-full '>
        <div className=" flex flex-col items-center h-full justify-center w-full rounded-4xl bg-[#141414] relative">
          <NavbarSecurity  />
          <div className="flex flex-col items-center justify-center gap-6 py-5 mb-8">
            <h2 className='text-[58px] text-white font-bold w-full text-center leading-18'>m10 səni qoruyur</h2>
            <p className='text-[18px] font-medium text-white'>Bizimlə pulların güvəndədir</p>
            <span className={`text-[18px]  text-white  bg-[#FF3333] rounded-4xl cursor-pointer py-4 px-6 transition duration-200 hover:opacity-90 font-bold`}>Aldadılmısan? Düyməni kliklə</span>
          </div>
          <div className="flex items-center justify-center gap-6  pb-10">
            {
              imgUrls.map((item, id) => (
                <img src={item.url} alt='arche' />
              ))
            }
          </div>
        </div>
      </div>
       <FooterSecurity />
    </div>
  )
}

export default Security
