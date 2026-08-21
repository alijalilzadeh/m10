import React from 'react'
import { Link } from 'react-router-dom'
const MediaLinks = () => {
  const mediaData = [
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ecfbd2ee70977b9c1abd4c_image.png', title: 'Kredit tarixçəsini necə yaxşılaşdırmaq olar?',link : 'https://ojurnal.az/how-to-improve-credit-history' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ecfbd2b164de93cc207027_image-1.png', title: 'Maliyyə savadlılığı dərsləri',link : 'https://ojurnal.az/' },
    { url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ecfbd25cca0c98a18c3fb0_image-2.png', title: 'Maliyyə savadlılığı ilə borcla mübarizə',link : 'https://ojurnal.az/' }
  ]
  return (
    <div className='flex items-center justify-center my-15 w-[90%] lg:w-[55%]'>
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className='text-[#141414] text-[36px] font-bold text-center mb-14 w-[70%] leading-15 md:text-[48px] '>Kredit götürməzdən əvvəl Bizim mediada oxu</h2>
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 w-full gap-3">
          {
            mediaData.map((item, id) => (
              <Link to={item.link} target='_blank' key={id} className="flex flex-col gap-4 items-start justify-start w-80 overflow-hidden relative cursor-pointer opacity-100 transition duration-200 hover:opacity-80 lg:w-full">
                <span className='absolute  top-3 left-3 text-[14px] font-semibold text-[#141414] px-3 py-0.5 rounded-4xl bg-white border border-[#141414]'>Məqalə </span>
                <img src={item.url} className='flex object-cover w-full rounded-4xl'/>
                <h2 className='text-[18px] font-medium text-[#141414] leading-6'>{item.title}</h2>
              </Link>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default MediaLinks
