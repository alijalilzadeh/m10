import React from 'react'
import qrCode from '../src/assets/qrCode.png'

const DownloadQrBox = ({download,setDownload}) => {
  return (
    <div className="flex items-center justify-center fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
      <div onClick={(e) => e.stopPropagation()} className='flex  items-center justify-center  w-150 h-80 relative bg-white rounded-3xl overflow-hidden'>
        <img onClick={()=>setDownload(false)} src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbe3330215f78cb24ab7a2_close%20(2).svg" className='cursor-pointer flex object-cover w-3 h-3 absolute top-6 left-6' />
        <div className="flex flex-col items-center justify-center gap-2 w-1/2 px-6">
          <h2 className='text-[20px] font-semibold text-[#141414]'>m10-u yüklə</h2>
          <p className='text-[16px] font-normal text-[#141414] text-center'>Yükləmək üçün telefonun kamerası ilə QR kodu skan et</p>
        </div>
        <div className="flex items-center justify-center bg-[#00ffca] h-full relative w-1/2">
          <div className="flex items-center justify-center bg-white rounded-4xl relative w-50 h-50">
            <img src={qrCode} className='w-40 h-40 flex object-cover' />
            <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68d3b2ef48d6490b11ac04b6_m10%20logo.svg" alt="m10 download qr code" className='flex z-4 w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadQrBox
