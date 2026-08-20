import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Faq from '../components/Faq'
import DownloadQrBox from '../components/DownloadQrBox'
const BakiKart = () => {
  const imgUrls = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d43620b4c51de5c556c371_8fc3f2de0b23b7aa8a6298d79033b6b5_arche%20l.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d4362080cfd221d29ed082_e7159bf8fcdf274ed476651e20f2d266_arche%20c.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d436207bce2c3534ae356a_56597995e1696b6dac289fd3b6dce927_arche%20r.svg' }
  ]
  const bakiCardData = [
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d29f4470c7268997fad241_icon-birbonus.svg',
      title: 'Bonuslarla bilet al',
      desc: 'Bonusları topla və “yol pulu” kimi istifadə et'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d29f443d98c0abad694743_icon-ticket.svg',
      title: 'Yaxınlarınla birgə gediş',
      desc: 'Bir dəfəyə 3 biletə qədər ala bilərsən'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68db9d63301d7db73e413a3a_icon-widget.svg',
      title: 'Bilet hər an əl altında',
      desc: 'Bileti tətbiqdə birbaşa əsas ekrandan almaq mümkündür'
    }
  ]
  const howTo = [

    {
      sort: 'QR ilə ödəniş',

      mainData: [
        {
          url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d2a39c5e58540fe8bf90d2_39a109ef3db385f62d1b364d0a501261_Step%201.svg',
          title: 'Tətbiqi aç və BakıKart bölməsinə keç'
        },
        {
          url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d2a39dc58665feffcc1d6c_ea1affed1f53d52ceba27ea5c04a656a_Step%202.svg',
          title: 'Gedişhaqqını marşrutun tarifinə uyğun seç'
        },
        {
          url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d2a39ca78a700de14bd21f_Step%203.svg',
          title: 'Bileti al — QR kod ekranda görünəcək. Bileti bonuslarla da ala bilərsən'
        },
        {
          url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d2a39c3c73728c32445c9d_1d4b2965a02098e1199dcad84123f5dd_Step%204.svg',
          title: 'QR kodu oxuyucuya yaxınlaşdır. Vəssalam, gedə bilərsən!'
        }
      ]
    },
    {
      sort: 'BakıKart balans artımı',
      mainData: [
        {
          url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d2a39c5e58540fe8bf90d2_39a109ef3db385f62d1b364d0a501261_Step%201.svg',
          title: 'Tətbiqi aç və BakıKart bölməsinə keç'
        },
        {
          url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/690afe0f39e3e6013d5f7938_8f2314260694c65d1ffc604c80853bfc_Step%202.svg',
          title: 'Balans artımı bölməsini seç'
        },
        {
          url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/690afe0f3c4f4ee1733c7c85_be280f6fced076327e0975220150b664_Step%203.svg',
          title: 'BakıKart nömrəsini daxil et (nömrə kartın arxa tərəfində yazılır)'
        },
        {
          url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68db9f58ec2a93b9ebc73f21_8f8736d954e779679360b50cfc6fe31f_Step%204.svg',
          title: 'Məbləği qeyd et və ödənişi təsdiqlə. Bonuslarla da ödəyə bilərsən. Balans dərhal yenilənəcək'
        }
      ]
    },
  ]
  const bakiKartFaq = [
    {
      q: 'QR bileti necə almaq olar?',
      a: 'm10 tətbiqinə daxil ol, “BakıKart” bölməsini seç və “Bilet al” düyməsinə bas. Gedişhaqqını marşrutun tarifinə uyğun seç. Alış prosesi cəmi bir neçə saniyə çəkir.'
    },
    {
      q: 'QR bileti necə istifadə etmək olar?',
      a: 'Əsas səhifədəki BakıKart bölməsinə keç, bilet al və QR kodu aktiv et. Daha sonra nəqliyyatda QR kodu skan edərək ödənişi tamamla. Hər QR biletdən yalnız bir gediş üçün istifadə oluna bilər.'
    },
    {
      q: 'Əgər bilet istifadə olunmasa nə etməli?',
      a: 'Əgər bilet istifadə olunmasa, məbləğ 1 gün ərzində balansına geri qaytarılır.'
    },
    {
      q: 'Gediş haqqı nə qədərdir?',
      a: 'm10-la gediş haqqı tarifi istiqamətdən asılı olaraq 0.50 - 1.30 AZN aralığında müəyyən edilib.'
    },
    {
      q: 'Bilet nə qədər müddət keçərlidir?',
      a: 'Bilet 5 dəqiqə ərzində keçərli olacaq.'
    }
  ]

  const [category, setCategory] = useState('QR ilə ödəniş')
  const [download, setDownload] = useState(false)
  const textColor = 'text-[#141414]'
  const serviceTitle = 'Lazım olan bütün xidmətlər – bir tətbiqdə'
  const DropdownUrl = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e33df3874b267affd6acb_16_icon_chevron_down_stroke.svg'
  const m10Logo = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e0999e6e266a21c09fd8c_Group%202085663067.svg'
  const filteredHowTo = howTo.find(item => item.sort === category);

  return (
    <div  className={`w-full flex flex-col items-start justify-center min-h-screen relative overflow-x-hidden `}>
      <Helmet>
        <title>Mağazalarda m10-la ödəniş edənlərə 2% bonus</title>
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
            <h2 className='text-[58px] text-[#141414] font-bold w-full text-center leading-18'>Nəqliyyatı m10-la ödə</h2>
            <p className='text-[18px] font-medium text-[#141414]'>QR ilə ödə və ya BakıKart balansını birbaşa telefondan artır</p>
            <span onClick={() => setDownload(true)} className={`text-[18px]  text-white  bg-[#141414] rounded-4xl cursor-pointer py-4 px-6 transition duration-200 hover:opacity-90 font-bold`}>Tətbiqi yüklə</span>
          </div>
          <div className="flex items-center justify-center gap-6  pb-10">
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
              bakiCardData.map((item, id) => (
                <div key={id} className="flex flex-col items-center gap-4 justify-start w-[28%] bg-white rounded-4xl px-4 py-8 min-h-70">
                  <img src={item.url} />
                  <div className="flex flex-col items-center justify-center gap-2 w-full">
                    <h2 className='text-[#141414] text-[20px] text-center font-semibold w-[75%]'>{item.title}</h2>
                    <p className='selection:bg-[#99B3E8] text-[#898989] text-[14px] font-normal text-center leading-5'>{item.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[55%]">
          <h2 className='text-[#141414] text-[48px] font-bold text-center leading-6 my-14'>Bu necə işləyir</h2>
          <div className="flex items-center justify-center w-full gap-3 mb-9">
            {
              howTo.map((item, id) => (
                <span onClick={() => setCategory(item.sort)} className={`px-4 py-2.5 rounded-4xl text-[18px] font-medium cursor-pointer opacity-100 transition duration-250 hover:opacity-75 ${item.sort === category ? "bg-[#141414] text-white " : "border border-[#141414] bg-white text-[#141414]"}`}>{item.sort}</span>
              ))
            }
          </div>
          <div className="flex  flex-wrap  gap-6 mt-5">
            {
              filteredHowTo.mainData.map((item, id) => (
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
        <Faq faq={bakiKartFaq} />
      </div>
      <Footer />
    </div>
  )
}

export default BakiKart
