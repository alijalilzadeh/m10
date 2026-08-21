import React, { useEffect, useState } from 'react'
const CreditCalculator = () => {
  const [value, setValue] = useState(19200);
  const [period, setPeriod] = useState(60)
  const [monthlyPayment, setMonthlyPayment] = useState(27);
  const min = 300
  const max = 20000
  const minPeriod = 12
  const maxPeriod = 60
  const amountProgress = ((value - min) / (max - min)) * 100;
  const monthProgress = ((period - minPeriod) / (maxPeriod - minPeriod)) * 100;
  useEffect(() => {
    const annualRate = 10.9;
    const monthlyRate = annualRate / 100 / 12;

    const payment =
      (value * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -period));

    setMonthlyPayment(Math.round(payment));
  }, [value, period]);
  return (
    <div id='calculate' className='flex flex-col items-center justify-center w-full'>
      <div className="flex flex-col items-center justify-center w-[80%] lg:w-[55%]">
        <h2 className='text-[#141414] text-[36px] font-bold text-center mb-14 w-full md:text-[48px]'>Aylıq ödənişini hesabla</h2>
        <div className="flex flex-col items-start justify-start w-full rounded-[20px] bg-white md:flex-row">
          <div className="flex flex-col items-start justify-start w-full pt-6 pl-6 pb-10 pr-10 gap-10 md:w-[60%]">
            <div className="flex flex-col items-start justify-start gap-4 w-full">
              <div className="flex items-start justify-between w-full">
                <p className='text-[#141414] font-semibold text-[14px]'>Kredit məbləği</p>
                <span className='px-3.75 py-0.5 rounded-full text-[#141414] font-semibold text-[14px] bg-[#F2F0EF]'>{value}</span>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <input min={min} max={max} step={100} type="range" value={value} onChange={(e) => setValue(Number(e.target.value))}
                  className="w-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #141414 ${amountProgress}%, #e5e5e5 ${amountProgress}%)`,
                  }} />
                <div className="flex items-center justify-between w-full mt-3">
                  <span className='text-[12px] font-medium text-[#5B5B5B]'>{min}  ₼</span>
                  <span className='text-[12px] font-medium text-[#5B5B5B]'>{max}  ₼</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-4 w-full">
              <div className="flex items-start justify-between w-full">
                <p className='text-[#141414] font-semibold text-[14px]'>Kreditin müddəti</p>
                <span className='px-3.75 py-0.5 rounded-full text-[#141414] font-semibold text-[14px] bg-[#F2F0EF]'>{period}</span>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <input min={minPeriod} max={maxPeriod} step={12} type="range" value={period} onChange={(e) => setPeriod(Number(e.target.value))}
                  className="w-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #141414 ${monthProgress}%, #e5e5e5 ${monthProgress}%)`,
                  }} />
                <div className="flex items-center justify-between w-full mt-3">
                  <span className='text-[12px] font-medium text-[#5B5B5B]'>12  ay</span>
                  <span className='text-[12px] font-medium text-[#5B5B5B]'>24  ay</span>
                  <span className='text-[12px] font-medium text-[#5B5B5B]'>36  ay</span>
                  <span className='text-[12px] font-medium text-[#5B5B5B]'>48  ay</span>
                  <span className='text-[12px] font-medium text-[#5B5B5B]'>60  ay</span>
                </div>
              </div>
              <p className='text-[12px] font-medium text-[#8C8C8C] mt-20'>İlkin hesablamadır. İctimai təklif hesab olunmur. Faiz fərdi hesablanır.</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between rounded-[20px] px-6 py-10 bg-[#2BD5C9] w-full gap-4 md:w-[40%]">
            <div className="flex flex-col items-start justify-start ">
              <p className='text-[#141414] font-semibold text-[14px]'>Faiz dərəcəsi</p>
              <h2 className='text-[#141414] font-bold text-[36px] leading-7'>10,9% -dən</h2>
            </div>

            <div className="flex flex-col items-start justify-start">
              <p className='text-[#141414] font-semibold text-[14px]'>Aylıq ödəniş</p>
              <h2 className='text-[#141414] font-bold text-[36px] -mt-2'>{monthlyPayment} ₼</h2>
            </div>
            <button className='mt-20 rounded-[64px] px-6 py-4 transition w-full duration-400 cursor-pointer bg-[#141414] text-white text-[16px] font-semibold hover:outline-3 hover:outline-white'>Müraciət etmək</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CreditCalculator
