"use client";
import BodeyFAQ from "../component/BodeyFAQ/BodeyFAQ"
import FooterLandingPajeDesktop from "../component/FooterLandingPajeDesktop/FooterLandingPajeDesktop"
import Header from "../component/Headers/Header/Header";
import HeaderFAQ from "../component/Headers/HeaderFAQ/HeaderFAQ"

function page() {
  return (
    <div dir="rtl" className='iran-sans'>
        {/* <HeaderFAQ/> */}
        <Header/>
        <BodeyFAQ/>
        <FooterLandingPajeDesktop/>
    </div>
  )
}

export default page