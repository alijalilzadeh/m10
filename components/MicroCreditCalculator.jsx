import React from 'react'
import { useState, useEffect } from 'react';
const MicroCreditCalculator = () => {
  const [value, setValue] = useState(10000);
  const [period, setPeriod] = useState(12)
  const [annualRate,setAnnualRate] = useState(22)
  const [monthlyPayment, setMonthlyPayment] = useState(27);
  const min = 1000
  const max = 100000
  const minPeriod = 6
  const maxPeriod = 36
  const annualRateMin = 22
  const annualRateMax = 30
  const amountProgress = ((value - min) / (max - min)) * 100;
  const monthProgress = ((period - minPeriod) / (maxPeriod - minPeriod)) * 100;
  const rateProgress = ((annualRate - annualRateMin) / (annualRateMax - annualRateMin)) * 100;
  useEffect(() => {
    const monthlyRate = annualRate / 100 / 12;

    const payment =
      (value * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -period));

    setMonthlyPayment(payment.toFixed(2).replace(".", ","));
  }, [value, period, annualRate]);
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className="flex flex-col items-center justify-center w-[55%]">
        <h2 className='text-[#141414] text-[48px] font-bold text-center mb-14'>Aylıq ödənişini hesabla</h2>
        <div className="flex items-start justify-start w-full rounded-[20px] bg-white">
          <div className="flex flex-col items-start justify-start w-[60%] pt-6 pl-6 pb-10 pr-10 gap-10 selection:bg-[#C8C8C8]">
            <div className="flex flex-col items-start justify-start gap-4 w-full">
              <div className="flex items-start justify-between w-full">
                <p className='text-[#141414] font-semibold text-[14px]'>Kredit məbləği</p>
                <span className='pr-3.75 pl-15 py-1 rounded-full text-[#141414] font-semibold text-[14px] bg-[#F2F0EF] gap-2 flex items-center justify-center'>{value} <span className='text-[#838281]'>₼</span></span>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <input min={min} max={max} step={100} type="range" value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full appearance-none cursor-pointer" style={{ background: `linear-gradient(to right, #141414 ${amountProgress}%, #e5e5e5 ${amountProgress}%)`, }} />
                <div className="flex items-center justify-between w-full mt-3">
                  <span className='text-[12px] font-medium text-[#5B5B5B]'>{min}  ₼</span>
                  <span className='text-[12px] font-medium text-[#5B5B5B]'>{max}  ₼</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-4 w-full">
              <div className="flex items-start justify-between w-full">
                <p className='text-[#141414] font-semibold text-[14px]'>Kreditin müddəti</p>
                <span className='pr-3.75 pl-15 py-1 rounded-full text-[#141414] font-semibold text-[14px] bg-[#F2F0EF]  gap-2 flex items-center justify-center'>{period} <span className='text-[#838281]'>ay</span></span>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <input min={minPeriod} max={maxPeriod} step={6} type="range" value={period} onChange={(e) => setPeriod(Number(e.target.value))} className="w-full appearance-none cursor-pointer" style={{ background: `linear-gradient(to right, #141414 ${monthProgress}%, #e5e5e5 ${monthProgress}%)`, }} />
                <div className="flex items-center justify-between w-full mt-3">
                  <span className='text-[12px] font-medium text-[#5B5B5B]'>6  ay</span>
                  <span className='text-[12px] font-medium text-[#5B5B5B]'>36  ay</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-4 w-full">
              <div className="flex items-start justify-between w-full">
                <p className='text-[#141414] font-semibold text-[14px]'>Faiz dərəcəsi</p>
                <span className='pr-3.75 pl-15 py-1 rounded-full text-[#141414] font-semibold text-[14px] bg-[#F2F0EF]'>{annualRate} <span className='text-[#838281]'>%</span></span>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <input min={annualRateMin} max={annualRateMax}  type="range" value={annualRate} onChange={(e) => setAnnualRate(Number(e.target.value))} className="w-full appearance-none cursor-pointer" style={{ background: `linear-gradient(to right, #141414 ${rateProgress}%, #e5e5e5 ${rateProgress}%)`, }} />
                <div className="flex items-center justify-between w-full mt-3">
                  <span className='text-[12px] font-medium text-[#5B5B5B]'>22%</span>
                  <span className='text-[12px] font-medium text-[#5B5B5B]'>30%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center rounded-[20px] px-6 py-10 bg-[#2BD5C9] w-[40%] selection:bg-[#56C3BB]">
            <div className="flex flex-col items-start justify-start">
              <p className='text-[#141414] font-semibold text-[14px]'>Aylıq ödəniş</p>
              <h2 className='text-[#141414] font-bold text-[36px] -mt-2'>{monthlyPayment} ₼</h2>
              <p className='text-[#1D615C] font-medium text-[12px]'>Bu ilkin hesablamadır. İctimai təklif deyil. Faiz dərəcəsi müraciətə əsasən fərdi hesablanır. </p>

            </div>

            <button className='mt-20 rounded-[64px] px-6 py-4 transition w-full duration-400 cursor-pointer bg-[#141414] text-white text-[16px] font-semibold hover:outline-3 hover:outline-white'>Müraciət etmək</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MicroCreditCalculator
