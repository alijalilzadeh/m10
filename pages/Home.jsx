import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Footer from './Footer'
const Home = () => {
  const [slider, setSlider] = useState(0);
  const sliderData = [
    {
      imgUrl1: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/691f2063df07f22431bdd7fb_da43949350786b5287fdfa8a54fb2029_hero-section-crossboarder.png',
      imgUrl2: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/6920058df8a3a5056385632a_hero-section-crossborder.svg',
      title: 'Beynəlxalq köçürmələr',
      Link: 'Ətraflı'
    },

    {
      imgUrl1: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/691f21d9f199ce17cfb55cc9_bb4f0b09d48688314526bbfc677a36be_hero-section-bakikart.png',
      imgUrl2: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/6920058e0c5490628180fb0e_hero-section-baki.svg',
      title: 'Nəqliyyatı m10-la ödə',
      Link: 'Ətraflı'
    },
    {
      imgUrl1: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/691f21d98e7b418cf013dd87_e494cb687ab7a79b44f552f7dbb45a6b_ChatGPT%20Image%20Nov%207%2C%202025%2C%2011_57_38%20AM%201.png',
      imgUrl2: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/6920058eecb32d66a2495ce2_hero-section-credit.svg',
      title: '25 000 ₼-dək kredit əldə et!',
      Link: 'Ətraflı'
    }
  ]
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
      <Navbar />
      <div className='flex items-center justify-center w-full h-full flex-col'>
        <div style={{ backgroundImage: `url(${sliderData[slider].imgUrl1} )` }} className={`flex bg-no-repeat bg-cover bg-center flex-col items-center h-full justify-center w-[95%] rounded-4xl pt-25 transition transfrom duration-200 `}>
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className='text-white text-[58px] font-bold'>{sliderData[slider].title}</h2>
            <Link className='text-white underline text-[18px] font-medium transition duration-200 hover:opacity-90'>{sliderData[slider].Link}</Link>
          </div>
          <div className="flex items-center justify-around w-full relative">
            <img onClick=
              {
                () => {
                  if (slider === 0) {
                    setSlider(2)
                  }
                  else if (slider != 0 && slider <= 2) {
                    setSlider(slider - 1)
                  }
                }
              } src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/6905d1a29fca44d816d95010_36_icon_chevron_left_stroke.svg" alt="left arrow" className='cursor-pointer' />
            <img src={sliderData[slider].imgUrl2} className='bg-center bg-cover w-300' alt="" />
            <img onClick=
              {
                () => {
                  if (slider === 2) {
                    setSlider(0)
                  }
                  else if (slider != 2 && slider >= 0) {
                    setSlider(slider + 1)
                  }
                }
              } src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/6905d1a257490f8f924cec57_36_icon_chevron_right_stroke.svg" alt="right arrow" className='cursor-pointer' />
          </div>
          <div className="flex items-center justify-center w-full py-4 gap-2">
            {
              sliderData.map((item, id) => (
                <div key={id} onClick={() => setSlider(id)} className={`flex rounded-full w-2 h-2 cursor-pointer ${slider === id ? "bg-white" : " bg-[#897868]"}`}></div>
              ))
            }
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
