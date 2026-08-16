import React from 'react'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet-async'
import NavbarMicroCredit from '../components/NavbarMicroCredit'
import FooterMicroCredit from '../components/FooterMicroCredit'
import MicroCreditCalculator from '../components/MicroCreditCalculator'
import Appliement from '../components/Appliement'
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
  const boxsData = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e54e86c53c70d1f9ec6ff3_icon-percent.svg', title: 'Faiz dərəcəsi 22%-dən' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ebe7fb0a28a5d293084b19_clock_icon.svg', title: 'Müraciətə 1 iş günü ərzində baxılır' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ebe7fb7d21b6f02b4e8382_money_icon.svg', title: 'Kredit məbləği 1 000 – 100 000 AZN' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ebe7fb2ab6fb760b0de4e4_nolimit_icon.svg', title: 'Girov tələb olunmur' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ebe7fb026223a0c27f4a39_docs_icon.svg', title: 'Müraciətə 1 iş günü ərzində baxılır' }
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
      <div className='flex flex-col  items-center justify-center gap-10 w-full my-10'>
        <div className='grid grid-cols-3 justify-items-center gap-6 w-[50%] '>
          {
            boxsData.map((item, id) => (
              <div key={id} className={`flex flex-col items-center gap-4 justify-start  bg-white rounded-4xl px-4 py-8 min-h-50 w-full`}>
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
      <MicroCreditCalculator />
      <Appliement />
      <FooterMicroCredit />
    </div>
  )
}

export default MicroCredit
