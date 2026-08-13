import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../components/Services'
import TarifBoxes from '../components/TarifBoxes'
import QrPayLogoTransition from '../components/QrPayLogoTransition'
import Faq from '../components/Faq'
const QrPay = () => {
  const textColor = 'text-[#141414]'
  const serviceTitle = 'Lazım olan bütün xidmətlər – bir tətbiqdə'
  const DropdownUrl = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e33df3874b267affd6acb_16_icon_chevron_down_stroke.svg'
  const m10Logo = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e0999e6e266a21c09fd8c_Group%202085663067.svg'
  const imgUrls = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbd4277c69dd22fca24e6a_2b6fa8bc03148b0ea076a0d766760830_arche-1.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbd42daceb18637a0cb455_0a4e9c8a1733f022478b3dca58886679_%D0%B0%D1%80%D0%BA%D0%B0.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbd4272c50967c219513dd_4647cbb0ce8c4bf7d0d5c539f2ab58cd_arche.svg' }
  ]
  const qrData = [
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e4e38853d8e31a31970841_a1496243bbf8d6151a43bd4185068318_icon.svg',
      title: 'Ödənişlər',
      desc: 'Stikeri gördüyün hər yerdə m10-la ödəyə bilərsən'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/690b03fbef92467957f5410f_0a16a1e6614beaadb4eb834ec72208e3_barcode.svg',
      title: 'Bonus',
      desc: 'Bir Bonus barkodunu göstər, m10-la ödə və bonuslar qazan'
    }
  ]
  const howTo = [
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbd479a766dd324b4107f4_b787f56add5a9fd71b98ffd1b859f384_Step%201.svg',
      title: 'Tətbiqi aç və əsas ekranın alt hissəsindəki paneldən QR bölməsini seç'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbd47918165a6c5f573f41_c7f0228517681c8d5655dc8bd86e9c45_Step%202.svg',
      title: 'Kassada m10-la ödəmək istədiyini de, göstərilmiş QR kodu skan et'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbd47968a6e571baa7e18b_4a118b30c7d952c0d5df8d4adaa73755_Step%203.svg',
      title: 'Ödənişi təsdiqlə və alış-verişi tamamla'
    }
  ]
   const rowData = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbd6f7c1d454a14150f760_461c887d994d6cb874f83ac8d9219979_okoshki.svg', title: 'Həm ödəniləcək məbləği, həm də balansını görərək ödənişi özün təsdiqləyirsən' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbd6f7943c108c0e11b19e_8c08f7f39a2f3cf565c68f13cb76af51_okoshki-1.svg', title: 'Ödənişdən dərhal sonra balansına bonuslar əlavə olunur və tətbiqdə göstərilir' }
  ]
  const qrPayFaq = [
    {
      q:'m10 tətbiqində necə qeydiyyatdan keçim?',
      a: 'Çox sadə. Heç 2 dəqiqə vaxtını almayacaq.• “AppStore” və ya “Google Play Market”də m10 tətbiqini tap və smartfonuna quraşdır.• Telefon nömrənlə qısa zamanda qeydiyyatdan keç.Vəssalam. m10 tətbiqini istifadə etməyə hazırsan.'
    },
    {
      q:'m10 ilə harada ödəyə bilərəm?',
      a: 'm10 ilə 20 000-dən çox satış nöqtəsində ödəniş edə bilərsən. Tərəfdaşların tam siyahısına tətbiqdən bax. QR kodla ödə və xərclədiyin məbləğin bir hissəsini bonuslar şəklində geri al.'
    },
    {
      q:'m10-da necə qazana bilərəm?',
      a: 'm10 ilə ödəniş etdikcə bonuslar qazanırsan. Kommunal xidmətlər, internet, mobil rabitə və mağazalarda QR ilə ödəniş zamanı xərclədiyin məbləğin bir hissəsi bonuslar şəklində geri qaytarılır.'
    },
    {
      q:'Ödəniş şablonları necə yarada bilərəm?',
      a: 'Biz bunu sənin əvəzinə artıq etdik. İndi tez-tez etdiyin ödənişlər avtomatik olaraq "Ödənişlərim" hissəsinə əlavə olunur. Onların adını rahat dəyişdirə və silə bilərsən.'
    },
    {
      q:'Doğrudur ki, m10-dan pullar oğurlanır?',
      a: 'Sən m10-a tam etibar edə bilərsən. Biz sənin m10-da pullarının təhlükəsizliyini təmin etmək üçün 24/7 çalışırıq və ən müasir müdafiə sistemlərini tətbiq edirik. Lakin bəzi m10 istifadəçiləri dələduzlarla qarşılaşır. Lütfən diqqətli ol və • bank kartının nömrəsini • bank kartının CVV şifrəsini • OTP kodunu (SMS ilə göndərilən kod) heç kimə VERMƏ, GÖNDƏRMƏ, GÖSTƏRMƏ və heç kimlə PAYLAŞMA!!!Bu sadə prinsipə riayət etməklə, pullarının potensial risklərdən qorumuş olacaqsan.'
    },
    {
      q:'m10-da nömrəmi necə dəyişim?',
      a: 'Təəssüf ki, hazırda nömrəni dəyişə bilmirik. Amma sən başqa nömrə ilə qeydiyyatdan keçə və bir neçə m10 hesabından istifadə edə bilərsən.'
    },
    {
      q:'m10-da köçürmələrə komissiya tətbiq edilir?',
      a: 'Pulqabılar arasında edilən köçürmələrə komissiya tətbiq olunmur. Pulqabından karta köçürmələrdə müəyyən limit və kiçik komissiya tətbiq olunur. 5000 ₼-dan çox köçürmələrdə məbləğin 0.5%-nə komissiya tətbiq olunacaq. 20000 ₼-dan çox köçürmələrdə məbləğin 0.3%-nə komissiya tətbiq olunacaq.'
    }
  ]
  return (
    <div className='w-full flex flex-col items-start justify-center min-h-screen overflow-x-hidden'>
      <Helmet>
        <title>Mağazalarda m10-la ödəniş edənlərə 2% bonus</title>
        <meta name="description" content="transfers" />
      </Helmet>
      <div className='flex flex-col items-center  justify-center w-full h-full '>
        <div className=" flex flex-col items-center h-full justify-center w-full rounded-4xl bg-white relative">
          <Navbar textColor={textColor} DropdownUrl={DropdownUrl} m10Logo={m10Logo} />
          <div className="flex flex-col items-center justify-center gap-6 py-5 mb-8">
            <h2 className='text-[58px] text-[#141414] font-bold w-[90%] text-center leading-18'>Mağazalarda m10-la ödəniş edənlərə bonuslar</h2>
            <span className={`text-[18px]  text-white  bg-[#141414] rounded-4xl cursor-pointer py-4 px-6 transition duration-200 hover:opacity-90 font-bold`}>Tətbiqi yüklə</span>
          </div>
          <div className="flex items-center justify-center  pb-10">
            {
              imgUrls.map((item, id) => (
                <img src={item.url} alt='arche' />
              ))
            }
          </div>
        </div>
        <div className='flex flex-col  items-center justify-center gap-10 w-full mt-15 mb-10'>
          <div className='flex  items-center justify-center gap-6 w-[50%] '>
            {
              qrData.map((item, id) => (
                <div key={id} className="flex flex-col items-center gap-4 justify-start w-[28%] bg-white rounded-4xl px-4 py-8 min-h-70">
                  <img src={item.url} />
                  <div className="flex flex-col items-center justify-center gap-2">
                    <h2 className='text-[#141414] text-[14px] text-center font-normal'>{item.title}</h2>
                    <p className='selection:bg-[#99B3E8]text-[#141414] text-[20px] font-semibold text-center leading-6'>{item.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[55%]">
          <h2 className='text-[#141414] text-[48px] font-bold text-center leading-6 my-14'>Bu necə işləyir</h2>
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
        <div className="flex flex-col items-center gap-6 justify-center w-full mb-15">
          <h2 className='text-[48px] text-[#141414] font-bold mb-14 mt-22.5'>m10-la ödəmək zövq verir</h2>
          {
            rowData.slice(0, 4).map((item, id) => (
              <div className={`flex ${id % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center justify-center gap-10 w-[50%]`}>
                <img src={item.url} />
                <p className='text-[20px] text-[#141414] font-semibold leading-6'>{item.title}</p>
              </div>
            ))
          }
        </div>
        <QrPayLogoTransition />
        <Faq faq={qrPayFaq} />
      </div>
      <Footer />
    </div>
  )
}

export default QrPay
