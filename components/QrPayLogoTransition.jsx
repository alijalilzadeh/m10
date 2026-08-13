import React from 'react'
const transitionData = [
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ea7fa62dd05e22b5e922b0_fdcbf1a20416500d03171efe2a26dce0_Health-1.png',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ea7fa3596b34c27f637e14_d653c860ad1942d457053216dc72aef5_Tam.png',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ea7fa3ea93197c4fe14620_da27cae74d1294a8f644a0df42b1d303_Groceries-4.png',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ea7fa3dab278a39491e519_392c6d3bbe3aa6a275d5fabfc400bc71_Gas%20Stations-1.png',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ea7fa3adc1bb7f27b8f69f_e4be7f7042de4d59f77f55987ae7476d_Al.png',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ea7fa3a9817a9b9eea0929_8340e81934a3311d9419457bdef8978c_Health.png',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ea7fa3270c128f8f445dbf_116f7507548b086c668107191b957c02_Groceries-3.png',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ea7fa30dc29ae8274cff29_2e3e8b20bc36cb83feca1d438e5f5358_Groceries.png',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ea7fa34b2db855524dedf6_da663932b9adb296f385a142cd8c8c8a_Gas%20Stations.png',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ea7fa368d6a33c57c7ea3e_61a393fe38dbb678b524ced75e7c3066_Mc.png',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ea7fa3f3b70ea83d826b90_2bd275cfede0ee88dc9fff0f7fa7eea5_Groceries-2.png',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ea7fa31a0a43eaeb264f42_e85776a2489bb8b149c26863b42e452a_Groceries-1.png',
  },
  {
    url: 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68ea7fa36b020fb9d4bb714d_edef708f1a4b7a5e8b058a7d4c72782f_Electronics.png',
  }
]
const QrPayLogoTransition = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-10'>
      <div className="flex flex-col items-center justify-center w-[55%]">
        <img src='https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68dbc000b0aca3a0fcba46eb_1dd4c899f7643c4b9dee4a2a533f4c03_bir%202%20bage.svg' />
        <h2 className='text-[48px] text-[#141414] font-bold '>m10-la ödəmək zövq verir</h2>
      </div>
      <div className="flex items-center justify-center overflow-hidden w-[90%]">
        <div className="flex items-center justify-center gap-2 w-full moving-box">
          {
            transitionData.map((item, id) => (
              <img src={item.url} />
            ))
          }
          {
            transitionData.map((item, id) => (
              <img src={item.url} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default QrPayLogoTransition
