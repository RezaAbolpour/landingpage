"use client";
import BodeyFAQ from "../component/BodeyFAQ/BodeyFAQ"
import FooterLandingPajeDesktop from "../component/FooterLandingPajeDesktop/FooterLandingPajeDesktop"
import HeaderFAQ from "../component/Headers/HeaderFAQ/HeaderFAQ"

function page() {
  return (
    <div dir="rtl" className='iran-sans'>
        <HeaderFAQ/>
        <BodeyFAQ/>
        <FooterLandingPajeDesktop/>
    </div>
  )
}

export default page