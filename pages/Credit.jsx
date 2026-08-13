import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CreditCalculator from '../components/CreditCalculator'
import MicroCreditLink from '../components/MicroCreditLink'
import MediaLinks from '../components/MediaLinks'
import Services from '../components/Services'
import Faq from '../components/Faq'
const Credit = () => {
  const serviceTitle = 'Lazım olan bütün xidmətlər – bir tətbiqdə'
  const textColor = 'text-[#141414]'
  const DropdownUrl = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e33df3874b267affd6acb_16_icon_chevron_down_stroke.svg'
  const m10Logo = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e0999e6e266a21c09fd8c_Group%202085663067.svg'
  const imgUrls = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbb590ac24720f8f1ad264_arche-1.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbb590d905775c52542cf6_arche.svg' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbb58f4ddc50981718aaa0_arche-2.svg' }
  ]
  const boxsData = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbb6a212fa13f5e9a5a4ea_icon.svg', title: '10,9 %-dən / 5 ilədək', desc: 'Faiz dərəcəsi kreditin məbləği və müddətinə görə müəyyən olunur' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbb6a263a04e5c49f0f52a_ID_icon.svg', title: 'Zamin və arayış olmadan', desc: 'Tətbiqdə şəxsiyyətini təsdiqləməyin kifayətdir' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbb6a21d806f570e77ced6_1fb4cc42b8b19479dcb2b1ee4f0673e6_speed-icon.svg', title: '2 dəqiqəyə rəsmiləşdirmə', desc: 'Proses onlayn şəkildə aparılır və pul dərhal hesaba köçürülür' }
  ]
  const howTo = [
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbb7bc6ef35a6c3708744f_937cc2b934d91320c0e00e79c5da6758_Step%201.svg',
      title: 'Tətbiqi aç, Kreditlər bölməsinə keç və kredit reytinqini öyrən'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbb7bb3335f0fc91e6fcda_Step%202.svg',
      title: 'Qısa video yoxlamadan keçərək şəxsiyyətini təsdiqlə'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbb7bbf2b97cb1c665acab_473677e6a6e343a27cd4a5a70fe9e65e_Step%203.svg',
      title: 'Şərtlərlə tanış ol və müraciətini təsdiqlə. Proses cəmi 2 dəqiqə çəkir və pul dərhal hesabına köçürülür'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbb7bb6d939b239172fbba_Step%204.svg',
      title: 'Vəsaiti Birbank bankomatından nağdlaşdıra və ya karta köçürə bilərsən: ',
      link: 'təlimat'
    }
  ]
  const creditFaq = [
    {
      q:'Mənə krediti m10 yoxsa Kapital Bank verir?',
      a: 'Kredit Kapital Bank tərəfindən verilir, onu m10 tətbiqi vasitəsilə idarə etmək mümkündür.'
    },
    {
      q:'Kreditdə komissiya varmı?',
      a: 'Kredit tarixçənə və aylıq ödəniş məbləğinə əsasən, kredit 0%-dən 3%-dək komissiya ilə rəsmiləşdirilə bilər.'
    },
    {
      q:'Krediti vaxtında ödəməsəm nə baş verir?',
      a: 'Əgər ödənişi gecikdirsən, vaxtı keçmiş əsas borc məbləğinin 0,6-1 %-i qədərində cərimə hesablanacaq.'
    },
    {
      q:'Artıq ödəniş etsəm nə baş verəcək?',
      a: 'Əgər son ödəniş tarixinədək artıq ödəniş etsən, yüklədiyin əlavə pul kreditin silinməsinə yönəldiləcək. Əvvəlcədən ödəniş üçün əlavə komissiya tutulmur.'
    },
    {
      q:'m10-dan eyni anda iki kredit götürə bilərəm?',
      a: 'Xeyr, m10-da eyni anda yalnız bir nağd kreditin ola bilər.'
    },
    {
      q:'Kreditin ödəmə tarixini dəyişə bilərəm?',
      a: 'Xeyr, ödəniş qrafiki dəyişdirilmir.'
    },
    {
      q:'Gecikməm olarsa m10 və Kapital Bank hesablarımdan pul silinəcək?',
      a: 'Hazırda m10-da belə bir hal yoxdur. Bank isə gecikmiş kreditə görə hesabından vəsait silə bilər.'
    },
    {
      q:'m10-dakı pulumu necə nağdlaşdırım?',
      a: 'İstənilən Kapital Bank bankomatına yaxınlaşıb "pul çıxarmaq" sonra isə ”məbləği daxil edin” bölməsinə keç. Ardınca "QR kodu yarat" düyməsinə bas və m10 ilə QR kodu skan et. Ekranda göstərilən kodu daxil et və nağd pulunu götür. İstəsən ölkə daxilindəki istənilən bank kartına da vəsait köçürə bilərsən. Komissiya 0.5% (min. 1 AZN)'
    }
    
  ]
  return (
    <div className='w-full flex flex-col items-start justify-center min-h-screen overflow-x-hidden'>
      <Helmet>
        <title>25 000 ₼-dək kredit əldə et!</title>
        <meta name="description" content="transfers" />
      </Helmet>
      <div className='flex flex-col items-center gap-15 justify-center w-full h-full '>
        <div className=" flex flex-col items-center h-full justify-center w-full rounded-4xl bg-white relative">
          <Navbar textColor={textColor} DropdownUrl={DropdownUrl} m10Logo={m10Logo} />
          <div className="flex flex-col items-center justify-center gap-6 py-5 mb-8">
            <h2 className='text-[58px] text-[#141414] font-bold'>25 000 ₼-dək kredit əldə et!</h2>
            <p className='text-[18px] font-medium text-[#141414]'>Cəmi 2 dəqiqəyə və tamamilə onlayn şəkildə</p>
            <span className={`text-[18px]  text-white  bg-[#141414] rounded-4xl cursor-pointer py-4 px-6 transition duration-200 hover:opacity-90 font-bold`}>Müraciət et</span>
          </div>
          <div className="flex items-center justify-center  pb-10">
            {
              imgUrls.map((item, id) => (
                <img src={item.url} alt='arche' />
              ))
            }
          </div>
        </div>
        <div className='flex flex-col  items-center justify-center gap-10 w-full mb-10'>
          <div className='flex  items-center justify-center gap-6 w-[50%] '>
            {
              boxsData.map((item, id) => (
                <div key={id} className="flex flex-col items-center gap-4 justify-start w-[28%] bg-white rounded-4xl px-4 py-8 min-h-70">
                  <img src={item.url} />
                  <div className="flex flex-col items-center justify-center gap-2">
                    <h2 className='text-[#141414] text-[20px] font-semibold text-center leading-6'>{item.title}</h2>
                    <p className='selection:bg-[#99B3E8] text-[14px] text-[#979797] text-center font-normal'>{item.desc}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <CreditCalculator />
        <div className="flex flex-col items-center justify-center w-[55%]">
          <h2 className='text-[#141414] text-[48px] font-bold text-center leading-6 my-14'>Əldə etmək çox asan!</h2>
          <div className="flex  flex-wrap  gap-6 mt-5">
            {
              howTo.map((item, id) => (
                <div key={id} className="flex flex-col items-start w-100 justify-start relative ">
                  <span className='absolute top-4 left-4 items-center flex justify-center w-8 h-8 rounded-full text-[#141414] font-medium bg-[#FFFFFF] border border-[#141414]'>{id + 1}</span>
                  <div className="flex items-center justify-center  bg-[#EBE8E7] rounded-4xl mb-6">
                    <img src={item.url} className='flex object--cover w-full' />
                  </div>
                  <h2 className='text-[#141414] text-[18px] font-medium'>{item.title}</h2>
                </div>
              ))
            }
          </div>
        </div>
        <MicroCreditLink />
        <MediaLinks />
        <Services serviceTitle={serviceTitle} />
        <Faq faq={creditFaq} />
      </div>
      <Footer />
    </div>
  )
}

export default Credit
