import React from 'react'

const CountryTransition = () => {
  const transitionData = [
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/69ddf8c7c1aaea05c57f3827_Georgia.svg',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/69ddf8c74e2e1b49d4be4841_Kyrgyzstan.svg',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/69ddf8c7a1814856031f75a9_Poland.svg',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/69ddf8c726a05fa6ff0162e0_Kazakhstan.svg',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/69ddf8c7638514a02c0460df_Greece.svg',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/69ddf8c70743aa29f1183637_Croatia.svg',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/69ddf8c7b1d42363c2747995_Ukraine.svg',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/69ddf8c78a3c453700813b20_Uzbekista%CC%81n.svg',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/69ddf8c7923c7284ce67d747_Netherlands.svg',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/69ddf8c7edc9bbcb9992ee90_Philippines.svg',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/69ddf8c7398b8e9cbde6f9fd_Belarus.svg',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/69ddf8c8b039066597f7b55c_United%20Kingdom.svg',
  }
]
  return (
    <div className='flex flex-col items-center justify-center w-full gap-10 py-10 bg-white'>
      <div className="flex flex-col items-center justify-center w-full lg:w-[55%]">
        <h2 className='text-[36px] text-[#141414] font-bold mt-22.5 mb-14 w-[55%] leading-10 text-center md:text-[48px] md:w-[60%]'>150+ ölkəyə komissiyasız pul köçür</h2>
      </div>
      <div className="flex items-center justify-center overflow-hidden w-[95%]">
        <div className="flex items-center justify-center gap-2 w-full moving-box">
          {
            transitionData.map((item, id) => (
              <img src={item.url} className='w-21 h-21 mr-5 md:w-30 md:h-30' />
            ))
          }
          {
            transitionData.map((item, id) => (
              <img src={item.url} className='w-21 h-21 mr-5 md:w-30 md:h-30' />
            ))
          }
          {
            transitionData.map((item, id) => (
              <img src={item.url} className='w-21 h-21 mr-5 md:w-30 md:h-30' />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default CountryTransition
