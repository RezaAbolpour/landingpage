import React from 'react'
import Header from '../component/Headers/Header/Header'
import BodeyNumber from '../component/BodeyNumber/BodeyNumber'
import FooterLandingPajeDesktop from '../component/FooterLandingPajeDesktop/FooterLandingPajeDesktop'

function page() {
  return (
    <div dir="rtl" className='iran-sans'>
        <Header/>
        <BodeyNumber/>
        <FooterLandingPajeDesktop/>
    </div>
  )
}

export default page