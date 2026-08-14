import { Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import Home from '../pages/Home'
import Transfer from '../pages/Transfer'
import Rates from '../pages/Rates'
import Credit from '../pages/Credit'
import Bills from '../pages/Bills'
import QrPay from '../pages/QrPay'
import BakiKart from '../pages/BakiKart'
import Security from '../pages/Security'
import InternationalTransfers from '../pages/InternationalTransfers'
import RusiyayaPulGondermek from '../pages/RusiyayaPulGondermek'
function App() {
  const homeFaq = [
    {
      q:'m10 tətbiqində necə qeydiyyatdan keçim?',
      a: 'm10 tətbiqində qeydiyyatdan keçmək çox sadədir və cəmi bir neçə dəqiqə çəkir. App Store və ya Google Play vasitəsilə m10 tətbiqini yüklə.- Tətbiqi aç və telefon nömrəni daxil et.- SMS vasitəsilə göndərilən təsdiq kodunu daxil edərək qeydiyyatı tamamla.Bundan sonra m10 tətbiqindən istifadə edərək ödənişlər edə və pul köçürmələri həyata keçirə bilərsən.'
    },
    {
      q:'m10 ilə harada ödəyə bilərəm?',
      a: 'm10 ilə 20 000-dən çox satış nöqtəsində ödəniş edə bilərsən. Tərəfdaşların tam siyahısına tətbiqdən bax. QR kodla ödə və xərclədiyin məbləğin bir hissəsini bonuslar şəklində geri al.'
    },
    {
      q:'m10-da necə qazana bilərəm?',
      a: 'm10 ilə ödəniş etdikcə bonuslar qazanırsan. Kommunal xidmətlər, internet, mobil rabitə və mağazalarda QR ilə ödəniş zamanı xərclədiyin məbləğin bir hissəsi bonuslar şəklində geri qaytarılır.'
    },
    {
      q:'Ödəniş şablonları necə yarada bilərəm?',
      a: 'm10 tətbiqində tez-tez etdiyin ödənişlər avtomatik olaraq “Ödənişlərim” bölməsinə əlavə olunur.Burada:- Ödəniş şablonlarını saxlaya bilərsən- Onların adını dəyişə bilərsən- Artıq lazım olmayan şablonları silə bilərsən. Bu funksiya tez-tez edilən ödənişləri daha sürətli həyata keçirməyə kömək edir.'
    },
    {
      q:'Doğrudur ki, m10-dan pullar oğurlanır?',
      a: 'm10 tətbiqi istifadəçilərin vəsaitlərinin təhlükəsizliyini qorumaq üçün müasir təhlükəsizlik texnologiyalarından istifadə edir və 24/7 monitorinq sistemi ilə işləyir.Bununla belə, istifadəçilərin də təhlükəsizlik qaydalarına riayət etməsi vacibdir.Heç vaxt aşağıdakı məlumatları başqaları ilə paylaşma:- Bank kartının nömrəsi- CVV kodu- SMS ilə gələn OTP kodu.Bu məlumatların paylaşılmaması hesabının təhlükəsizliyini qorumağa kömək edir.'
    },
    {
      q:'m10-da nömrəmi necə dəyişim?',
      a: 'Təəssüf ki, hazırda nömrəni dəyişə bilmirik. Amma sən başqa nömrə ilə qeydiyyatdan keçə və bir neçə m10 hesabından istifadə edə bilərsən.'
    },
    {
      q:'m10-da köçürmələrə komissiya tətbiq olunur?',
      a: 'm10 tətbiqində m10 istifadəçiləri arasında pul köçürmələri komissiyasızdır.Bank kartına köçürmələr zamanı isə köçürmə məbləğindən asılı olaraq kiçik komissiya tətbiq oluna bilər:- 5000 AZN-ə qədər köçürmələr üçün 0.5% komissiya- 20000 AZN-ə qədər köçürmələr üçün 0.3% komissiya'
    },
    {
      q:'m10-da 300 azn limit nə deməkdir?',
      a: 'FİN qeydiyyatından keçməmiş istifadəçilər üçün m10 hesabında aylıq əməliyyat limiti mövcuddur.Bu halda:- Balans 300 AZN-dən çox ola bilməz- Aylıq ödənişlərin ümumi məbləği 300 AZN-i keçə bilməz'
    },
    {
      q:'m10-da FİN qeydiyyatım yoxdursa, balansımı necə artıra bilərəm?',
      a: 'FİN qeydiyyatı olmadan balansı artırmaq mümkündür.Balansını aşağıdakı üsullarla artıra bilərsən:-Bank kartı vasitəsilə- MilliÖn terminalları vasitəsilə Lakin balansın aylıq limiti 300 AZN-dən çox ola bilməz.'
    },
    {
      q:'m10-da FİN qeydiyyatım yoxdursa, hansı əməliyyatları yerinə yetirə bilərəm?',
      a: 'FİN qeydiyyatı olmadan m10 tətbiqində aşağıdakı əməliyyatları həyata keçirmək mümkündür:- BakıKart ödənişləri- QR kod ilə ödəniş- Tətbiqdaxili ödənişlər m10-da FİN qeydiyyatından keçməmiş istifadəçilərin balansı 1 ay ərzində 300 azn-ı keçməməlidir. Eyni zamanda 1 ay ərzində m10-da edilən ödənişlərin cəmi 300 azn-ı keçməməlidir.'
    },
    {
      q:'m10 daxilində 300 AZN dövriyyə limitinin aradan qaldırılması üçün nə etməliyəm?',
      a: 'm10 tətbiqində 300 AZN dövriyyə limitini aradan qaldırmaq üçün FİN qeydiyyatından keçmək lazımdır.FİN qeydiyyatını tamamladıqdan sonra hesab üzrə məhdudiyyətlər aradan qalxır və tətbiqin bütün funksiyalarından istifadə etmək mümkün olur.'
    },
    {
      q:'m10-da FİN qeydiyyatdan keçməmişəmsə, hansı funksiyalardan istifadə edə bilməyəcəm?',
      a: 'FİN qeydiyyatı olmayan istifadəçilər aşağıdakı əməliyyatları edə bilməz:- Nağdlaşdırma - Bank kartına köçürmə - m10-dan m10-a köçürmə - Kredit götürmə - Beynəlxalq köçürmələr. Bu funksiyalardan istifadə etmək üçün FİN qeydiyyatından keçmək lazımdır.'
    },
    {
      q:'m10-da bonuslar qazanmaq üçün nə etməliyəm?',
      a: 'm10 tətbiqində bonuslar qazanmaq üçün FİN qeydiyyatından keçmək lazımdır.FİN qeydiyyatını tamamladıqdan sonra edilən ödənişlərə görə bonuslar əldə etmək mümkündür.'
    },
    {
      q:'m10-da FİN qeydiyyatım yoxdursa, mənim hesabıma pul göndərilə bilər?',
      a: 'Bəli, FİN qeydiyyatı olan istifadəçilər FİN qeydiyyatı olmayan istifadəçilərə pul göndərə bilərlər.Lakin bu halda hesab üzrə aylıq əməliyyat limiti 300 AZN olacaq.'
    }
  ]
  return (
    <Routes>
      <Route path="/" element={<Home homeFaq={homeFaq} />} />
      <Route path="/transfers" element={<Transfer />} />
      <Route path="/rates" element={<Rates />} />
      <Route path="/credit" element={<Credit />} />
      <Route path="/bills" element={<Bills />} />
      <Route path="/qr-pay" element={<QrPay />} />
      <Route path="/bakikart" element={<BakiKart />} />
      <Route path="/security" element={<Security />} />
      <Route path="/international-transfers" element={<InternationalTransfers />} />
      <Route path="/rusiyaya-pul-gondermek" element={<RusiyayaPulGondermek />} />
    </Routes>
  )
}
export default App