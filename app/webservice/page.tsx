"use client";
import React from 'react'
import Header from '../component/Headers/Header/Header'
import BodeyWebService from '../component/BodeyWebService/BodeyWebService'
import FooterLandingPajeDesktop from '../component/FooterLandingPajeDesktop/FooterLandingPajeDesktop'

function page() {
    return (
        <div dir="rtl" className='iran-sans'>
            <Header />
            <BodeyWebService />
            <FooterLandingPajeDesktop/>
        </div>
    )
}

export default page