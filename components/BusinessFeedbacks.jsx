import React from 'react'

const BusinessFeedbacks = () => {
  
  const feedbackData = [
    {
      holdingName : 'Azermed',
      fullName : 'Nəzər İsmayılov',
      Logo : 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e55541b468d910242f2411_azermed.png',
      desc : 'Birlikdə işləməkdən zövq aldım. m10 komandası əsl peşəkarlardan ibarətdir. Onlar diqqətli idilər və bütün sualları sürətlə cavablandırırdılar. Buna görə də, onlarla əvvəldən axıra kimi işləmək rahat və xoş idi.'
    },
     {
      holdingName : 'Liv Bona Dea',
      fullName : 'Taner Özbek',
      Logo : 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e5572a9863196d21b91e31_Liv%20Bona%20Dea.png',
      desc : 'm10 ilə işləmək əla qərardır. Menecerlər həmişə dəstəyə hazır əsl peşəkarlardır. Onlar müştərilərin razı olması üçün çalışırlar. Mən çox xoşbəxtəm və heç peşman deyiləm.'
    },
     {
      holdingName : 'AzermSaffron MMCed',
      fullName : 'Neman Abbasov',
      Logo : 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e5572ae53b9139ce7ab762_Saffron.png',
      desc : 'Bacarıqları ilə adamı heyran qoyan əla insanlardır. Məsuliyyətli, sürətli və detallara qarşı çox diqqətlidirlər. Problemləri sürətlə həll edirlər, nəticə gözlədiyimdən də daha yaxşı olurdu. İndi onlara tamamilə inanıram.'
    },
     {
      holdingName : 'Saglam Ailə',
      fullName : 'Fidan Kərimli',
      Logo : 'https://cdn.prod.website-files.com/687df8fbf77109d01f751481/68e5572a395d59e0b9c500ea_Saglam%20Ail%C9%99.png',
      desc : 'Bu şirkət müasir biznesin necə işləməli olduğunu göstərən parlaq nümunədir. Əla xidmət, sifarişlərin anında qəbulu və məhsulun möhtəşəm keyfiyyəti. Bütün mütəxəssislər hər an köməyə hazır olan öz işlərinin peşəkarıdır. Əməkdaşlığımızdan çox razıyam.'
    }
  ]
  return (
    <div className='flex flex-col items-center justify-center w-full my-15'>
      <h2 className='text-[48px] text-[#141414] font-bold text-center mb-10'>Rəylər</h2>
      <div className="grid grid-cols-2 justify-items-center gap-6 w-[55%] flex-wrap">
        {
          feedbackData.map((item,id) => (
            <div className="flex flex-col items-start justify-start w-full p-6 gap-6 rounded-4xl bg-[#ebe8e7]">
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col items-start justify-start">
                    <h2 className='text-[20px] text-[#141414] font-semibold'>{item.holdingName}</h2>
                    <span  className='text-[16px] text-[#848282] font-medium'>{item.fullName}</span>
                  </div>
                  <img src={item.Logo} />
                </div>
                <p className='text-[16px] text-[#1c1c1c] font-medium'>{item.desc}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BusinessFeedbacks
