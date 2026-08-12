import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../src/App.css'
import '../src/index.css'
const Rates = () => {
  const DropdownUrl = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e33df3874b267affd6acb_16_icon_chevron_down_stroke.svg'
  const m10Logo = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e0999e6e266a21c09fd8c_Group%202085663067.svg'
  const ratesData = [
    { title: 'Beynəlxalq köçürmələr', desc: 'Komissiya valyutanın həmin günə olan məzənnəsindən asılıdır.Məzənnə dəyişikliklərini tətbiqdən izləyə bilərsən.' },
    { title: 'Digər m10 hesabına köçürmələr', desc: 'Komissiyasız' },
    { title: 'm10 hesabından karta köçürmələr', desc: 'Aylıq 5000 ₼-a qədər komissiyasız. 5000 AZN-dən 20 000 AZN-dək — köçürmə məbləğinin 0.5%-i həcmində komissiya.20 000 AZN-dən yuxarı — köçürmə məbləğinin 0.3%-i həcmində komissiya' },
    { title: 'QR nağdlaşdırma', desc: '0.5% komissiya (minimum 1 ₼)' },
    { title: 'm10 hesabının artırılması', desc: 'Komissiyasız' },

  ]
  return (
    <div className='w-full flex flex-col items-start justify-start min-h-screen overflow-x-hidden'>
      <Helmet>
        <title>Rates</title>
        <meta name="description" content="transfers" />
      </Helmet>
      <div className='flex flex-col items-center justify-start w-full h-full '>
        <Navbar m10Logo={m10Logo} DropdownUrl={DropdownUrl} />
        <div className="flex flex-col items-center justify-center w-[60%]">
          <h2 className='text-[48px] text-[#141414] font-bold text-center  mt-22.5 mb-9'>Tariflər</h2>
          <div className="flex flex-col items-center justify-center w-full bg-white rounded-4xl ">
            {
              ratesData.map((item, id) => (
                <div className="flex items-center justify-start w-full border-b border-b-[#F4F0EE] py-6">
                    <h2 className='w-1/2 text-[16px] text-[#141414] font-semibold pl-8'>{item.title}</h2>
                    <p className='w-1/2 text-[16px] text-[#141414] font-normal' >{item.desc}</p>
                </div>
              ))
            }

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Rates
