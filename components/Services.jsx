import React from 'react'
import { Link } from 'react-router-dom'
import '../src/App.css'
import '../src/index.css'
const Services = ({serviceTitle}) => {
  const serviceData = [
    {
      title: 'Xidmətləri ödə',
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68efa4c769ab6065f3b8fb3d_12f30e9e51e0f24d0bd12f589967b108_bill.svg',
      link : '/bills'
    },
    {
      title: 'Gedişaqqını ödə',
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68efa4c702678016c30dca2b_8d079c05f22299a6a8e2be7f620abd3b_bakikart.svg',
      link : '/bakikart'
    },
    {
      title: 'QR ilə ödə',
      imgUrl: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68efa4c7050df87b1dffb148_8cda47652306a58ba0d81875dd10c89e_qr%20pay.svg',
      link : '/qr-pay'
    }
  ]
  return (
    <div className='flex items-center justify-center w-full my-16'>
      <div className="flex flex-col items-center justify-center  gap-10 w-[90%] sm:w-[90%] md:w-[90%] lg:w-[55%]">
        <h2 className='text-[36px] text-[rgb(20, 20, 20)] font-bold text-center leading-15 sm:text-[48px]'>{serviceTitle}</h2>
        <div className="gap-6 grid  w-full flex-wrap grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">

          {
            serviceData.map((item, id) => (
              <Link to={item.link} key={id} className="flex flex-col items-center justify-between w-full min-h-47.5 flex-1 pl-5 pt-5 pr-4 pb-4 rounded-4xl bg-white cursor-pointer group gap-10" reloadDocument>
                <div className="flex items-center justify-between w-full">
                  <h2 className='text-[15px] font-semibold text-[#141414] sm:text-[20px]'>{item.title}</h2>
                  <img src="https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ee5d43e9e6a4e9a26ff8f7_a06411de213f44c89d1794a8cc77e62f_arrow%20right.svg" alt="arrow-right" className='object-cover  transition transform duration-200 group-hover:translate-x-1 hidden lg:flex'/>
                </div>
                <img src={item.imgUrl} alt="icon-service" className='object-cover  self-end flex ' />
              </Link>
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Services
