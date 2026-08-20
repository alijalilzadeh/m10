import React from 'react'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import NavbarMicroCredit from '../components/NavbarMicroCredit'
import FooterMicroCredit from '../components/FooterMicroCredit'
import MicroCreditCalculator from '../components/MicroCreditCalculator'
import Appliement from '../components/Appliement'
import NavbarBusiness from '../components/NavbarBusiness'
import MicroCreditLink from '../components/MicroCreditLink'
import BusinessFeedbacks from '../components/BusinessFeedbacks'

const Business = () => {
  const textColor = 'text-white'
  const serviceTitle = 'Lazım olan bütün xidmətlər – bir tətbiqdə'
  const DropdownUrl = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e33df3874b267affd6acb_16_icon_chevron_down_stroke.svg'
  const m10Logo = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dcfd5a6635eec1a74d2c2c_m10-white.svg'
  const rowData = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e5519845b73a5ec3915cdf_okoshko%20qr.svg', title: 'Birbaşa inteqrasiya', desc: 'QR ödənişlərin qəbulu təmin olunacaq, xüsusi ekranlar və kassa cihazlarında əks olunacaq' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e55198d2e9e8b35a080ef7_okoshko%20pos.svg', title: 'POS terminallar', desc: 'PASHA Bank POS terminalını inteqrasiya etməyə kömək edəcəyik. Əgər POS terminal artıq qoşulubsa, m10 ilə ödənişləri əlavə inteqrasiya olmadan qəbul etmək mümkün olacaq' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e551971b80091c94027b4d_okoshko%20pc.svg', title: 'e-com', desc: 'QR kod ilə ödənişlərin saytda və ya tətbiqdə API üzrə qəbulunu təmin edəcəyik' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e55197c0f2ab95df760573_okoshko%20payout.svg', title: 'Payout', desc: 'API üzrə əməkdaşlara, partnyorlara və vendorlara rahat və sürətli ödənişlər etmək imkanı verəcəyik' },
  ]
  const boxsData = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e54e865d884ad0a6dc66c0_icon.svg', title: 'Sürətli inteqrasiyaya kömək edir, QR ödənişləri icra edir, vəsaiti sürətlə və asanlıqla çıxarmağa imkan veririk' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e54e8612c9988707e6f17a_48_icon_mediasia.svg', title: 'Əməkdaşlığa açığıq, marketinq dəstəyi veririk, hətta marketinq kampaniyaları başladırıq' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e54e86c53c70d1f9ec6ff3_icon-percent.svg', title: 'Alıcılara keşbek veririk' }
  ]
  return (
    <div className='w-full flex flex-col items-start justify-center min-h-screen overflow-x-hidden'>
      <Helmet>
        <title>Business</title>
        <meta name="description" content="transfers" />
      </Helmet>
      <div className='flex flex-col items-center  justify-center w-full h-full '>
        <div className=" flex flex-col items-center h-full justify-center rounded-4xl w-[99.6%] bg-[#141414] relative">
          {/* <NavbarMicroCredit textColor={textColor} DropdownUrl={DropdownUrl} m10Logo={m10Logo} /> */}
          <NavbarBusiness textColor={textColor} DropdownUrl={DropdownUrl} m10Logo={m10Logo} />
          <div className="flex flex-col items-center justify-center gap-6 pt-5 pb-20 mb-8">
            <h2 className='text-[58px] text-white font-bold w-[80%] text-center leading-18 mt-20'>m10 yerli qəhrəmanlar - kiçik və böyük bizneslər üçündür</h2>
            <span className={`text-[18px]  text-[#141414]  bg-[#00f0ca] rounded-4xl cursor-pointer py-4 px-6 transition duration-200 hover:opacity-90 font-semibold `}>Sorğu yerləşdirmək</span>
          </div>
        </div>
        <div className='flex flex-col  items-center justify-center gap-10 w-full mt-10 mb-20'>
          <div className='grid grid-cols-3 justify-items-center gap-6 w-[50%] '>
            {
              boxsData.map((item, id) => (
                <div key={id} className={`flex flex-col items-center gap-4 justify-start  bg-white rounded-4xl px-3 py-8 min-h-50 w-full`}>
                  <img src={item.url} />
                  <div className="flex flex-col items-center justify-center gap-2">
                    <h2 className='text-[#141414] text-[18px] font-medium text-center leading-6'>{item.title}</h2>
                    <p className='selection:bg-[#99B3E8] text-[14px] text-[#979797] text-center font-normal'>{item.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <MicroCreditLink />
        <BusinessFeedbacks />
        <div className="flex flex-col items-center gap-6 justify-center w-full mb-15">
          <h2 className='text-[48px] text-[#141414] font-bold mb-14 mt-22.5'>Bizim həllər</h2>
          {
            rowData.slice(0, 4).map((item, id) => (
              <div className={`flex ${id % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center justify-center gap-10 w-[50%]`}>
                <img src={item.url} />
                <div className="flex flex-col items-start justify-start gap-2">
                  <h2 className='text-[16px] text-[#141414] font-normal leading-6'>{item.title}</h2>
                  <p className='text-[20px] text-[#141414] font-semibold leading-6'>{item.desc}</p>
                  <Link className='text-[#007dec] text-[16px] mt-2 font-medium underline transition duration-200 opacity-100 hover:opacity-85'>Ətraflı</Link>
                </div>
              </div>
            ))
          }
        </div>
        <div className="flex flex-col items-center justify-center w-[55%]  rounded-4xl bg-[#ebe8e7] my-15">
          
        </div>
      </div>
      <FooterMicroCredit />
    </div>
  )
}

export default Business
