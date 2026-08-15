import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
const NoMatch = () => {
  const textColor = 'text-[#141414]'
  const serviceTitle = 'Lazım olan bütün xidmətlər – bir tətbiqdə'
  const DropdownUrl = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e33df3874b267affd6acb_16_icon_chevron_down_stroke.svg'
  const m10Logo = 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e0999e6e266a21c09fd8c_Group%202085663067.svg'
  return (
    <div className='w-full flex flex-col items-start justify-start min-h-screen overflow-x-hidden'>
      <Helmet>
        <title>Not found</title>
        <meta name="description" content="transfers" />
      </Helmet>
      <div className='flex flex-col items-center  justify-center w-full h-full '>
        <div className=" flex flex-col items-center h-full justify-center w-full rounded-4xl relative">
          <Navbar textColor={textColor} DropdownUrl={DropdownUrl} m10Logo={m10Logo} />
          <div className="flex flex-col items-center justify-center gap-6 py-5 my-15 ">
            <h2 className='text-[58px] text-[#141414] font-bold  text-center leading-18 w-[90%]'>Ayy! Belə bir səhifə bizdə yoxdur</h2>
            <Link to='/' className={`text-[18px]  text-white  bg-[#141414] rounded-4xl cursor-pointer py-4 px-6 transition duration-200 hover:opacity-90 font-bold`}>Əsas səhifə</Link>
          </div>
        </div>
        <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e6bac7a82d011527dee022_error.svg" className='-mb-11 flex' />
      </div>
      <Footer />
    </div>
  )
}

export default NoMatch
