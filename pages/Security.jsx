import React from 'react'
import NavbarSecurity from '../components/NavbarSecurity'
import FooterSecurity from '../components/FooterSecurity'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Faq from '../components/Faq'
const Security = () => {
  const imgUrls = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f15b5d81bbe86aa16a38e9_Arch.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f633a3cd7c003ca8c664c0_arch.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f15b5d81bbe86aa16a38e9_Arch.svg' }
  ]
  const securityData = [
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f4d672a755bfe3604face4_kyc.svg',
      desc: 'm10 pulqabın yalnız sənin şəklini tanıyacaq. Biz onu yüksək səviyyədə şifrələyəcəyik və heç kim səndən başqa tətbiqə daxil ola bilməyəcək'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f4d671dcced4763211c711_padlock.svg',
      desc: 'm10-id pullarının və məlumatlarınıntam təhlükəsizliyinə zəmanət verir'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f4d672149e16680dd008ab_list.svg',
      desc: 'Amma heç vaxt əsas təhlükəsizlik qaydasını unutma. Bu barədə aşağıda qısaca yazmışıq'
    }
  ]

  const socialData = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f4c11622f4adba68a8d8b6_facebook.svg', title: 'm10', link: 'https://www.facebook.com/m10.az/' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f4c117e380207fe232940f_tiktok.svg', title: '@m10bypashapay', link: 'https://www.tiktok.com/@m10bypashapay' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f4c116c6e606b8a34981f6_whatsapp.svg', title: 'm10', link: 'https://api.whatsapp.com/send/?phone=994774008810&text&type=phone_number&app_absent=0' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f4c116a94a4520bd7168b7_instagram.svg', title: 'm10.az', link: 'https://www.instagram.com/m10.az/' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f4c11688284206823cdb37_mail.svg', title: 'info@m10.az', link: 'mailto:info@m10.az' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f4c118295684cd58e0f037_web.svg', title: 'm10.az', link: '/' },
  ]

  const rowData = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f4c43928b88fe39a520128_okoshko%20link.svg', title: 'Yalnız rəsmi saytdan istifadə et. Adətən səhifəyə “loto-”, “money-” v.s. kimi adlar verirlər. Yalnız rəsmi saytdan istifadə et' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f4c4395ea873d2f3b94b0e_okoshko%20code.svg', title: 'SMS ilə gələn kodu heç kimə demə və göstərmə. Yoxsa sənin m10 pulqabına daxil olmaq üçün həmin koddan istifadə edəcəklər' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f4c439e72bf6e2554778ea_okosho%20money.svg', title: 'Lotereyada iştirak etmək üçün pul göndərmə. Biz bunu yalnız tətbiqdə edirik və heç vaxt minimal ödəniş istəmərik' }
  ]

  const securityFaq = [
    {
      q: 'm10-dakı pullarım etibarlı əllərdədir?',
      a: 'Bəli, m10 pullarını qoruyur. Pullarının təhlükəsizliyini təmin etmək üçün komandamız yorulmadan bütün lazımi tədbirləri həyata keçirir.'
    },
    {
      q: 'Doğrudur ki, m10-dan pullar oğurlanır?',
      a: 'Sən m10-a tam etibar edə bilərsən. Biz sənin m10-da pullarının təhlükəsizliyini təmin etmək üçün 24/7 çalışırıq və ən müasir müdafiə sistemlərini tətbiq edirik. Lakin bəzi m10 istifadəçiləri dələduzlarla qarşılaşır. Lütfən diqqətli ol və - bank kartının nömrəsini - bank kartının CVV şifrəsini - OTP kodunu (SMS ilə göndərilən kod)heç kimə VERMƏ, GÖNDƏRMƏ, GÖSTƏRMƏ və heç kimlə PAYLAŞMA!!! Bu sadə prinsipə riayət etməklə, pullarını potensial risklərdən qorumuş olacaqsan.'
    },
    {
      q: 'm10 əməkdaşı mənə zəng edə bilər?',
      a: 'm10 əməkdaşları səninlə yalnız şirkətin rəsmi e-mail ünvanı və ya 0124044114 nömrəsi ilə əlaqə saxlaya bilər. Əməkdaşlarımız heç bir halda bank kartının məlumatlarını, CVV şifrəsini və ya OTP-kodunu, hər hansı əməliyyatın həyata keçirilməsi üçün səndən tələb etmir. Əgər “PashaPay” və ya “m10” adından səninlə əlaqə saxlayıb həmin məlumatları tələb etsələr, bil ki, bu şəxslərin bizim şirkətə heç bir aidiyyəti yoxdur. Ehtiyatsızlıqdan məlumatlarını digər (üçüncü) şəxslərlə paylaşıb elektron pul qabından ya hesabından oğurluq halı ilə üzləşdiyin zaman, “PashPay” heç bir məsuliyyət daşımayacaq.'
    },
    {
      q: 'm10 balansımdan pul oğurlanıb. Mən nə edim?',
      a: 'Həmişə ayıq-sayıq olmağı və məxfi məlumatlarla ehtiyatla davranmağı tövsiyə edirik. Şübhəli yaxud xoşagəlməz hallarla üzləşsən, lütfən aşağıdakı addımları at: • Tətbiqi blokla - Bizim Çağrı Mərkəzinə *8810 nömrəsinə zəng et. • Zəng et – 102 qaynar xəttinə və ya Kibercinayətkarlıqla Mübarizə Baş İdarəsinə müraciət et. • Mühüm məlumatları yadda saxla - Hadisəni araşdırmaq üçün bizə istənilən məlumat lazım ola bilər. Sənin təhlükəsizliyin bizim prioritetimizdir və biz daim səni hər addımda dəstəkləməyə hazırıq.'
    },
    {
      q: 'Üztanıma nədir?',
      a: 'Üztanıma m10 pulqabısında qeydiyyatdan keçmək üçün əlavə təhlükəsiz təsdiqləməüsuludur. Bu təsdiqləmə üsulu biometrik məlumatlardan istifadə etdiyi üçün şifrələrdən daha təhlükəsizdir. m10-da qeydiyyatdan keçmək və pulqabını digər cihazda istifadə etmək istədiyin zaman kimliyini yoxlamaq üçün üzünü skan etməyin istəniləcək.Bununla bərabər qeydiyyat zamanı sənə SMS vasitəsilə təsdiq üçün OTP-kod göndəriləcək.'
    },
    {
      q: 'Üztanıma necə aktivləşir?',
      a: 'm10 tətbiqini yüklədikdən və ya yenilədikdən sonra istifadəçi ekranında “üztanıma” funksiyası aktiv olacaq.Profildən çıxıb yenidən daxil olmaqla və ya tətbiqi silib yenidən yükləməklə, üztanıma funskiyasından avtomatik istifadə edəcəksən.'
    },
    {
      q: 'Niyə m10-ID istifadə etməliyəm?',
      a: 'Bu təsdiqləmə üsulu sürətli, təhlükəsiz və rahat olduğundan, üztanıma OTP-koddan əlavə olaraq m10-nun təhlükəsizlik vasitələrinə əlavə olunmuşdur. Üztanımafunksiyasının köməyi ilə yalnız üzünü telefonun ön kamerası ilə qeyd etməklə, tətbiqi açmaq mümkün olacaq və bununla da pulqabının təhlükəsizliyini təmin etmiş olacaqsan.'
    },
    {
      q: 'Üztanımadan imtina edə bilərəm?',
      a: 'Xeyr, qeydiyyat zamanı və yeni cihazdan istifadə zamanı üzünün təsdiqlənməsimütləqdir.'
    },
    {
      q: 'Biometrik məlumatların necə istifadə olunacaq?',
      a: 'Üzün haqda məlumat yalnız təsdiqləmə məqsədləri üçün istifadə olunacaq və heç bir kənar tərəflə paylaşılmayacaq. Şəxsi məlumatlarının istifadəsi haqda Qaydalar və Şərtlərlə BURADA tanış ola bilərsən.'
    },
    {
      q: 'm10-ID bütün cihazlar üçün əlçatandır? Tələblər nədir?',
      a: 'Üztanıma ön kamerası olan bütün Android və iOS mobil cihazları üçün əlçatandır.'
    },
    {
      q: 'Kimsə mənimlə eyni üz cizgilərinə malikdirsə, üztanıma fərqi deyə biləcək?',
      a: 'Bənzər əkizlərin oxşar üz quruluşlarına sahib olduqları üçün üz yoxlanışından keçmələri mümkündür. Bununla belə, istifadəçilərin əksəriyyəti üçün alqoritmimiz oxşarları fərqləndirə biləcək.'
    },
    {
      q: 'Hansı hallarda üztanımadan təkrar keçməliyəm?',
      a: 'Üztanıma funksiyasından aşağıdakı hallarda yenidən keçmək məcburiyyəti yaranır: · Digər bir cihazda m10 hesabına daxil olan zaman; · Əgər eyni cihazda istifadəçi adından çıxıb yenidən giriş edilərsə; · m10 tətbiqini silinib yenidən yüklənərsə.'
    }
  ]
  return (
    <div className='w-full flex flex-col items-start justify-center min-h-screen overflow-x-hidden'>
      <Helmet>
        <title>m10 səni qoruyur</title>
        <meta name="description" content="transfers" />
      </Helmet>
      <div className='flex flex-col items-center  justify-center w-full h-full '>
        <div className=" flex flex-col items-center h-full justify-center w-full rounded-4xl bg-[#141414] relative">
          <NavbarSecurity />
          <div className="flex flex-col items-center justify-center gap-6 py-5 mb-8">
            <h2 className='text-[58px] text-white font-bold w-full text-center leading-18'>m10 səni qoruyur</h2>
            <p className='text-[18px] font-medium text-white'>Bizimlə pulların güvəndədir</p>
            <span className={`text-[18px]  text-white  bg-[#FF3333] rounded-4xl cursor-pointer py-4 px-6 transition duration-200 hover:opacity-90 font-bold`}>Aldadılmısan? Düyməni kliklə</span>
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
          <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f5cd27d96dabb571b9f5d2_button.svg" alt="m10Id" />
          <h2 className='text-[48px] text-[#141414] font-bold mb-14  w-[55%] text-center leading-15'>Biz yeni tanıma sistemi yaratdıq. İndi sən və pulların etibarlı şəkildə qorunur</h2>
          <div className='flex  items-center justify-center gap-6 w-[55%]'>
            {
              securityData.map((item, id) => (
                <div key={id} className="flex flex-col items-center gap-4 justify-start  bg-white rounded-4xl px-4 py-8 w-full min-h-70">

                  <img src={item.url} className={`w-15 h-15`} />
                  <div className="flex flex-col items-center justify-center gap-2 w-full">
                    <p className='selection:bg-[#99B3E8]text-[#141414] text-[18px] font-medium text-center leading-6'>{item.desc}</p>
                    {
                      id === 1 && (
                        <span className='underline cursor-pointer font-medium text-[#0c86ea] text-[16px] transition duration-200 opacity-100 hover:opacity-85'>Ətraflı</span>
                      )
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 justify-center w-full mb-15">
          <h2 className='text-[48px] text-[#141414] font-bold mb-14 mt-22.5'>Dələduzların tələsinə düşmə</h2>
          {
            rowData.map((item, id) => (
              <div className={`flex ${id % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center justify-center gap-10 w-[50%]`}>
                <img src={item.url} />
                <p className='text-[20px] text-[#141414] font-semibold leading-6'>{item.title}</p>
              </div>
            ))
          }
        </div>
        <div className="flex flex-col items-center justify-center w-[45%]">
          <h2 className='text-[48px] text-[#141414] font-bold mb-14 mt-22.5'>Yalnız bir m10 var</h2>
          <div className="grid grid-cols-3 justify-items-start w-full gap-y-8">
            {
              socialData.map((item, id) => (
                <Link to={item.link} className="flex flex-col gap-2 items-center justify-center  w-full transition duration-200 opacity-100 hover:opacity-90">
                  <div className="flex items-center justify-center relative">
                    <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68f4c116d6fe8cf9589edf3a_check.svg" className='absolute top-0 right-0' />
                    <img src={item.url} />
                  </div>
                  <span className='text-[18px] text-[#141414] font-medium'>{item.title}</span>
                </Link>
              ))
            }
          </div>
        </div>
        <Faq faq={securityFaq} />
      </div>
      <FooterSecurity />
    </div>
  )
}

export default Security
