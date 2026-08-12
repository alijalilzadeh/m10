import React from 'react'
import { Link } from 'react-router-dom'
import '../src/App.css'
import '../src/index.css'
import qrCode from '../src/assets/qrCode.png'
const Footer = () => {
  return (
    <div className='flex flex-col  items-center justify-center w-full rounded-t-4xl bg-[#141414] mt-10'>
      <div className="flex flex-col items-center justify-center w-[85%] py-22.5 gap-5">
        <div className="flex items-center justify-center bg-white rounded-4xl relative w-65 h-65">
          <img src={qrCode} className='w-55 h-55 flex object-cover' />
          <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d3b2ef48d6490b11ac04b6_m10%20logo.svg" alt="m10 download qr code" className='flex z-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'/>
        </div>
        <h2 className='text-[#F4F0EE] text-[48px] font-bold'>Tətbiqi yükləmək üçün skan et</h2>
        <div className="flex items-center justify-center gap-2">
          <Link className='transition duration-200 hover:opacity-80'>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d3cb85fdc0f4dde8081aff_Store%20download%20button-1.svg"  />
          </Link>
          <Link className='transition duration-200 hover:opacity-80'>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d3cb8568632ae54e7fda00_Store%20download%20button.svg" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-between  w-full  py-10 border-t border-t-[#2c2b2b]">
        <div className="flex items-center pl-15 gap-10 justify-center w-[75%]">

          <Link to='https://www.instagram.com/m10.az/' className='flex items-center justify-center transition duration-200 hover:opacity-80'>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e24d22e8ff90ded689f7e_24_icon_instagram.svg" alt="" />
          </Link>

          <Link to='https://www.facebook.com/m10.az/' className='flex items-center justify-center transition duration-200 hover:opacity-80'>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e24d2e46761cad367f3dc_24_icon_facebook.svg" alt="" />
          </Link>

          <Link to='wa.me/994774008810' className='flex items-center justify-center transition duration-200 hover:opacity-80'>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e24d2bb248fda1781d0df_24_icon_whatsapp.svg" alt="" />
          </Link>

          <Link to='mailto:info@m10.az' className='flex items-center justify-center transition duration-200 hover:opacity-80'>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e24d27409eaadf51c2f58_24_icon_letter_stroke.svg" alt="" />
          </Link>

          <Link to='tel:*8810' className='flex items-center justify-center gap-1 transition duration-200 hover:opacity-80'>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e24d779873c6a985f4024_24_icon_call_center_stroke.svg" alt="" />
            <span className='text-white font-bold'>*8810</span>
          </Link>

          <Link to='tel:966' className='flex items-center justify-center gap-1 transition duration-200 hover:opacity-80'>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e24d779873c6a985f4024_24_icon_call_center_stroke.svg" alt="" />
            <span className='text-white font-bold'>Mərkəzi Bank 966</span>
          </Link>


          <Link className='flex items-center justify-center gap-1 transition duration-200 hover:opacity-80'>
            <span className='text-white font-bold'>Məxfilik Siyasəti</span>
          </Link>


          <Link className='flex items-center justify-center gap-1 transition duration-200 hover:opacity-80'>
            <span className='text-white font-bold'>
              İstifadə Qaydaları
            </span>
          </Link>
          <Link to='/rates' className='flex items-center justify-center gap-1 transition duration-200 hover:opacity-80' reloadDocument>
            <span className='text-white font-bold'>
              Tariflər
            </span>
          </Link>
        </div>
        <Link to='/' className='flex items-center justify-center transition duration-200 hover:opacity-80 pr-15' reloadDocument>
          <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e24d376f98d0fe715e4db_48-logo-m10.svg" alt="m10 footer logo" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
