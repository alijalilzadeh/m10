import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
const RusiyayaPulGondermek = () => {
  const textColor = 'text-[#141414]'
  const serviceTitle = 'Lazım olan bütün xidmətlər – bir tətbiqdə'
  const DropdownUrl = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e33df3874b267affd6acb_16_icon_chevron_down_stroke.svg'
  const m10Logo = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e0999e6e266a21c09fd8c_Group%202085663067.svg'
  const internationalTransfersData = [
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e54e86c53c70d1f9ec6ff3_icon-percent.svg',
      title: 'Tamamilə komissiyasız',
      desc: 'Rusiyaya pul köçürmələri komissiyasız həyata keçirilir. Əgər bank tərəfindən komissiya tətbiq olunarsa, bu barədə əvvəlcədən məlumat veriləcək.'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f15ff6b447505e916c2a23_speed-icon.svg',
      title: 'Saniyələr içində',
      desc: 'Köçürmə adətən saniyələr ərzində alıcıya çatır və prosesi maksimum sürətli edir.'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ffb15523126f2894e51392_card-icon.svg',
      title: 'Rusiyanın bank kartlarına köçürmə',
      desc: 'm10-la Rusiyanın bank kartlarına rahat və təhlükəsiz şəkildə pul göndərmək mümkündür.'
    }
  ]

  const whereToTransfer = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68fca5070a1722c9118aabf6_b29c1982e978c341a0ac32691fcb61be_turkey-icon.svg', title: 'Türkiyə', link: '/turkiyeye-pul-gondermek' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/69de1d7a0bdf7dca1c7814ed_All%20countries.svg', title: 'Digər ölkələr', link: '' }
  ]

  const howTo = [
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68fe561242b1a80c3f96cbff_892622545109225824bf3470ce417037_Step%201.svg',
      title: 'Əsas səhifədə Köçürmə bölməsinə daxil ol və “Beynəlxalq pul köçürmələri”ni seç'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ffba16b4a6909085a115dc_50fcabd49d68add2628eca96cd274dac_Step%202%20ru.svg',
      title: '“Rusiyaya köçürmə” seçimini et'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ffb98d093687b4a9136ed1_46caf1ac4c02ad9659de2e8b43209595_Step%203%20ru.svg',
      title: 'Göndərmək istədiyin məbləği daxil et və məzənnəni yoxla'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ffb98d5735405e7da21ba5_Step%204%20ru.svg',
      title: 'Alıcının kart nömrəsini və ad-soyadını daxil et, məlumatları yoxla və əməliyyatı təsdiqlə'
    }
  ]

  const internationalTransfersFaq = [
    {
      q: 'Rusiyaya pul köçürməsi nə qədər vaxt aparır?',
      a: 'Rusiyaya pul köçürmələri adətən 2 dəqiqə ərzində həyata keçirilir. Emal müddəti tərəfdaşdan və ödəniş sistemindən asılıdır. Nadir hallarda köçürmə daha çox vaxt apara bilər'
    },
    {
      q: 'Rusiyaya pul köçürmələrinə nə qədər komissiya tətbiq olunur?',
      a: 'm10 tərəfindən komissiya tutulmur. Lakin alıcının bankı öz daxili qaydalarına əsasən komissiya tuta bilər.'
    },
    {
      q: 'Rusiyaya pul köçürməsi baş tutmadıqda nə etməli?',
      a: 'Köçürmə baş tutmasa, ekranda xəta mesajı görünəcək. Bu, adətən limit və ya məlumatların düzgün daxil edilməməsi ilə bağlı olur. Məlumatları yoxlayaraq əməliyyatı yenidən icra edə bilərsən.'
    },
    {
      q: 'Hansı istiqamətlər üzrə pul köçürmələri mövcuddur?',
      a: 'Dünyanın 150-dən çox ölkəsinə pul köçürmələri mövcuddur. Bütün ölkələrin siyahısı səhifənin yuxarı hissəsində təqdim olunub.'
    },
    {
      q: 'Pul köçürmələri üçün limitlər var?',
      a: 'Bəli, aşağıdakı limitlər tətbiq olunur: — gündəlik — 3 400 ₼-dək — aylıq — 17 000 ₼-dək — digər banklar və tətbiqlər vasitəsilə ümumi limit — 33 000 ₼-dək'}
  ]
  return (
    <div className='w-full flex flex-col items-start justify-start min-h-screen overflow-x-hidden'>
      <Helmet>
        <title>Rusiyaya pul göndərmək – m10 ilə sürətli və etibarlı</title>
        <meta name="description" content="transfers" />
      </Helmet>
      <div className='flex flex-col items-center  justify-center w-full h-full '>
        <div className=" flex flex-col items-center h-full justify-center w-full rounded-4xl bg-white relative">
          <Navbar textColor={textColor} DropdownUrl={DropdownUrl} m10Logo={m10Logo} />
          <div className="flex flex-col items-center justify-center gap-6 py-5 mb-8">
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68fe4f153bfe25362c64e5d6_39ff229451c73ef2aff655e95cccd4b3_russia.svg" />
            <h2 className='text-[58px] text-[#141414] font-bold  text-center leading-18 w-[90%]'>Azərbaycandan Rusiyaya sürətli pul köçürmələri</h2>
            <span className={`text-[18px]  text-white  bg-[#141414] rounded-4xl cursor-pointer py-4 px-6 transition duration-200 hover:opacity-90 font-bold`}>Tətbiqi yüklə</span>
          </div>

        </div>
        <div className='flex flex-col  items-center justify-center gap-10 w-full mt-15 mb-10'>
          <div className='flex  items-center justify-center gap-6 w-[50%] '>
            {
              internationalTransfersData.map((item, id) => (
                <div key={id} className="flex flex-col items-center gap-4 justify-start w-[28%] bg-white rounded-4xl px-4 py-8 min-h-86">
                  <img src={item.url} />
                  <div className="flex flex-col items-center justify-center gap-2">
                    <h2 className='text-[#141414]  text-[20px] text-center font-semibold'>{item.title}</h2>
                    <p className='selection:bg-[#99B3E8] text-[#979797]  text-[14px] font-normal text-center leading-4.5'>{item.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[55%] mb-22.5">
          <h2 className='text-[#141414] text-[48px] font-bold text-center leading-15 my-14'>Rusiyaya pul göndərmək üçün nə etmək lazımdır?</h2>
          <div className="flex  flex-wrap  gap-6 mt-5">
            {
              howTo.map((item, id) => (
                <div key={id} className="flex flex-col items-start w-100 justify-start relative ">
                  <span className='absolute top-4 left-4 items-center flex justify-center w-8 h-8 rounded-full text-[#141414] font-medium bg-[#FFFFFF] border border-[#141414]'>{id + 1}</span>
                  <div className="flex items-center justify-center  bg-[#EBE8E7] rounded-4xl mb-6">
                    <img src={item.url} className='flex object-cover w-full' />
                  </div>
                  <h2 className='text-[#141414] text-[18px] font-medium'>{item.title}</h2>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[55%] mt-22.5">
          <h2 className='text-[#141414] text-[48px] font-bold text-center leading-6  my-14'>Hara köçürmək olar</h2>
          <div className="flex items-center justify-center w-full gap-6">
            {
              whereToTransfer.map((item, id) => (
                <Link className="flex items-center justify-between w-1/3 px-4 py-3 rounded-3xl bg-[#ebe8e7] group opacity-100 transition  duration-200 hover:opacity-90">
                  <div className="flex items-center justify-center gap-3">
                    <img src={item.url} />
                    <h2 className='text-[#141414] text-[18px] font-medium '>{item.title}</h2>
                  </div>
                  <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ee5d43e9e6a4e9a26ff8f7_a06411de213f44c89d1794a8cc77e62f_arrow%20right.svg" alt="arrow-right icon" className='flex object-cover transition transform duration-400 group-hover:translate-x-2' />
                </Link>
              ))
            }
          </div>
        </div>
        <Faq faq={internationalTransfersFaq} />
      </div>
      <Footer />
    </div>
  )
}

export default RusiyayaPulGondermek
