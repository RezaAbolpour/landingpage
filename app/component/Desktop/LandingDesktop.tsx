import React from 'react'
import HeaderLandingPageDesktop from '../Headers/HeaderLandingPageDesktop/HeaderLandingPageDesktop'
import BodeyLandingDesktop from '../BodeyLandingDesktop/BodeyLandingDesktop'
import FooterLandingPajeDesktop from '../FooterLandingPajeDesktop/FooterLandingPajeDesktop'

function LandingDesktop() {
  return (
    <div dir='rtl' className='iran-sans'>
        <HeaderLandingPageDesktop/>
        <BodeyLandingDesktop/>
        <FooterLandingPajeDesktop/>
    </div>
  )
}

export default LandingDesktop