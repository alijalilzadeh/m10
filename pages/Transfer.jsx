import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Transfer = () => {
  const textColor = 'text-[#141414]'
  const DropdownUrl = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e33df3874b267affd6acb_16_icon_chevron_down_stroke.svg'
  const m10Logo = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e0999e6e266a21c09fd8c_Group%202085663067.svg'
  const imgUrls = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d2c60343691e1118379f92_b964ccb154be5d689b1e462ea63dd0f5_arche.png' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d439899584833eb2981769_95d4944734caae8b948fc1b14802c58f_%D0%B0%D1%80%D0%BA%D0%B0.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d2c603784c5135b35650a1_1be7e349b628d578a043a18ac1aaec5f_arche-1.png' }
  ]

  return (
    <div className='w-full flex flex-col items-start justify-center min-h-screen overflow-x-hidden'>
      <Helmet>
        <title>Transfers</title>
        <meta name="description" content="transfers" />
      </Helmet>
      <div className='flex flex-col items-start justify-start w-full h-full '>
        <div className=" flex flex-col items-center h-full justify-center w-full rounded-4xl bg-white relative">
          <Navbar textColor={textColor} DropdownUrl={DropdownUrl} m10Logo={m10Logo} />
          <div className="flex flex-col items-center justify-center gap-6 py-5 mb-8">
            <h2 className='text-[58px] text-[#141414] font-bold'>Pulun bir m10-dan o birinə - dərhal!</h2>
            <span className={`text-[18px]  text-white  bg-[#141414] rounded-4xl cursor-pointer p-4 transition duration-200 hover:opacity-90 font-bold`}>Tətbiqi yüklə</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            {
              imgUrls.map((item, id) => (
                <img src={item.url} />
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Transfer
