import React, { useState } from 'react'

const Faq = ({ faq }) => {
  const [faqStatus, setFaqStatus] = useState(false)
  const [faqId, setFaqId] = useState([]);
  
  return (
    <div className='flex items-center justify-center w-full my-22.5'>
      <div className="flex flex-col items-center justify-center w-[55%]">
        <h2 className='text-[48px] text-[#141414] font-bold text-center mb-10'>Tez-tez verilən suallar</h2>

        <div className="flex flex-col gap-4">
          {faq.map((item, id) => {
            const isOpen = faqId.includes(id);

            return (
              <div
                key={id}
                onClick={() => {
                  setFaqId((prev) =>
                    prev.includes(id)
                      ? prev.filter((faq) => faq !== id)
                      : [...prev, id]
                  );
                }}
                className={`flex flex-col items-center justify-center w-full transition-all duration-300 p-4 rounded-[20px] cursor-pointer bg-[#EBE8E7] ${isOpen ? "max-h-75" : "max-h-15"
                  }`}
              >
                <div className="flex items-center justify-between w-full">
                  <p className="text-[#141414] font-semibold text-[18px]">
                    {item.q}
                  </p>

                  <img
                    src={
                      !isOpen
                        ? "https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68eceb1d852237fd980a584a_aad1d560b673ef15e44e31636541c3d7_arrow%20drop%20down.svg"
                        : "https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68eced8789958c5cb067a937_cross%20icon%20accordion.svg"
                    }
                    alt="arrow-right"
                    className="flex object-cover w-4"
                  />
                </div>

                <div
                  className={`items-center justify-center w-full transition-all duration-1000 ease-in-out overflow-hidden ${isOpen
                      ? "max-h-50  pt-3"
                      : "max-h-0  pt-0"
                    }`}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Faq
