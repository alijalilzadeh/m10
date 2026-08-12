import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TarifBoxes from '../components/TarifBoxes'
import Services from '../components/Services'
import Faq from '../components/Faq'
import { Link } from 'react-router-dom'
const Transfer = () => {
  const serviceTitle = 'Lazım olan bütün xidmətlər – bir tətbiqdə'
  const textColor = 'text-[#141414]'
  const DropdownUrl = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e33df3874b267affd6acb_16_icon_chevron_down_stroke.svg'
  const m10Logo = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e0999e6e266a21c09fd8c_Group%202085663067.svg'
  const imgUrls = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d2c60343691e1118379f92_b964ccb154be5d689b1e462ea63dd0f5_arche.png' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d439899584833eb2981769_95d4944734caae8b948fc1b14802c58f_%D0%B0%D1%80%D0%BA%D0%B0.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d2c603784c5135b35650a1_1be7e349b628d578a043a18ac1aaec5f_arche-1.png' }
  ]

  const rowData = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d3004b8ba78ee2d5a14cf8_2fba879ee3a2d71d42ef8a6bcfad97e2_okoshko.svg', title: 'Uzun nömrələri yadda saxlamağa ehtiyac yoxdur — köçürmə üçün sadəcə alıcının telefon nömrəsi lazımdır' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d470822003eda9ffead75d_6d0221f113cc9a8eab09bc2cd957c29d_okoshko-devushka.svg', title: 'Əminliklə göndər — pul doğru ünvana çatsın deyə alıcının adının baş hərflərini göstəririk' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d3004bec068731c9a9a3ad_443584f586560dc18505879e26f82e40_okoshko-1.svg', title: 'Ən çox pul göndərdiyin kontaktları siyahının əvvəlində göstəririk' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d3004bdd442e0a1925618c_86f8f5588533bc03dc12514e08d6c54c_okoshko-2.svg', title: 'Heç bir narahatlıq olmadan — pul topla, göndər və borc al' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d4715acb9f1b1575c94f54_7461a33037e619bdd52d262be261613a_okoshko%20cards.svg', title: 'Lazım olan kart həmişə əl altında: onu şablon kimi yadda saxla və növbəti dəfə məlumat daxil etmədən köçür' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d47159eb1af7ccacb427e8_0f72fe8de0ecb8c346b84f8f62d77c6a_okoshko%20new.svg', title: 'Komissiyanı öyrən, sonra köçür: bütün bankların köçürmə haqlarını göstəririk' }
  ]

  const arcData = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e4d9cf8b12ca5a7f7ae122_f5b44976889b20956cf6ee2a702be92d_arche.png' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e4d9ceecd4e24822179bf0_1e6ee35a4b5bc456a13768c3039cd2f2_ark%202.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e4d9cfdbc4e208fb6027e7_81955177fe7f0ec80ea52a8cffc2663a_arche-1.png' }
  ]
  const tarifData = [
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d448adb816cbe6dc575253_icon.svg',
      title: 'İstənilən bank',
      desc: 'Ölkədəki bütün kartlarla işləyir'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d448ad030016583ac4b2f4_icon-1.svg',
      title: '5000 AZN-dək komissiyasız',
      desc: 'Bank komissiya tutarsa, öncədən xəbərdar edəcəyik'
    }
  ]
  const moneyReqData = [
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/690460f7cb7fade979611737_Step%2013.svg',
      title: 'Pul istəyəcəyin adamı seç'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/690460f8ea6c31415f8b082b_Step%2015.svg',
      title: 'Məbləği yazıb kiçik qeyd əlavə edə bilərsən'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/690460f78c01b2dac8683166_Step%2014.svg',
      title: 'Kimdən nə qədər toplandığını canlı gör'
    }

  ]
  const Faqdata = [
    {
      q:'m10-da pul göndərmək, qəbul etmək və ya istəmək üçün FİN ilə qeydiyyatdan keçmək lazımdır?',
      a: 'Bəli. Pul göndərmək, qəbul etmək və istəmək üçün FİN ilə qeydiyyatdan keçməlisən – bu, hesabının təhlükəsizliyini qoruyur və qanunvericilik tələblərinə uyğunluğunu təmin edir.'
    },
    {
      q:'Pulqabılar arasında edilən köçürmələrə komissiya tətbiq olunur?',
      a: 'Xeyr. m10-da pulqabılar arasında köçürmələr tamamilə komissiyasızdır.'
    },
    {
      q:'m10 hesabı olmayan birinə sadəcə telefon nömrəsi ilə pul göndərə bilərəm?',
      a: 'Bəli. Sadəcə alıcının telefon nömrəsini daxil etməklə ona pul göndərə bilərsən. Qeydiyyatdan keçib pulu almaq üçün alıcıya SMS ilə təlimat göndəriləcək.'
    },
    {
      q:'Pulqabından karta köçürmələrə limit və komissiya var?',
      a: 'Pulqabından karta köçürmələrdə müəyyən limit və kiçik komissiya tətbiq olunur. 5000 ₼-dan çox köçürmələrdə məbləğin 0.5%-nə komissiya tətbiq olunacaq. 20000 ₼-dan çox köçürmələrdə məbləğin 0.3%-nə komissiya tətbiq olunacaq.'
    },
    {
      q:'Pul sorğusunu neçə dəfə və neçə nəfərə göndərə bilərəm?',
      a: 'Gündə maksimum 20 pul sorğusu göndərə və hər bir sorğuya maksimum 20 nəfər əlavə edə bilərsən.'
    }
  ]
  return (
    <div className='w-full flex flex-col items-start justify-center min-h-screen overflow-x-hidden'>
      <Helmet>
        <title>Transfers</title>
        <meta name="description" content="transfers" />
      </Helmet>
      <div className='flex flex-col items-center gap-15 justify-center w-full h-full '>
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
        <TarifBoxes />
        <div className="flex flex-col items-center gap-6 justify-center w-full mb-15">
          {
            rowData.slice(0, 4).map((item, id) => (
              <div className={`flex ${id % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center justify-center gap-10 w-[50%]`}>
                <img src={item.url} />
                <p className='text-[20px] text-[#141414] font-semibold leading-6'>{item.title}</p>
              </div>
            ))
          }
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-6 bg-white pt-22.5 pb-10 rounded-4xl">
          <h2 className='text-[58px] text-[#141414] font-bold'>Karta pul köçürmək? Çox sadə!</h2>
          <div className="flex items-center justify-center gap-6">
            {
              arcData.map((item, id) => (
                <img src={item.url} />
              ))
            }
          </div>
        </div>
        <div className='flex flex-col  items-center justify-center gap-10 w-full mb-10'>
          <div className='flex  items-center justify-center gap-6 w-[50%] '>
            {
              tarifData.map((item, id) => (
                <div key={id} className="flex flex-col items-center gap-4 justify-start w-[28%] bg-white rounded-4xl px-4 py-8 min-h-70">
                  <img src={item.url} />
                  <div className="flex flex-col items-center justify-center gap-2">
                    <h2 className='text-[#141414] text-[20px] font-bold text-center leading-6'>{item.title}</h2>
                    <p className='selection:bg-[#99B3E8] text-[14px] text-[#979797] text-center font-normal'>{item.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <Link className='underline text-[#141414] text-[14px] font-[550] transition duration-200 opacity-100 hover:opacity-80'>Tariflər haqqında öyrən</Link>
        </div>
        <div className="flex flex-col items-center gap-6 justify-center w-full mb-15">
          {
            rowData.slice(4, 7).map((item, id) => (
              <div className={`flex ${id % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center justify-center gap-10 w-[50%]`}>
                <img src={item.url} />
                <p className='text-[20px] text-[#141414] font-semibold leading-6'>{item.title}</p>
              </div>
            ))
          }
        </div>
        <div className='flex flex-col items-center justify-center w-full gap-6 bg-white py-22.5  rounded-4xl'>
          <div className="flex flex-col items-center gap-4 justify-center w-[58%]">
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/69046143eeb0535d84680827_c9d9283e103cd4755d225385e3aca1b9_money-request.svg" alt="money-request" />
            <h2 className='text-[48px] text-[#141414] font-bold text-center leading-15 mb-3'>Heç bir narahatlıq olmadan - pul topla, göndər və borc al</h2>
            <div className="flex  flex-wrap  gap-6 mt-5">
              {
                moneyReqData.map((item, id) => (
                  <div key={id} className="flex flex-col items-start w-auto justify-center relative ">
                    <span className='absolute top-4 left-4 items-center flex justify-center w-8 h-8 rounded-full text-[#141414] font-medium bg-[#FFFFFF] border border-[#141414]'>{id+1}</span>
                    <div className="flex items-center justify-center  bg-[#EBE8E7] rounded-4xl mb-6">
                      <img src={item.url} className='flex object--cover w-100' />
                    </div>
                    <h2 className='text-[#141414] text-[18px] font-medium'>{item.title}</h2>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <Services serviceTitle={serviceTitle} />
        <Faq faq={Faqdata} />
      </div>
      <Footer />
    </div>
  )
}

export default Transfer
