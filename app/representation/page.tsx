"use client";
import BodeyRepresentation from "../component/BodeyRepresentation/BodeyRepresentation";
import FooterLandingPajeDesktop from "../component/FooterLandingPajeDesktop/FooterLandingPajeDesktop"
import HeaderRepresentation from "../component/Headers/HeaderRepresentation/HeaderRepresentation";

function page() {
  return (
    <div dir="rtl" className='iran-sans'>
        <HeaderRepresentation/>
        <BodeyRepresentation/>
        <FooterLandingPajeDesktop/>
    </div>
  )
}

export default page