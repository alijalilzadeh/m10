import React from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Faq from '../components/Faq'
import DownloadQrBox from '../components/DownloadQrBox'
const Bills = () => {
  const textColor = 'text-[#141414]'
  const serviceTitle = 'Lazım olan bütün xidmətlər – bir tətbiqdə'
  const DropdownUrl = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e33df3874b267affd6acb_16_icon_chevron_down_stroke.svg'
  const m10Logo = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e0999e6e266a21c09fd8c_Group%202085663067.svg'
  const imgUrls = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f3c47a8687f0e7876e6510_5cc57fc617dbdfb55a9ec093e57066ad_arch%20l.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f3c47ae1f5501e5da09a09_10e3a7b2fc60e269257f3aba0ec0baa5_arch%20c.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f3c47ac6e606b8a3330fd0_f4150f81e4a3325b9172a88060337d67_arka%20r.svg' }
  ]
  const billsData = [
    {
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbbf81cbb962735267519b_372f467ed9bf060d752ecf3d770258ec_48_icon_utilities.svg',
      title: 'Kommunal xidmətlər',
      birbonus: true,
      alt: 'icon_utilities'
    },
    {
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbbf818b39c32686622a8c_ca39e3727ceddb208978142c7d66f402_48_icon_internet.svg',
      title: 'İnternet',
      birbonus: true,
      alt: 'icon_internet'

    },
    {
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/6902743c1f78de4d35315062_48_icon_mobile.svg',
      title: 'Mobil operatorlar',
      birbonus: true,
      alt: 'icon_mobile'

    },
    {
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/6902743ca5e7c38953e754d4_48_icon_tv.svg',
      title: 'Kabel TV',
      birbonus: true,
      alt: 'icon_tv'

    },
    {
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbbf81a3b966c1bd3ef429_8e984490132624ed6fb5b2f045a4eac3_48_icon_mobile.svg',
      title: 'Telefon',
      birbonus: true,
      alt: 'icon_mobile'

    },
    {
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbbf8186e806220780df32_952b8a83b98b5b880ffe1ca2828529a9_48_icon_transport.svg',
      title: 'BakıKart',
      birbonus: false,
      alt: 'icon_utilities'
    },
    {
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e4faea19dc68721f0ba99d_48_icon_other.svg',
      title: 'Və daha çoxu',
      birbonus: false,
      alt: 'icon_other'
    },
  ]
  const rowData = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbd1f9f2071e84dfbf461b_f569ad3f4aef3152a815ec3b4622cc1b_okoshko.svg', title: 'Qaz ödənişini bir neçə kliklə et: Gallus və Zenner kartlarının balansını birbaşa telefondan artıra bilərsən' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbd1fa51b20459436e2e96_36321af92e06b3e958375961402ddc9a_Group%202087326249.png', title: 'Oyunu yarımçıq qoyma: hesabını artır və qaldığın yerdən davam et' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbd1f96a9cbd9ac93497bc_268e360de7cfcff2a40f819ad3ae07b9_okoshko-1.svg', title: 'Nə ödəmək istəsən, hamısı buradadır: kommunal, internet, mərc oyunları və daha çoxu' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbd1fa68ce814e9f37f2d0_98f4063c8b7639c411ee321cadb76cbc_Group%202087326250.svg', title: 'Aylıq ödənişlərinə xatırlatma qur,vaxtı gələndə biz sənə xəbər verək' }
  ]
  const creditFaq = [
    {
      q: 'm10 tətbiqində necə qeydiyyatdan keçim?',
      a: 'Çox sadə. Heç 2 dəqiqə vaxtını almayacaq.• “AppStore” və ya “Google Play Market”də m10 tətbiqini tap və smartfonuna quraşdır.• Telefon nömrənlə qısa zamanda qeydiyyatdan keç.Vəssalam. m10 tətbiqini istifadə etməyə hazırsan'
    },
    {
      q: 'm10 ilə harada ödəyə bilərəm?',
      a: 'm10 ilə 20 000-dən çox satış nöqtəsində ödəniş edə bilərsən. Tərəfdaşların tam siyahısına tətbiqdən bax. QR kodla ödə və xərclədiyin məbləğin bir hissəsini bonuslar şəklində geri al.'
    },
    {
      q: 'm10-da necə qazana bilərəm?',
      a: 'm10 ilə ödəniş etdikcə bonuslar qazanırsan. Kommunal xidmətlər, internet, mobil rabitə və mağazalarda QR ilə ödəniş zamanı xərclədiyin məbləğin bir hissəsi bonuslar şəklində geri qaytarılır.'
    },
    {
      q: 'Ödəniş şablonları necə yarada bilərəm?',
      a: 'Biz bunu sənin əvəzinə artıq etdik. İndi tez-tez etdiyin ödənişlər avtomatik olaraq "Ödənişlərim" hissəsinə əlavə olunur. Onların adını rahat dəyişdirə və silə bilərsən.'
    },
    {
      q: 'Doğrudur ki, m10-dan pullar oğurlanır?',
      a: 'Sən m10-a tam etibar edə bilərsən. Biz sənin m10-da pullarının təhlükəsizliyini təmin etmək üçün 24/7 çalışırıq və ən müasir müdafiə sistemlərini tətbiq edirik. Lakin bəzi m10 istifadəçiləri dələduzlarla qarşılaşır. Lütfən diqqətli ol və • bank kartının nömrəsini • bank kartının CVV şifrəsini • OTP kodunu (SMS ilə göndərilən kod) heç kimə VERMƏ, GÖNDƏRMƏ, GÖSTƏRMƏ və heç kimlə PAYLAŞMA!!!Bu sadə prinsipə riayət etməklə, pullarının potensial risklərdən qorumuş olacaqsan.'
    },
    {
      q: 'm10-da nömrəmi necə dəyişim?',
      a: 'Təəssüf ki, hazırda nömrəni dəyişə bilmirik. Amma sən başqa nömrə ilə qeydiyyatdan keçə və bir neçə m10 hesabından istifadə edə bilərsən.'
    },
    {
      q: 'm10-da köçürmələrə komissiya tətbiq edilir?',
      a: 'Pulqabılar arasında edilən köçürmələrə komissiya tətbiq olunmur. Pulqabından karta köçürmələrdə müəyyən limit və kiçik komissiya tətbiq olunur. 5000 ₼-dan çox köçürmələrdə məbləğin 0.5%-nə komissiya tətbiq olunacaq. 20000 ₼-dan çox köçürmələrdə məbləğin 0.3%-nə komissiya tətbiq olunacaq.'
    }
  ]
  const [download, setDownload] = useState(false)
  return (
    <div className='w-full flex flex-col items-start justify-center min-h-screen overflow-x-hidden relative'>
      <Helmet>
        <title>25 000 ₼-dək kredit əldə et!</title>
        <meta name="description" content="transfers" />
      </Helmet>
      {
        download && (
          <DownloadQrBox download={download} setDownload={setDownload} />
        )
      }
      <div className={`flex items-center justify-center absolute inset-0 z-39 ${download ? "bg-black/50 flex" : "hidden"}`}></div>
      <div className='flex flex-col items-center  justify-center w-full h-full '>
        <div className=" flex flex-col items-center h-full justify-center w-full rounded-4xl bg-white relative">
          <Navbar textColor={textColor} DropdownUrl={DropdownUrl} m10Logo={m10Logo} />
          <div className="flex flex-col items-center justify-center gap-6 py-5 mb-8">
            <h2 className='text-[58px] text-[#141414] font-bold'>Xidmətləri m10-la ödə — bonuslar qazan</h2>
            <p className='text-[18px] font-medium text-[#141414]'>Artıq terminal axtarmağa ehtiyac yoxdur — bütün xidmətlər bir tətbiqdədir</p>
            <span onClick={() => setDownload(true)} className={`text-[18px]  text-white  bg-[#141414] rounded-4xl cursor-pointer py-4 px-6 transition duration-200 hover:opacity-90 font-bold`}>Tətbiqi yüklə</span>
          </div>
          <div className="flex items-center justify-center  pb-10">
            {
              imgUrls.map((item, id) => (
                <img src={item.url} alt='arche' />
              ))
            }
          </div>
        </div>
        <div className="grid grid-cols-4 justify-items-center w-[55%] gap-6 mt-15">
          <div className="flex flex-col items-center justify-center w-full rounded-4xl bg-[#5F71EC] relative px-4 py-8">
            <p className='text-white text-[24px] font-semibold text-center leading-7'>400-dən çox ödəniş artıq m10-da</p>
          </div>
          {
            billsData.map((item, id) => (
              <div className="flex flex-col items-center justify-center w-full rounded-4xl bg-[#EBE8E7] relative px-4 py-8 gap-1">
                {
                  item.birbonus && (
                    <img src='https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbc000b0aca3a0fcba46eb_1dd4c899f7643c4b9dee4a2a533f4c03_bir%202%20bage.svg' className='absolute top-3 right-3' />
                  )
                }
                <img src={item.imgUrl} alt={item.alt} />
                <h2 className='text-[18px] font-semibold text-[#141414] text-center leading-6'>{item.title}</h2>
              </div>
            ))
          }

        </div>
        <div className="flex flex-col items-center gap-6 justify-center w-full mb-15">
          <h2 className='text-[48px] text-[#141414] font-bold mb-14 mt-22.5'>Evdən çıxmadan ödə</h2>
          {
            rowData.slice(0, 4).map((item, id) => (
              <div className={`flex ${id % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center justify-center gap-10 w-[50%]`}>
                <img src={item.url} />
                <p className='text-[20px] text-[#141414] font-semibold leading-6'>{item.title}</p>
              </div>
            ))
          }
        </div>
        <Services serviceTitle={serviceTitle} />
        <Faq faq={creditFaq} />
      </div>
      <Footer />
    </div>
  )
}

export default Bills
