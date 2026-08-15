import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
const TurkiyeyePulGondermek = () => {
  const textColor = 'text-[#141414]'
  const serviceTitle = 'Lazım olan bütün xidmətlər – bir tətbiqdə'
  const DropdownUrl = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e33df3874b267affd6acb_16_icon_chevron_down_stroke.svg'
  const m10Logo = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e0999e6e266a21c09fd8c_Group%202085663067.svg'
  const internationalTransfersData = [
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f15ff6b447505e916c2a23_speed-icon.svg',
      title: 'İşıq sürəti ilə',
      desc: 'Köçürmə adətən saniyələr ərzində alıcıya çatır və prosesi maksimum sürətli edir.'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e54e86c53c70d1f9ec6ff3_icon-percent.svg',
      title: 'Tamamilə komissiyasız',
      desc: 'Türkiyəyə pul köçürmələri komissiyasız həyata keçirilir. Əgər bank tərəfindən komissiya tətbiq olunarsa, bu barədə əvvəlcədən məlumat veriləcək.'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ffb1558b43ad1ed24e5a89_coin-icon.svg',
      title: 'Sərfəli məzənnə',
      desc: 'Cari məzənnəni öncədən göstəririk'
    }
  ]

  const whereToTransfer = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68fca50725c724d21838c224_84a6215ef109555785fb5a44c18a34c0_ru-icon.svg', title: 'Rusiya', link: '/rusiyaya-pul-gondermek' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/69de1d7a0bdf7dca1c7814ed_All%20countries.svg', title: 'Digər ölkələr', link: '' }
  ]

  const howTo = [
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68fe561242b1a80c3f96cbff_892622545109225824bf3470ce417037_Step%201.svg',
      title: 'Tətbiqi aç və “Köçürmək” bölməsində → Beynəlxalq köçürmələri seç'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ffbb233cdf9adc53bd7988_Step%202%20tl.svg',
      title: '“Türkiyəyə köçürmə” seçimini et'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68fe4feaf0bb57d288ffd54f_9c1a3d66ee6f572fc117735846e07e54_Step%203.svg',
      title: 'Göndərmək istədiyin məbləği və və valyutanı qeyd et'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68fe4feadd4e306dd577af76_fe7c4e129e50ed61332d69ff43330c82_Step%204.svg',
      title: 'Alıcının məlumatlarını daxil et və köçürməni təsdiqlə'
    }
  ]

  const internationalTransfersFaq = [
    {
      q: 'Türkiyəyə pul köçürməsi nə qədər vaxt aparır?',
      a: 'Türkiyəyə pul köçürmələri adətən 2 dəqiqə ərzində həyata keçirilir. Emal müddəti tərəfdaşdan və ödəniş sistemindən asılıdır. Nadir hallarda köçürmə daha çox vaxt apara bilər'
    },
    {
      q: 'Türkiyəyə pul köçürmələrinə nə qədər komissiya tətbiq olunur?',
      a: 'm10 tərəfindən komissiya tutulmur. Lakin alıcının bankı öz daxili qaydalarına əsasən komissiya tuta bilər.'
    },
    {
      q: 'Türkiyəyə pul köçürməsi baş tutmadıqda nə etməli?',
      a: 'Köçürmə baş tutmasa, ekranda xəta mesajı görünəcək. Bu, adətən limit və ya məlumatların düzgün daxil edilməməsi ilə bağlı olur. Məlumatları yoxlayaraq əməliyyatı yenidən icra edə bilərsən.'
    },
    {
      q: 'Hansı istiqamətlər üzrə pul köçürmələri mövcuddur?',
      a: 'Dünyanın 150-dən çox ölkəsinə pul köçürmələri mövcuddur. Bütün ölkələrin siyahısı səhifənin yuxarı hissəsində təqdim olunub.'
    },
    {
      q: 'Pul köçürmələri üçün limitlər var?',
      a: 'Bəli, aşağıdakı limitlər tətbiq olunur: — gündəlik — 3 400 ₼-dək — aylıq — 17 000 ₼-dək — digər banklar və tətbiqlər vasitəsilə ümumi limit — 33 000 ₼-dək'
    }
  ]
  return (
    <div className='w-full flex flex-col items-start justify-start min-h-screen overflow-x-hidden'>
      <Helmet>
        <title>Türkiyəyə pul göndərmək – m10 ilə sürətli və etibarlı</title>
        <meta name="description" content="transfers" />
      </Helmet>
      <div className='flex flex-col items-center  justify-center w-full h-full '>
        <div className=" flex flex-col items-center h-full justify-center w-full rounded-4xl bg-white relative">
          <Navbar textColor={textColor} DropdownUrl={DropdownUrl} m10Logo={m10Logo} />
          <div className="flex flex-col items-center justify-center gap-6 py-5 mb-8">
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68fdba08688504a611627409_turkey.svg" />
            <h2 className='text-[58px] text-[#141414] font-bold  text-center leading-18 w-[90%]'>Azərbaycandan Türkiyəyə sürətli pul köçürmələri</h2>
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
          <h2 className='text-[#141414] text-[48px] font-bold text-center leading-15 my-14'>Türkiyəyə pul göndərmək üçün nə etmək lazımdır?</h2>
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
                <Link to={item.link} className="flex items-center justify-between w-1/3 px-4 py-3 rounded-3xl bg-[#ebe8e7] group opacity-100 transition  duration-200 hover:opacity-90" reloadDocument>
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

export default TurkiyeyePulGondermek
