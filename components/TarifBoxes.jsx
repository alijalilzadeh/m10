import React from 'react'
import { Link } from 'react-router-dom'
const TarifBoxes = () => {
  const imgUrls = [
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d43d07c29968a8b45590a8_icon.svg',
      title: 'Telefon nömrəsi ilə',
      desc: 'Kart məlumatlarını yadda saxlamağa ehtiyac yoxdur'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d43d07789217f59caa8ebc_icon-1.svg',
      title: 'Limitsiz və komissiyasız',
      desc: 'İstədiyin vaxt, istədiyin qədər köçür'
    },
    {
      url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dba2783c234b8997a16a34_plane-icon.svg',
      title: 'Sadə və sürətli',
      desc: 'Pul saniyələr içində çatır'
    }
  ]
  return (
    <div className='flex flex-col  items-center justify-center gap-10 w-full mb-10'>
      <div className='flex  items-center justify-center gap-6 w-[50%] '>
        {
          imgUrls.map((item, id) => (
            <div key={id} className="flex flex-col items-center gap-4 justify-start w-[28%] bg-white rounded-4xl px-4 py-8 min-h-70">
              <img src={item.url} />
              <div className="flex flex-col items-center justify-center gap-2">
                <h2 className='text-[#141414] text-[20px] font-bold text-center leading-6'>{item.title}</h2>
                <p className='selection:bg-[#99B3E8] text-[14px] text-[#979797] text-center font-normal'>{item.desc}</p>
              </div>
            </div>
          ))
        }
      </div>

      <Link className='underline text-[#141414] text-[14px] font-[550] transition duration-200 opacity-100 hover:opacity-80'>Tariflər haqqında öyrən</Link>
    </div>
  )
}

export default TarifBoxes
