import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='flex flex-col px-15 items-center justify-center w-full rounded-t-4xl bg-[#141414] mt-10'>
      <div className="flex flex-col items-center justify-center w-[85%] py-22.5 gap-5">
        <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d3b2ef48d6490b11ac04b6_m10%20logo.svg" alt="m10 download qr code" />
        <h2 className='text-[#F4F0EE] text-[48px] font-bold'>Tətbiqi yükləmək üçün skan et</h2>
        <div className="flex items-center justify-center gap-2">
          <Link>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d3cb85fdc0f4dde8081aff_Store%20download%20button-1.svg" alt="" />
          </Link>
          <Link>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d3cb8568632ae54e7fda00_Store%20download%20button.svg" alt="" />
          </Link>
        </div>

      </div>
      <div className="flex items-center justify-between  w-full px-15 py-6">
        <div className="flex items-center gap-10 justify-center">

          <Link to='https://www.instagram.com/m10.az/' className='flex items-center justify-center '>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e24d22e8ff90ded689f7e_24_icon_instagram.svg" alt="" />
          </Link>

          <Link to='https://www.facebook.com/m10.az/' className='flex items-center justify-center '>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e24d2e46761cad367f3dc_24_icon_facebook.svg" alt="" />
          </Link>

          <Link to='wa.me/994774008810' className='flex items-center justify-center '>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e24d2bb248fda1781d0df_24_icon_whatsapp.svg" alt="" />
          </Link>

          <Link to='mailto:info@m10.az'  className='flex items-center justify-center '>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e24d27409eaadf51c2f58_24_icon_letter_stroke.svg" alt="" />
          </Link>

          <Link  to='tel:*8810' className='flex items-center justify-center gap-1'>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e24d779873c6a985f4024_24_icon_call_center_stroke.svg" alt="" />
            <span className='text-white font-bold'>*8810</span>
          </Link>

          <Link to='tel:966' className='flex items-center justify-center gap-1'>
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e24d779873c6a985f4024_24_icon_call_center_stroke.svg" alt="" />
            <span className='text-white font-bold'>Mərkəzi Bank 966</span>
          </Link>


          <Link className='flex items-center justify-center gap-1'>
            <span className='text-white font-bold'>Məxfilik Siyasəti</span>
          </Link>


          <Link className='flex items-center justify-center gap-1'>
            <span className='text-white font-bold'>
              İstifadə Qaydaları

            </span>
          </Link>
          <Link className='flex items-center justify-center gap-1'>
            <span className='text-white font-bold'>

              Tariflər

            </span>
          </Link>
        </div>

        <Link to='/' className='flex items-center justify-center ' reloadDocument>
          <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/687e24d376f98d0fe715e4db_48-logo-m10.svg" alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
