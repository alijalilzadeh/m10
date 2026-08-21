import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import Footer from '../components/Footer'
import Services from '../components/Services'
import '../src/App.css'
import '../src/index.css'
import Finance from '../components/Finance'
import BirBonus from '../components/BirBonus'
import Faq from '../components/Faq'
const Home = ({ homeFaq }) => {
  const serviceTitle = 'Xidmətlər'
  const textColor = 'text-white'
  const DropdownUrl = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dcfd53a67fd07c7146c8b5_16_icon_chevron_down_stroke_white.svg'
  const m10Logo = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dcfd5a6635eec1a74d2c2c_m10-white.svg'
  const [pulMeselesi, setPulMeselesi] = useState('payment')
  const videoRef = useRef(null);
  const playVideo = () => {
    videoRef.current.play();
  }
  const stopVideo = () => {
    videoRef.current.pause();
  }

  const [slider, setSlider] = useState(0);
  const birEcosistem = [
    {
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dae2efe8611c8044db1b95_birbank.svg'
    },
    {
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dae2ef7f217e09341d71ad_birmarket.svg'
    },
    {
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dae2efcee6be6906b71ebc_m10.svg'
    },
    {
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dae2eff3de6dbd58cb76c7_4f706e18b4b7fa8957c6756c576cf437_million.svg'
    }
  ]
  const sliderData = [
    {
      imgUrl1: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/691f2063df07f22431bdd7fb_da43949350786b5287fdfa8a54fb2029_hero-section-crossboarder.png',
      imgUrl2: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/6920058df8a3a5056385632a_hero-section-crossborder.svg',
      title: 'Beynəlxalq köçürmələr',
      Link: '/international-transfers'
    },

    {
      imgUrl1: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/691f21d9f199ce17cfb55cc9_bb4f0b09d48688314526bbfc677a36be_hero-section-bakikart.png',
      imgUrl2: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/6920058e0c5490628180fb0e_hero-section-baki.svg',
      title: 'Nəqliyyatı m10-la ödə',
      Link: '/bakikart'
    },
    {
      imgUrl1: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/691f21d98e7b418cf013dd87_e494cb687ab7a79b44f552f7dbb45a6b_ChatGPT%20Image%20Nov%207%2C%202025%2C%2011_57_38%20AM%201.png',
      imgUrl2: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/6920058eecb32d66a2495ce2_hero-section-credit.svg',
      title: '25 000 ₼-dək kredit əldə et!',
      Link: '/credit'
    }
  ]

  const financeData = [
    {
      title: 'Xaricə pul köçürmələri',
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68efa4c7e0cfa1a27d51240c_23642c365fd66de4bbb825068de1eece_international.svg',
      link: '/international-transfers'
    },
    {
      title: '25 000 ₼-dək kredit',
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68efa4c76c9a8584549173ed_37a597f2f2d863ebbf63450a673b5b13_loan.svg',
      link: '/credit'
    },
    {
      title: 'Pul köçürmələri',
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68efa4c75c647b077e5c7de2_4ded7748d1c419d5530602987c546e54_transfers.svg',
      link: '/transfers'
    }
  ]
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    console.log(width)
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen overflow-x-hidden'>
      <div className="w-[99%] h-full flex flex-col items-start justify-center overflow-hidden relative lg:w-[95%] ">
        {
          width < 1024 && (
            <Navbar textColor={textColor} m10Logo={m10Logo} DropdownUrl={DropdownUrl} />

          )
        }

        <div style={{ transform: `translateX(-${slider * 100}%)`, }} className="flex  h-full transition-transform duration-500 ease-in-out">
          {sliderData.map((item, id) => (
            <div key={id} style={{ backgroundImage: `url(${item.imgUrl1})`, }} className="shrink-0 flex bg-no-repeat bg-cover  bg-center flex-col items-center h-full justify-start w-full rounded-4xl mt-16 lg:mt-0">
              {
                width > 1024 && (
                  <Navbar textColor={textColor} m10Logo={m10Logo} DropdownUrl={DropdownUrl} />

                )
              }
              <div className="flex flex-col items-center justify-center gap-4 pt-20 lg:pt-4">
                <h2 className="text-white text-[48px] font-bold md:text-[58px]">
                  {item.title}
                </h2>

                <Link to={item.Link} className="text-white underline text-[18px] font-medium transition duration-200 hover:opacity-80" reloadDocument>
                  Ətraflı
                </Link>
              </div>

              <div className="flex items-center justify-around w-full relative">
                <img onClick={() => {
                  if (slider === 0) {
                    setSlider(2);
                  } else {
                    setSlider(slider - 1);
                  }
                }} src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/6905d1a29fca44d816d95010_36_icon_chevron_left_stroke.svg" alt="left arrow" className="cursor-pointer absolute left-2 top-1/2" />

                <img src={item.imgUrl2} className="bg-center bg-cover w-300" alt="" />
                <img onClick={() => {
                  if (slider === 2) {
                    setSlider(0);
                  } else {
                    setSlider(slider + 1);
                  }
                }} src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/6905d1a257490f8f924cec57_36_icon_chevron_right_stroke.svg" alt="right arrow" className="cursor-pointer absolute right-2 top-1/2" />

              </div>

              <div className="flex items-center justify-center w-full py-4 gap-2">
                {sliderData.map((_, id) => (
                  <div key={id} onClick={() => setSlider(id)} className={`flex rounded-full w-2 h-2 cursor-pointer ${slider === id ? "bg-white" : "bg-[#897868]"}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Services serviceTitle={serviceTitle} />
      <Finance financeData={financeData} />
      <BirBonus />
      <div className="flex flex-col items-center justify-center w-full my-22.5 ">
        <div className="flex flex-col items-center justify-center  gap-6  w-[95%] sm:w-[90%] md:w-[95%] lg:w-[55%]">
          <h2 className='text-[36px] text-[#141414] font-bold text-center md:text-[48px]'>Pul məsələlərini sadələşdiririk</h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <span onClick={() => setPulMeselesi('payment')} className={`text-[18px] ${pulMeselesi === 'payment' ? " text-white  bg-[#141414]" : "text-[#141414]  bg-[#F5F4F5] border border-[#141414]"} rounded-4xl cursor-pointer p-2 px-4 transition duration-200 hover:opacity-90 font-medium`}>Ödənişlər</span>
            <span onClick={() => setPulMeselesi('transfers')} className={`text-[18px] ${pulMeselesi === 'transfers' ? " text-white  bg-[#141414]" : "text-[#141414]  bg-[#F5F4F5] border border-[#141414]"} rounded-4xl border border-[#141414] cursor-pointer p-2 px-4  font-medium transition duration-200 hover:opacity-90`}>Köçürmələr</span>
          </div>
          <video muted autoPlay loop src={`${pulMeselesi === 'payment' ? `https://cdn.prod.website-files.com/687df8fbf77109d01f751481%2F68f673df46b3cd60460813cd_bills-show-transcode.mp4` : `https://cdn.prod.website-files.com/687df8fbf77109d01f751481%2F68f673d6c5ec88584d11eb3d_transfers-show-transcode.mp4`} `} className='w-75 sm:w-82.5'></video>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  my-22.5 w-[95%] sm:w-[90%] md:w-[95%] lg:w-[55%]">
        <div className="flex flex-col items-center justify-center  gap-6 w-full ">
          <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dae2ef578fed32f07a27cf_logo-bir.svg" />
          <h2 className='text-[36px] text-[#141414] font-bold text-center md:text-[48px]'>Biz Bir ekosisteminin bir hissəsiyik</h2>
          <div className="grid grid-cols-2  gap-6 mt-2 justify-items-center  w-[80%] sm:grid-cols-2 md:grid-cols-4">
            {
              birEcosistem.map((item, id) => (
                <img src={item.imgUrl} alt='ecosystem-logo-image' className='opacity-50' />
              ))
            }
          </div>
        </div>
      </div>
      <Faq faq={homeFaq} />
      <Footer />
    </div>
  )
}

export default Home
