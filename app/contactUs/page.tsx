import Bodeycontact from "../component/BodeyContact/Bodeycontact"
import FooterLandingPajeDesktop from "../component/FooterLandingPajeDesktop/FooterLandingPajeDesktop"
import HeaderContact from "../component/Headers/HeaderContact/HeaderContact"

function page() {
  return (
    <div dir='rtl' className='iran-sans'>
        <HeaderContact/> 
        <Bodeycontact/>
        <FooterLandingPajeDesktop/>
    </div>
  )
}

export default page